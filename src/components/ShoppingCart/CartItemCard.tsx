import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import useSWR from "swr";
import { singleProductFetcher } from "utils/fetchers/productsFetcher";
import Spinner from "components/Spinner";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";
import { getQuantityFromState } from "utils/product/getQuantityFromState";

interface props {
  productId: number;
}

const CartItemCard = ({ productId }: props) => {
  const { state, addToCart, decreaseQuantity, remove } =
    useShoppingCartContext();

  const {
    data: product,
    error,
    isValidating,
  } = useSWR(
    `https://fakestoreapi.com/products/${productId}`,
    singleProductFetcher,
    {
      refreshInterval: 0,
    }
  );

  if (isValidating)
    return (
      <Box height={"80px"} my={2}>
        <Spinner />
      </Box>
    );

  if (!product || error) return <div>Error</div>;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 2,
        }}
        elevation={0}
      >
        <Stack alignItems="center" px={2}>
          <IconButton
            sx={{ color: "primary.dark", border: "1px solid", padding: "4px" }}
            onClick={() => {
              addToCart({ productId, quantity: 1, price: product.price });
            }}
          >
            <AddIcon />
          </IconButton>
          <Typography my={0.5}>
            {getQuantityFromState(state, productId)}
          </Typography>
          <IconButton
            sx={{ border: "1px solid", padding: "4px" }}
            disabled={getQuantityFromState(state, productId) === 1}
            onClick={() => {
              decreaseQuantity({
                productId,
                quantity: 1,
                price: product.price,
              });
            }}
          >
            <RemoveIcon />
          </IconButton>
        </Stack>
        {/* <Box sx={{ width: "75px", mx: 2 }} component="image" src={product?.image}/> */}
        <img
          src={product?.image}
          style={{
            width: "75px",
            height: "75px",
            objectFit: "contain",
          }}
          alt={product.title}
        />
        <CardContent sx={{ width: "180px" }}>
          <Typography fontWeight={600} variant="subtitle2">
            {product.title.length > 25
              ? product.title.substring(0, 25).trim() + "..."
              : product.title}
          </Typography>
          <Typography variant="caption">
            ${product.price.toFixed(2)} x{" "}
            {getQuantityFromState(state, productId)}
          </Typography>
          <Typography variant="subtitle2" color="primary.dark">
            $
            {(product.price * getQuantityFromState(state, productId)).toFixed(
              2
            )}
          </Typography>
        </CardContent>
        <IconButton
          sx={{ ml: 2 }}
          onClick={() => {
            remove({ productId, quantity: 1, price: product.price });
          }}
        >
          <CloseIcon />
        </IconButton>
      </Card>
      <Divider />
    </>
  );
};

export default CartItemCard;
