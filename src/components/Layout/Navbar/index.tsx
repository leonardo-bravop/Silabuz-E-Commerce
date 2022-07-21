import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import MobileMenu from "./MobileMenu";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import ShoppingCart from "components/ShoppingCart";
import GlobalSearch from "components/Search";

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "3px 3px 3px 2px rgba(0, 0, 0, 0.05)",
        position: "fixed",
        width: "100%",
        zIndex: 1201,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          padding="15px 0"
          sx={{position: 'relative'}}
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
          <GlobalSearch placeholder="Search" openOnFocus={true} debug={true} />
          <Stack
            alignItems="center"
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LoginModal />
            <ShoppingCart />
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
