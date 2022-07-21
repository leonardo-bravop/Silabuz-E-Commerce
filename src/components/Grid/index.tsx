import { Box, Grid } from "@mui/material";
import useSWR from "swr";
import ProductCard from "../Card";
import Spinner from "../Spinner";
import { productsFetcher } from "../../utils/fetchers/productsFetcher";

interface props {
  url: string;
}

const ProductsGrid = ({ url }: props) => {
  const {
    data: products,
    error,
    isValidating,
  } = useSWR(url, productsFetcher, {
    refreshInterval: 0,
  });

  if (isValidating)
    return (
      <Box height={'800px'} width='100%' display='flex' justifyContent='center'>
        <Spinner />
      </Box>
    );

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
