import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "contexts/AuthContext";
import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";

type props = {
  formType: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ formType, setOpen }: props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(user.email, user.password);
      if (formType === "modal" && setOpen) {
        setOpen(false);
      } else if (formType === "page") {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setError("Email or password invalid");
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {error && <Alert severity="error">{error}</Alert>}

        <Button
          variant="contained"
          sx={{ width: "100%", py: 2, my: 2 }}
          type="submit"
          disabled={loading}
        >
          Login
        </Button>
      </form>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography px={2}>Don't have an account?</Typography>
        <Link
          to="/signup"
          onClick={() => {
            if (formType === "modal" && setOpen) setOpen(false);
          }}
          style={{ color: "secondary.dark" }}
        >
          <Typography sx={{ color: "secondary.dark", fontWeight: 600 }}>
            Sign up
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        p={1}
      >
        <Typography color="rgb(140,140,140)" variant="subtitle2">
          Or
        </Typography>
        <GoogleLoginButton
          setError={setError}
          setOpen={setOpen}
          loading={loading}
        />
      </Box>
    </>
  );
};

export default LoginForm;
