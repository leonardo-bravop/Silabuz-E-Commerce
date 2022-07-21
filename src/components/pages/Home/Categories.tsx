import { Box, Typography } from "@mui/material";
import React from "react";

type props = {
  categories: string[];
  setUrl: React.Dispatch<React.SetStateAction<string>>;
};

const Categories = ({ categories, setUrl }: props) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <Box
            my={1}
            key={index}
            onClick={() => {
              setUrl(`https://fakestoreapi.com/products/category/${category}`);
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
              {category[0].toUpperCase() + category.slice(1)}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

export default React.memo(Categories);
