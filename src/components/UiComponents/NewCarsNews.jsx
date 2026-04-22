import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";

export default function NewCars() {
  /* مصفوفة بيانات الأخبار */
  const newsData = [
    {
      /* Mercedes-Benz unveils the updated S-Class */
      id: 1,
      title: "Mercedes-Benz unveils the updated S-Class W223",
      description:
        "Modern luxury, sleek design, smart technology, innovative LED lighting, advanced safty.",
      image:
        "https://motofilm.pl/wp-content/uploads/2020/09/2021-mercedes-benz-s-class-front.jpg",
    },
    {
      /* BMW announces the new series 3 */
      id: 2,
      title: "BMW announces the new series 3 2026",
      description:
        "BMW has announced the new series 3, featuring a sporty design, advanced technology, and excellent performance. The new series 3 offers a dynamic driving experience with a range of efficient engines and cutting-edge safety features.",
      image:
        "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/05/p90549627.jpeg",
    },
    {
      /* Audi Q3  */
      id: 3,
      title: "Audi Q3 2026",
      description:
        "Audi has unveiled the new Q3, featuring a modern design, advanced technology, and excellent performance. The new Q3 offers a comfortable driving experience with a range of efficient engines and cutting-edge safety features.",
      image:
        "https://images.hindustantimes.com/auto/img/2025/06/18/1600x900/2026_Audi_Q3_1750239463596_1750239463964.jpg",
    },
    /* Porsche 911 */
    {
      id: 4,
      title: "Porshe 911 2026",
      description:
        "Porshe has unveiled the new 911, featuring a sporty design, advanced technology, and excellent performance. The new 911 offers a dynamic driving experience with a range of efficient engines and cutting-edge safety features.",
      image:
        "https://cdn.motor1.com/images/mgl/W879qg/s1/porsche-911-turbo-s-2025.jpg",
    },
  ];

  return (
    <Container sx={{ my: 20 }}>
      <Card
        sx={{
          height: { xs: 240, sm: 400, md: 500 },
          position: "relative",
          mb: 4,
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={newsData[0].image}
          alt="News Image"
        />
        {/* طبقة تعتيم متدرجة من الاسفل الى الاعلى */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top, rgb(0, 0, 0), transparent)",
          }}
        />
        <CardContent sx={{ position: "absolute", bottom: 0 }}>
          <Typography
            gutterBottom
            component="div"
            sx={{
              fontSize: { xs: "20px", sm: "40px", lg: "50px" },
              fontWeight: "bold",
            }}
          >
            {newsData[0].title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: { xs: "10px", sm: "20px", lg: "25px" } }}
          >
            {newsData[0].description}
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {newsData.slice(1).map((item) => (
          <Card
            key={item.id}
            sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt="News Image"
              sx={{
                height: { xs: "175px", lg: "200px" },
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                sx={{
                  fontSize: { xs: "15px", sm: "30px", lg: "20px" },
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: "10px", sm: "20px", lg: "15px" } }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
