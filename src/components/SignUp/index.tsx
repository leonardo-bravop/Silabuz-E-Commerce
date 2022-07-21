import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import UserFormLayout from "components/Layout/UserFormLayout";
import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(user.password.length<6) {
      return setError("Password must be at least 6 characters")
    }
    if (user.password !== user.confirmPassword)
      return setError("Passwords do not match");

    try {
      setError("");
      setLoading(true);
      await signup(user.email, user.password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <UserFormLayout>
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ pt: 2, pb: 2 }}
        textAlign="center"
      >
        Create your acccount
      </Typography>
      <Typography sx={{ pb: 3 }} variant="subtitle2" textAlign="center">
        Please fill all fields to continue
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Full Name"
          type="text"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
        />
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
          placeholder="Password must be at least 6 characters"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button
          variant="contained"
          sx={{ width: "100%", py: 2, my: 2 }}
          type="submit"
          disabled={loading}
        >
          Create Account
        </Button>
      </form>

      <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
        <Typography px={2}>Already have an account?</Typography>
        <Link to="/login">
          <Typography sx={{ color: "secondary.dark", fontWeight: 600 }}>
            Login
          </Typography>
        </Link>
      </Box>
    </UserFormLayout>
  );
};

export default SignUp;
