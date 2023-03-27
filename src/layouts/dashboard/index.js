import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connectSocket, socket } from "../../socket";
import { SelectConversation, showSnackbar } from "../../redux/slices/app";

import {
  UpdateDirectConversation,
  AddDirectConversation,
} from "../../redux/slices/conversation";

// get isAuthenticated from redux store

const DashboardLayout = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );
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

      socket.on("start_chat", (data) => {
        console.log(data);
        const existing_conversation = conversations.find(
          (el) => el.id === data._id
        );
        if (existing_conversation) {
          // have the conversation update it
          dispatch(UpdateDirectConversation({ conversation: data }));
        } else {
          // didnt have the conversation -> add direct conversation
          dispatch(AddDirectConversation({ conversation: data }));
        }
        dispatch(SelectConversation({ room_id: data._id }));
      });
    }
    return () => {
      socket.off("new_friend_reqeust");
      socket.off("request_accepted");
      socket.off("reqeust_sent");
      socket.off("start_chat");
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
