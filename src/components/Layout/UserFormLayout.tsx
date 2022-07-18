import { Paper, Box } from '@mui/material';

import React from 'react'

type props = {
    children: React.ReactNode;
  };
  
const UserFormLayout = ({children}: props) => {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F6F9FC",
      py: 10,
      height: '100vh'
    }}
  >
    <Paper
      sx={{
        maxWidth: "520px",
        p: 4,
      }}
    >
        {children}
    </Paper></Box>
  )
}

export default UserFormLayout