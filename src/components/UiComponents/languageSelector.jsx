import { useTranslation } from "react-i18next";

//hooks
import { useEffect, useState } from "react";

//mui material
import { Box, Button, Menu, MenuItem } from "@mui/material";

//icons
import { MdOutlineTranslate } from "react-icons/md";

function LanguageSelector() {

  const { i18n } = useTranslation();
  const [open, setOpen] = useState(null);
  const menuMobile = window.innerWidth < 1200

  function changeLanguage(value) {
    setOpen(null);
    setTimeout(() => i18n.changeLanguage(value), 100);
    localStorage.setItem("saveLan", value);
  }
  useEffect(() => {
    let savedLang = localStorage.getItem("saveLan");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, []);

  return (
    <div style={{ position: "relative", width: 120 }}>
      <Box
        sx={{
          display: 'inline-block',
          position: "relative",
          "&:hover .translate-icon": {
            transform: "translateY(-50%) rotate(-15deg)",
            transition: "transform 0.3s ease",
          },
        }}
      >
        <Button
          variant="outlined"
          sx={{
            pl: 5,
            border: "2px solid rgba(236, 233, 191, 0.54)",
            borderRadius: "8px",
            transition: "0.3s",
            "&:hover": {
              border: 2,
              borderColor: "#ff4c29",
              boxShadow: "0 0 10px rgba(255,76,41,0.6)",
            },
          }}
          onClick={(e) => setOpen(e.currentTarget)}
        >
          {i18n.language}
        </Button>

        <Menu
          anchorEl={open}
          open={Boolean(open)}
          onClose={() => setOpen(null)}
          disableScrollLock
          PaperProps={{
            sx: {
              border: "2px solid #ff4c29",
            borderRadius: {lg:'0 10px 10px 10px',xs: '10px 10px 10px 0'},
            m: 1,
            },
          }}
          anchorOrigin={{
            vertical: menuMobile? "top": "bottom",
            horizontal: "right"
          }}
          
          transformOrigin={{
            vertical: menuMobile? 'bottom': 'top',
            horizontal: "left"
          }}
        >
          <MenuItem sx={{ pointerEvents: "none", fontWeight: 700 }}>
            select language
          </MenuItem>
          <MenuItem
            sx={{
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: "100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(255,76,41,0.8), rgba(255,76,41,0))",
                transition: "all 0.3s ease",
              },
              "&:hover::before": {
                right: 0,
              },
            }}
            onClick={() => changeLanguage("ar")}
          >
            Arabic
          </MenuItem>
          <MenuItem
            sx={{
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: "100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(255,76,41,0.8), rgba(255,76,41,0))",
                transition: "all 0.3s ease",
              },
              "&:hover::before": {
                right: 0,
              },
            }}
            onClick={() => changeLanguage("en")}
          >
            English
          </MenuItem>
        </Menu>

        <Box
          component={MdOutlineTranslate}
          className="translate-icon"
          sx={{
            fontSize: 20,
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            color: "wheat",
            transition: "0.3s",
          }}
        />
      </Box>
    </div>
  );
}
export default LanguageSelector;
