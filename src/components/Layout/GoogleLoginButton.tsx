import { Button, SvgIcon } from "@mui/material";
import { useAuth } from "contexts/AuthContext";
import React from "react";
import { ReactComponent as GoogleIcon } from "assets/googleIcon.svg";
import { useNavigate } from "react-router-dom";

type props = {
  setError: React.Dispatch<React.SetStateAction<string>>;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const GoogleLoginButton = ({ setError, setOpen, loading }: props) => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      if (setOpen) setOpen(false);
      navigate("/");
    } catch (error) {
      setError("Failed to login with google");
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: "100%",
        py: 2,
        my: 1,
        backgroundColor: "white",
        color: "#000",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.04)",
        },
        display: "flex",
        alignItems: "center",
      }}
      onClick={handleGoogleLogin}
      disabled={loading}
    >
      <SvgIcon sx={{ mr: 2 }}>
        <GoogleIcon />
      </SvgIcon>
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;
