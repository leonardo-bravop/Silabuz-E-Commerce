import { Grid } from "@mui/material";
import useSWR from "swr";
import ProductCard from "../Card";
import Spinner from "../Spinner";
import { productsFetcher } from "../../utils/fetchers/productsFetcher";

const ProductsGrid = () => {
 
  const {
    data: products,
    error,
    isValidating,
  } = useSWR("https://fakestoreapi.com/products", productsFetcher, {
    refreshInterval: 0,
  });

  if (isValidating) return <Spinner />;

  if (!products || error) return <div>Error</div>;

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      rowSpacing={{ xs: 1, sm: 2, md: 2 }}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
    >
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
