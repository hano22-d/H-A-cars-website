import { Typography,Card } from '@mui/material';

function News () {
    return (
        <Card
        sx={{
            maxWidth: { xs: 0.8, lg: 0.55 },
            height: "auto",
            mx: "auto",
            my: 20,
            p: 10,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
             textAlign: 'center'
          }}
      >
        <Typography variant="h1" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" } }}>Welcome in News Page</Typography>
        <Typography>Devolopers: Hani and Ali</Typography>
        <Typography>هل تريد أن تستكشف عالم السيارات؟ أنت في المكان الصحيح</Typography>
      </Card>
    )
}
export default News