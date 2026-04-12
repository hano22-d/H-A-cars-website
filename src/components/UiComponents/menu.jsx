import {
  Box,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

function MenuComponent({
  defaultTitle,
  menuItems,
  textField = "label",
  iconField = "icon",
  selectedValue,
  width,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [buttonValue, setButtonValue] = useState({
    text: defaultTitle,
    icon: null,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item, itemIcon) => {
    setAnchorEl(null);
    //تحديث قيمة الزر
    if (item) {
      setButtonValue({ text: item, icon: itemIcon });

      //نرسل القيمة المختارة لمكون الاب من اجل تنفيذ العمليات بناء عليه
      if (selectedValue) selectedValue(item);
    }
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{ py: 1.5, width: width, fontSize: 18 }}
        startIcon={buttonValue.icon}
      >
        {buttonValue.text}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        disableScrollLock
      >
        {menuItems.map((item, index) => (
          <MenuItem
            sx={{ width: width }}
            key={index}
            onClick={() => handleClose(item[textField], item[iconField])}
          >
            {item[iconField] && <ListItemIcon>{item[iconField]}</ListItemIcon>}

            {item[textField]}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default MenuComponent;
