import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";

// get isAuthenticated from redux store
const isAuthenticated = true;

const DashboardLayout = () => {
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <Stack direction="row">
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
