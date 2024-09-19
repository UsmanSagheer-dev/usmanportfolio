import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Styles } from "./navbarstyle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(""); 

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = (menuItem) => {
    setActiveItem(menuItem); // Set the clicked item as active
  };

  const menuItems = ["Home", "Skills", "Projects", "Connect"];

  return (
    <>
      {/* AppBar (acts as header) */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px hsla(207, 24%, 35%, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 60px",
            margin: "0 50px",
            "@media (max-width: 720px)": {
              margin: "0px",
              padding: "20px 15px",
            },
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: "24px", fontWeight: "bold", color: "black" }}
          >
            USMAN-DEV
            <span sx={Styles.span}>.</span>
          </Typography>

          {/* Menu icon for mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", sm: "none", md: "none", lg: "none" },
              color: "black",
            }} 
          >
            <MenuIcon />
          </IconButton>

          <List
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center", 
            }}
          >
            {menuItems.map((text, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "inline-block" }}
              >
                <Typography
                  variant="button"
                  color="inherit"
                  component="a"
                  href={`#${text.toLowerCase()}`}
                  onClick={() => handleMenuClick(text)} // Handle click event
                  sx={{
                    padding: "7px 15px",
                    fontSize: "17px",
                    fontFamily:'"Segoe UI"',
                    fontWeight: "700",
                    color: activeItem === text ? "#6e06f2" : "black", 
                    textDecoration: "none",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  {text}
                </Typography>
              </ListItem>
            ))}

            {/* Search Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="search"
              sx={Styles.SearchIcon1}
            >
              <SearchIcon />
            </IconButton>
          </List>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="search"
            sx={Styles.SearchIcon}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List
          sx={{
            width: 300,
            backgroundColor: "#151418",
            padding: "20px",
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        >
          {menuItems.map((text, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <ListItemText
                primary={text}
                sx={{
                  color: activeItem === text ? "blue" : "#fff", // Apply color change for mobile menu
                  marginLeft: "12px",
                }}
                onClick={() => handleMenuClick(text)} // Handle click event for drawer
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
