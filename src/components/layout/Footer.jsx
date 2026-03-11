import { Container, Grid, Stack, TextField, Typography,Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import StyledIcon from "../UiComponents/icons";
import Divider from "@mui/material/Divider";
import { Link } from "@mui/material";
import SimpleAvatar from "./profile";

import SecurityIcon from "@mui/icons-material/Security";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import { UsethemeToggle } from "../../context/themeContext";

  const items = [
    {id: 1, icon: <SecurityIcon />, text: "Secure Payment" },
    {id: 2, icon: <VerifiedIcon />, text: "Certified Cars" },
    { id: 3, icon: <LocalShippingIcon />, text: "Fast Delivery" },
    { id: 4, icon: <StarIcon />, text: "5-Star Rated" },
  ];


function Footer() {

  const {toggleMode} = UsethemeToggle()

  return (
    <Container maxWidth="100%" sx={{ bgcolor: "background.paper" ,py: 5}}>
      <Grid container spacing={5}>
        <Grid item lg={6} xs={12} alignSelf={"center"}>
          <TextField fullWidth label="Search" dir="rtl" />
        </Grid>
        <Grid item lg={6} xs={12} p={3}>
          <Typography variant="h2" sx={{ direction: "rtl" }}>
            مرحباً بكم في H & A Cars
          </Typography>
          <Typography sx={{ direction: "rtl" }}>
            نحن هاني جمعة وعلي سعدو، وشغفنا في عالم السيارات كان الدافع الأكبر
            لإنشاء هذا الموقع. هنا نأخذكم في جولة لأحدث الطرازات، أخبار الصناعة،
            والتقنيات المستقبلية في عالم السيارات. هدفنا أن نصبح مرجعكم الأول
            لكل ما يتعلق بالسيارات من مواصفات وأسعار إلى أحدث الإصدارات والنصائح
            الذكية. في H&A Cars، نؤمن أن السيارة ليست مجرد وسيلة نقل، بل تجربة
            وقصة وعالم من الإبداع.
          </Typography>
        </Grid>

        <Grid item lg={12} xs={12}>
          <Divider variant="fullWidth" />
          <Typography sx={{ mt: 7, mb: 3, textAlign: "center" }} variant="h3">
            :تواصل معنا عبر
          </Typography>
          <Stack direction="row" spacing={{lg: 15,xs: 5}} justifyContent={"center"}>
            <StyledIcon
              component={FacebookIcon}
              size="large"
              brandColor="facebook"
            />
            <StyledIcon
              component={InstagramIcon}
              size="large"
              brandColor="instagram"
            />
            <StyledIcon
              component={CallIcon}
              size="large"
              brandColor="whatsApp"
            />
            <StyledIcon component={ContactSupportIcon} size="large" />
          </Stack>
        </Grid>
        <Grid item lg={12} my={3}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Stack gap={1} textAlign={"center"}>
              <Typography variant="h3">الخدمات</Typography>
              <Link to={"/"}>خدمة البحث عن السيارات</Link>
              <Link to={"/"}>تقييم السيارات المستعملة</Link>
            </Stack>

            <Stack gap={1} textAlign={"center"}>
              <Typography variant="h3">المدونة</Typography>
              <Link to={"/news"}>أخبار السيارات</Link>
              <Link>دليل الشراء</Link>
              <Link>مقارنة السيارات</Link>
            </Stack>

            <Stack gap={1} textAlign={"center"}>
              <Typography variant="h3">سياسات الموقع</Typography>
              <Link>الشروط والاحكام</Link>
              <Link>ملفات تعريف الارتباط</Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          
          sx={{
            minHeight: "120vh",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF4C29'/%3E%3Cstop offset='1' stop-color='%23FF7A5C'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FFB199' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFB199' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FFB199' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFB199' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.99'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: 'relative',
            left: 17
          }}
        >
          <SimpleAvatar
            image={"/IMG-20260301-WA0015.jpg"}
            color={toggleMode? '#555':'#B2F0C8'}
            name={'Ali Saado'}
            text={'مهندس معلوماتية ومطوّر واجهات أمامية (Front-End Developer)، أبلغ من العمر 21 عامًا. انطلقت في مجال تطوير الويب عام 2025، وأعمل على بناء تطبيقات ويب عصرية تتميز بالنظافة البرمجية والمرونة والجودة العالية.'}
          />
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            minHeight: "120vh",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF4C29'/%3E%3Cstop offset='1' stop-color='%23FF7A5C'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FFB199' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFB199' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FFB199' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFB199' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.99'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: 'relative',
            left: 17
          }}
        >
          <SimpleAvatar
            image={"/Picsart_25-03-11_18-50-57-574.jpg"}
            color={toggleMode? '#555': '#B8DEFF'}
            name={'Hani Joma'}
            text={'مهندس ميكاترونيكس ومطوّر واجهات أمامية (Front-End Developer)، أبلغ من العمر 22 عامًا. بدأت مسيرتي في تطوير الويب عام 2025، وأسعى لدمج الدقة الهندسية مع تصميم واجهات حديثة تركز على الأداء وتجربة المستخدم.'}
          />
        </Grid>
       <Grid item lg={4} xs={12}>
        <Typography my={2} textAlign={'center'} variant="h3">:موقعنا</Typography>
        <iframe
        style={{border: '3px solid #ff4c29',position: 'relative',left: '100px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.41941508468105!3d37.77492977975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818a1234567%3A0xabcdef1234567890!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1234567890"
          width="50%" height="200" loading="lazy" title="Our title" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </Grid>
        <Grid item lg={8} xs={12} alignContent={'center'}>
          <Typography variant="h3" justifySelf={'center'} my={2}>Why H-A Cars?</Typography>
          <Stack textAlign={'center'} direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
        {items.map((item) => (
          <Stack key={item.id} gap={1} alignItems={'center'} direction={{lg: 'row',xs: 'column'}}>
            <StyledIcon
            size='large'
              sx={{
                color: "primary.main",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  color: "secondary.main",
                },
              }}
            >
              {item.icon}
            </StyledIcon>
            <Typography variant="body2">
                {item.text}
              </Typography>
              </Stack>
        ))}   
        </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Footer;
