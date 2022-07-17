import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", position: 'relative',  }}>
      <Navbar />
      <Container maxWidth="xl" sx={{mt: '100px', py: 2}}>{children}</Container>
    </Box>
  );
};

export default Layout;
