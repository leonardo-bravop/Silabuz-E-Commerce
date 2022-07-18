import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Box } from "@mui/system";
import { useAuth } from "contexts/AuthContext";
import LoginForm from "components/Login/LoginForm";

const LoginModal = () => {
  const { currentUser, logout } = useAuth();

  const [open, setOpen] = React.useState(false);
  const [openLogout, setOpenLogout] = React.useState(false);

  const handleClickOpen = () => {
    if (!currentUser) setOpen(true);
    else setOpenLogout(true);
  };

  const handleClose = () => {
    return setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setOpenLogout(false);
    } catch (error) {
      console.error("Failed to logout");
    }
  };

  return (
    <>
      <IconButton
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
        onClick={handleClickOpen}
      >
        <PersonOutlineIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle textAlign="center" fontWeight={600} sx={{ pt: 4, pb: 3 }}>
          Welcome to bazar
        </DialogTitle>
        <Box p={4} sx={{ maxWidth: "520px", p: 4 }}>
          <LoginForm formType={"modal"} setOpen={setOpen} />
        </Box>
        {/* <DialogContent sx={{ maxWidth: "520px", p: 4 }}></DialogContent> */}
      </Dialog>
      <Dialog
        open={openLogout}
        onClose={() => {
          setOpenLogout(false);
        }}
      >
        <Box
          p={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography mb={2} textAlign="center">
            {currentUser ? `Hello! ${currentUser.email}` : `Bye!`}
          </Typography>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default LoginModal;
