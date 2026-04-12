const fs = require("fs");
const path = require("path");

const cars = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/carInformation.json"))
);

const cache = {};

const finalCars = cars.cars.map((car) => {
  try {
    const key = `${car.brand}-${car.model}`;

    if (!cache[key]) {
      const imagePath = path.join(
        __dirname,
        "../data/carsData",
        car.brand,
        car.model,
        `${car.brand}-${car.model}.json`
      );

      console.log("⏳ Trying to read:", imagePath);

      
      if (!fs.existsSync(imagePath)) {
        console.warn(`❌ File not found for ${key}:`, imagePath);
        cache[key] = {}; 
      } else {
        console.log("📂 Reading file:", key);
        cache[key] = JSON.parse(fs.readFileSync(imagePath));
      }
    }

    const modelImages = cache[key];
    const carImages = modelImages[car.model]?.[car.year];

    if (!carImages) {
      console.warn(`⚠️ No images for ${car.model} ${car.year}`);
    }

    return {
      ...car,
      mainImages: carImages || {}
    };

  } catch (err) {
    console.warn(`❌ Error for ${car.brand} ${car.model}:`, err.message);
    return {
      ...car,
      mainImages: {}
    };
  }
});

// حفظ النتيجة
const outputPath = path.join(__dirname, "../public/data/finalCars.json");
fs.writeFileSync(outputPath, JSON.stringify(finalCars, null, 2));

console.log("✅ Done! File saved at:", outputPath);