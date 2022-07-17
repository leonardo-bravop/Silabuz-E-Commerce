import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const LoginModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <DialogContent sx={{ width: "520px", p: 4 }}>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
          <Button variant="contained" sx={{ width: "100%", py: 2, my: 2 }}>
            Login
          </Button>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginModal;
