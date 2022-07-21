import { Box, Divider, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsGrid from "../../Grid";
import Categories from "./Categories";

const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("https://fakestoreapi.com/products");

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
                Categories
              </Typography>
              <Divider variant="fullWidth" sx={{ fontWeight: 500 }} />
            </Box>
            <Box
              my={1}
              onClick={() => {
                setUrl("https://fakestoreapi.com/products");
              }}
            >
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
                All
              </Typography>
            </Box>
            <Categories categories={categories} setUrl={setUrl}/>
          </Stack>
        </Box>
        <ProductsGrid url={url} />
      </Box>
    </>
  );
};

export default Home;
