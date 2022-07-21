import { Box, Divider, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsGrid from "../../Grid";

const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(({ data }) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Box
        // component="img"
        // alt="The house from the offer."
        sx={{
          my: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F6F9FC",
          position: "absolute",
          width: "100vw",
          left: 0,
          top: 0,
          height: { xs: "500px", md: "600px" },
          zIndex: -1,
          objectFit: "cover",
          px: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          More than just products
        </Typography>
      </Box>
      <Box pt={{ xs: "500px", md: "600px" }} sx={{ display: { md: "flex" } }}>
        <Box minWidth={"250px"} sx={{ display: { xs: "none", md: "block" } }}>
          <Stack sx={{ position: "sticky" }}>
            <Box mt={1} mb={3}>
              <Typography sx={{ fontWeight: 600, color: "secondary.main" }}>
                Top Categories
              </Typography>
              <Divider variant="fullWidth" sx={{ fontWeight: 500 }} />
            </Box>
            {categories.map((category, index) => (
              <Box my={1} key={index}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "secondary.light",
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {category[0].toUpperCase() + category.slice(1)}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
        <ProductsGrid />
      </Box>
    </>
  );
};

export default Home;
