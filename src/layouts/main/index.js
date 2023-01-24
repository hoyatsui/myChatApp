import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Container, Stack } from "@mui/material";

import Logo from "../../assets/Images/logo.ico";
// get isAuthenticated from redux store
const isAuthenticated = true;

const MainLayout = () => {
  if (isAuthenticated) {
    return <Navigate to="/app" />;
  }
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack sx={{ width: "100%" }} direction="column" alignItems="center">
            <img style={{ height: 120, width: 120 }} src={Logo} alt="Logo" />
          </Stack>
        </Stack>

        {/* <div>Main Layout</div> */}

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
