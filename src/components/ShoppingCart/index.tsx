import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";
import CartItemCard from "./CartItemCard";
import { getTotalFromCart } from "utils/product/getTotalFromCart";
import { ReactComponent as ShoppingBag } from "assets/shoppingBag.svg";

const ShoppingCart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { state } = useShoppingCartContext();

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
    <>
      <IconButton
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
        onClick={toggleDrawer(true)}
      >
        <Badge badgeContent={state.CartItems.length} color="primary">
          <ShoppingBagOutlinedIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          width={"400px"}
          pt={"80px"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            position: "relative",
          }}
        >
          {state.CartItems.length ? (
            <>
              <Box flexGrow={1} pb={"90px"}>
                {state.CartItems?.map((itemCart) => (
                  <CartItemCard productId={itemCart.productId} />
                ))}
              </Box>
              <Box
                p={2}
                sx={{
                  position: "fixed",
                  backgroundColor: "white",
                  width: "400px",
                  bottom: 0,
                }}
              >
                <Button
                  variant="contained"
                  sx={{ width: "100%", fontWeight: "600", py: 2 }}
                >
                  Checkout now (${getTotalFromCart(state)})
                </Button>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box mb={2}>
                <ShoppingBag />
              </Box>
              <Typography sx={{ display: "block" }}>
                Your Shopping bag is empty.
              </Typography>
              <Typography sx={{ display: "block" }}>Start shopping</Typography>{" "}
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
