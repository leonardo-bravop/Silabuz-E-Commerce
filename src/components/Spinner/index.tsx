import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
