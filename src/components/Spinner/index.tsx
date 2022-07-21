import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        textAlign: "center",
        justifyContent: 'center',
        height: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
