import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Product } from "../../types/product";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";
import { getQuantityFromState } from "utils/product/getQuantityFromState";

const ProductCard = ({ id, image, title, rating, price }: Product) => {
  const [elevation, setElevation] = useState<number>(1);
  const { state, addToCart, decreaseQuantity, remove } =
    useShoppingCartContext();

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
      {/* <CardActionArea
      sx={{
        "&:hover": {
          pointerEvents: "none",
        },
      }}
      > */}
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
          padding: "10px 20px 0",
          display: "flex",
          flexDirection: "",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Typography
            sx={{
              position: "relative",
              minHeight: "55px",
              fontWeight: "500",
            }}
            align="left"
            variant={"subtitle1"}
          >
            {title.length > 40 ? title.substring(0, 40).trim() + "..." : title}
          </Typography>
          <Box
            sx={{ display: "flex", marginTop: "10px", alignItems: "center" }}
          >
            <Typography sx={{ alignSelf: "center", display: "inline-block" }}>
              {rating?.rate}
            </Typography>
            <StarIcon sx={{ color: "#ffa000", marginLeft: "2px" }} />
          </Box>
          <Typography
            align="left"
            sx={{
              color: "primary.dark",
              fontWeight: "500",
              marginTop: "10px",
              paddingBottom: "5px",
            }}
          >
            ${price.toFixed(2)}
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0",
          }}
        >
          {state.CartItems.findIndex((item) => item.productId === id) !== -1 ? (
            <>
              <IconButton
                sx={{ color: "primary.dark" }}
                onClick={() => {
                  if (getQuantityFromState(state, id) === 1)
                    remove({ productId: id, quantity: 1, price });
                  else decreaseQuantity({ productId: id, quantity: 1, price });
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{getQuantityFromState(state, id)}</Typography>
            </>
          ) : null}
          <IconButton
            sx={{ color: "primary.dark" }}
            onClick={() => {
              addToCart({ productId: id, quantity: 1, price });
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
};

export default ProductCard;
