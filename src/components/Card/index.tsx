import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Product } from "../../types/product";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import CardActionArea from "./CustomCardAction";

const ProductCard = ({ image, title, rating, price }: Product) => {
  const [elevation, setElevation] = useState<number>(1);
  return (
    <Card
      sx={{
        width: "300px",
        my: "10px",
      }}
      elevation={elevation}
      onMouseEnter={() => setElevation(5)}
      onMouseLeave={() => setElevation(1)}
    >
      <CardActionArea
      // sx={{
      //   "&:hover": {
      //     pointerEvents: "none",
      //   },
      // }}
      >
        <CardMedia
          component="img"
          height="220px"
          image={image}
          alt={title}
          sx={{
            objectFit: "contain",
            padding: "40px 20px",
            paddingBottom: "10px",
          }}
        ></CardMedia>
        <CardContent
          sx={{
            padding: "10px 20px 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              minHeight: "55px",
              fontWeight: "500",
            }}
            align="left"
            variant={"subtitle1"}
          >
            {title.length > 45 ? title.substring(0, 52).trim() + "..." : title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box>
        <Box sx={{ display: "flex", padding: "0 20px", alignItems: "center" }}>
          <Typography sx={{ alignSelf: "center", display: "inline-block" }}>
            {rating?.rate}
          </Typography>
          <StarIcon sx={{ color: "#ffa000", marginLeft: "2px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px 10px",
          }}
        >
          <Typography
            align="left"
            sx={{ color: "primary.dark", fontWeight: "500" }}
          >
            ${price}
          </Typography>
          <IconButton sx={{ color: "primary.dark" }}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
