import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connectSocket, socket } from "../../socket";
import { showSnackbar } from "../../redux/slices/app";
// get isAuthenticated from redux store

const DashboardLayout = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    if (isLoggedIn) {
      // whenver render dashboard, check in url if there is any hash at the end, if not, add hash and reload the page
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };
      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }
      // "new_friend_request"
      socket.on("new_friend_reqeust", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
      socket.on("request_accepted", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
      socket.on("reqeust_sent", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
    }
    return () => {
      socket.off("new_friend_reqeust");
      socket.off("request_accepted");
      socket.off("reqeust_sent");
    };
  }, [isLoggedIn, socket]);

  if (!isLoggedIn) {
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
