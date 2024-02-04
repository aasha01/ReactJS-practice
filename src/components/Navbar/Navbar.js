import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "./consts/NavbarItems";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const drawerWidth = 220;

  const navigate = useNavigate();

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#181730",
            color: "#e9e9f0",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((obj) => (
            <ListItem
              key={obj.id}
              disablePadding
              onClick={() => navigate(obj.route)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "#e9e9f0" }}>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText primary={obj.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
