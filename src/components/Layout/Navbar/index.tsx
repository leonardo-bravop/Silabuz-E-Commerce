import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MobileMenu from "./MobileMenu";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  //Cart Drawer utils
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "3px 3px 3px 2px rgba(0, 0, 0, 0.05)",
        position: "fixed",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          padding="15px 0"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                color: "secondary.dark",
              }}
            >
              Bazar
            </Typography>
          </Link>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "25px",
              mx: 5,
              paddingLeft: "30px",
              "&:hover": {
                borderColor: "primary.dark",
              },
              flexGrow: { xs: "0.9", md: "0.4" },
              position: "relative",
            }}
          >
            <SearchIcon
              sx={{
                position: "absolute",
                left: "10px",
                color: "rgba(0,0,0,0.4)",
              }}
            />
            <InputBase
              sx={{
                paddingLeft: "20px",
                // ":first-child": {
                //   padding: "0 !important",
                // },
                flexGrow: 1,
              }}
            />
            <Button
              sx={{
                borderRadius: "0 25px 25px 0",
                backgroundColor: "primary.dark",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#d42919",
                },
                px: 5,
                py: 1.7,
                margin: "-1px",
              }}
            >
              {/* Search */}
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Search
              </Typography>
            </Button>
          </FormControl>
          <Stack
            alignItems="center"
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LoginModal />
            <IconButton
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
              onClick={toggleDrawer(true)}
            >
              <ShoppingBagOutlinedIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box width={"400px"}></Box>
            </Drawer>
          </Stack>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobileMenu />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
