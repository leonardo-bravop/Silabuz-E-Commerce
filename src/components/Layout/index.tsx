import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import { useMatch } from "react-router-dom";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  const matchSignup = useMatch("signup");
  const matchLogin = useMatch("login");

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      {!matchLogin && !matchSignup && <Navbar />}

      <Container
        maxWidth={matchLogin || matchSignup ? false : "xl"}
        sx={{
          mt: matchLogin || matchSignup ? "0px" : "100px",
          py: 2,
          p: matchLogin || matchSignup ? "0px !important" : "auto",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
