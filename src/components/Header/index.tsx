import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Logo from "@src/components/Logo";
import AppBar from "@src/components/Shared/appbar";
import Button from "@src/components/Shared/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navItems = [
    { name: "Front page", link: "/" },
    { name: "Videos", link: "/" },
    { name: "audios", link: "/" },
    { name: "written", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <header>
      <AppBar
        drawer={drawer}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        color="transparent"
        position="fixed"
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "row-reverse", md: "row" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: { xs: 0, md: 2 }, display: { sm: "none" } }}
            >
              <AiOutlineMenu />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box mr={5}>
                <Logo />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item, index) => (
                  <Button
                    key={`${item.name}-${index}`}
                    color="secondary"
                    sx={{ ml: 2, textTransform: "capitalize" }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button>Login </Button>
              <Button variant="outlined" sx={{ ml: 2 }}>
                Create Account
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </header>
  );
};
export default Header;
