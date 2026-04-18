import {
  Box,
  Autocomplete,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

//icons
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
//hooks
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

//files
import "../../App.css";
import MenuComponent from "./menu";
import ShowList from "./galleryShowList";
import ShowMasonry from "./galleryShowMasonry";
import ShowGrid from "./galleryShowGrid";
import PagesLoading from "../skeletons/pagesSkeleton";
import { useCarData } from "../../hooks/carData";
import EmptySkeleton from "../skeletons/emptySkeleton";
import SearchLoading from "../skeletons/searchLoading";

const colors = [
  { name: "Black", hex: "#000000" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Red", hex: "#FF0000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Gray", hex: "#708090" },
  { name: "Brown", hex: "#483C32" },
];
//بيانات المينو الخاص بطريقة عرض الصور
const menuData = [
  { text: "Gallery", icon: <ViewQuiltIcon /> },
  { text: "Grid", icon: <GridViewIcon /> },
  { text: "List", icon: <ViewListIcon /> },
];

function Gallery2D() {
  //حالة عرض وإخفاء حقول الفلترة
  const [showFilterElemet, setShowFilterElement] = useState(false);
  // حالة جلب بيانات حقول الفلترة والصور
  const [data, setData] = useState({ brands: [], cars: [] });
  //حالة حقل البحث
  const [inputSearchValue, setInputSearchValue] = useState("");
  //حالة حقل الشركة والموديل
  const [brandValue, setBrandValue] = useState({ brand: null, model: null });
  //حالة حقل اللون
  const [colorValue, setColorValue] = useState(null);
  //حالة طريقة العرض
  const [value, setValue] = useState("");
  //حالة انيميشن الفلترة
  const [uiLoading, setUiLoading] = useState(false);

  const lottieRef = useRef(null);

  //جلب البيانات
  const { carData, brands, loading } = useCarData();
  useEffect(() => {
    setData({ brands: brands, cars: carData });
  }, [carData, brands]);

  //إظهار الانيميشن كل فترة زمنية//
  useEffect(() => {
    const interval = setInterval(() => {
      if (lottieRef.current) {
        lottieRef.current.stop();
        lottieRef.current.play();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  //اظهار انيميشن الانتظار اثناء الفلترة
  useEffect(() => {
    setUiLoading(true);
    const timeout = setTimeout(() => {
      setUiLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputSearchValue, brandValue, colorValue]);

  //منطق الفلترة//
  const filterImg = useMemo(() => {
    return data.cars.filter((imgObject) => {
      const brand = (imgObject.brand || "").toLowerCase();
      const model = (imgObject.model || "").toLowerCase();
      const year = imgObject.year || "";
      const color = (imgObject.colors || imgObject.color || "").toLowerCase();

      const search = (inputSearchValue || "")
        .toLowerCase()
        .trim()
        .split(/[\s-]+/);

      const selectedBrand = (brandValue.brand || "").toLowerCase();
      const selectModel = (brandValue.model || "").toLowerCase();
      const selectColor = (colorValue?.name || "").toLowerCase();

      const allInfo = `${brand} ${model} ${year} ${color}`;

      return (
        search.every((term) => allInfo.includes(term)) &&
        (selectedBrand === "" || brand === selectedBrand) &&
        (selectModel === "" || model === selectModel) &&
        (selectColor === "" || color === selectColor)
      );
    });
  }, [data.cars, inputSearchValue, brandValue, colorValue]);

  //infinite scroll//
  const LIMIT = 4;
  const [visible, setVisible] = useState([]);
  const [page, setPage] = useState(1);
  const hasMore = visible.length < filterImg.length;

  // reset عند تغيير الفلترة
  useEffect(() => {
    setPage(1);
    setVisible([]);
  }, [filterImg]);

  // تحميل البيانات
  useEffect(() => {
    const start = (page - 1) * LIMIT;
    const end = page * LIMIT;

    const newImages = filterImg.slice(start, end);

    setVisible((prev) => [...prev, ...newImages]);
  }, [page, filterImg]);

  // observer
  const observer = useRef();
  const lastRef = useCallback(
    (node) => {
      if (!node) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prev) => prev + 1);
          }
        },
        {
          rootMargin: "200px",
        }
      );
      observer.current.observe(node);
    },
    [hasMore]
  );

  //عرض خيارات الشركات
  const brandsOptions = data.brands.map((brand) => brand.brand);

  //عرض خيارات الفئات حسب كل شركة
  const categoriesOptions = useMemo(() => {
    if (!brandValue.brand) {
      return data.brands.map((brand) => brand.models).flat();
    }
    const foundBrand = data.brands.find((b) => b.brand === brandValue.brand);
    return foundBrand ? foundBrand.models : [];
  }, [brandValue, data.brands]);

  //حفظ قيم الحقول في localStorage
  useEffect(() => {
    const savedSearch = localStorage.getItem("search");
    if (savedSearch) {
      setInputSearchValue(savedSearch);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("search", inputSearchValue);
  }, [inputSearchValue]);


  if (loading) {
    return <PagesLoading />;
  }
  
  return (
    <Box sx={{ width: "100%", background: "rgba(15, 23, 42, 0.21)" }}>
      {loading && <PagesLoading />}
      <Container sx={{ borderRadius: 1, pt: 3 }}>
        {/*العنوان*/}
        <Stack
          justifySelf={"center"}
          alignItems={"center"}
          mb={{ lg: 5, xs: 0 }}
          sx={{ flexDirection: { lg: "row", xs: "column" } }}
        >
          <Typography
            variant="h3"
            textAlign={"center"}
            alignSelf={"center"}
            sx={{ fontSize: { lg: 40, xs: 30 } }}
          >
            Explore the Fleet
          </Typography>
          <DotLottieReact
            src="/animations/A car.lottie"
            autoplay={true}
            loop={false}
            dotLottieRefCallback={(dotL) => {
              lottieRef.current = dotL;
            }}
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </Stack>
        {/*== العنوان ==*/}

        <Stack
          px={{ lg: 5, xs: 0 }}
          sx={{ flexDirection: { lg: "row", xs: "column" }, gap: 3 }}
          justifyContent={"space-between"}
        >
          <TextField
            value={inputSearchValue}
            onChange={(event) => setInputSearchValue(event.target.value)}
            label="search"
            sx={{ width: { lg: "70%", xs: "100%" }, order: { lg: 0, xs: 1 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "text.primary" }}>
                  <SearchIcon color="text.primary" />
                </InputAdornment>
              ),
            }}
          />
          <Stack flexDirection={"row"} justifyContent={"center"} gap={2}>
            <Button
              sx={{ fontSize: 18 }}
              variant="outlined"
              startIcon={<TuneIcon />}
              onClick={() => setShowFilterElement((prev) => !prev)}
            >
              Filter
            </Button>
            {/*حاوية تغيير طريقة العرض*/}
            <Box sx={{}}>
              <MenuComponent
                width={125}
                defaultTitle={"Grid"}
                menuItems={menuData}
                textField="text"
                iconField="icon"
                //جلبنا قيمة الزر من اجل تنفيذ طريقة العرض بناءً عليها
                selectedValue={(value) => setValue(value)}
              />
            </Box>
          </Stack>
          {/*== حاوية تغيير طريقة العرض ==*/}
        </Stack>

        {/*حقول الفلترة*/}
        <Stack
          className={!showFilterElemet ? "showFiltersGallery" : ""}
          sx={{
            flexDirection: { lg: "row", xs: "column" },
            maxHeight: "500px",
            opacity: 1,
            width: { lg: "70%", xs: "100%" },
            mt: 3,
            ml: { lg: 5, xs: 0 },
            gap: 4,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Autocomplete
            value={brandValue.brand}
            onChange={(event, newValue) =>
              setBrandValue((prev) => ({ ...prev, brand: newValue }))
            }
            options={brandsOptions}
            sx={{ width: { lg: 250, xs: "100%" } }}
            renderInput={(info) => <TextField {...info} label="Brands" />}
          />

          <Autocomplete
            value={brandValue.model}
            onChange={(event, newValue) =>
              setBrandValue((prev) => ({ ...prev, model: newValue }))
            }
            options={categoriesOptions}
            sx={{ width: { lg: 250, xs: "100%" } }}
            renderInput={(info) => <TextField {...info} label="category" />}
          />

          <Autocomplete
            value={colorValue || null}
            onChange={(event, newValue) => setColorValue(newValue)}
            sx={{ width: { lg: 125, xs: "100%" } }}
            options={colors}
            getOptionLabel={(option) => option.name || ""}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            renderOption={(props, option) => (
              <Box
                key={option.name}
                component="li"
                {...props}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box
                  sx={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    bgcolor: option.hex,
                    mr: 1,
                    border: "1px solid #ddd",
                  }}
                />
                {option.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Paint Color" />
            )}
          />
        </Stack>
        {uiLoading ? (
          <SearchLoading show={true} />
        ) : !visible.length ? (
          <EmptySkeleton />
        ) : (
          <>
          {/*طرق عرض الصور */}
            {value === "Gallery" ? (
              <ShowMasonry datas={visible} />
            ) : value === "List" ? (
              <ShowList datas={visible} />
            ) : (
              <ShowGrid datas={visible} />
            )}
          </>
        )}
        {/*== طرق عرض الصور ==*/}
        <div ref={lastRef} style={{ height: "1px" }} />
      </Container>
    </Box>
  );
}
export default Gallery2D;
