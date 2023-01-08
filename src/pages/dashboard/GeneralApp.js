import React, { Suspense, lazy } from "react";
import { Stack, Box } from "@mui/material";
import { theme } from "@mui/material/styles";
import Chats from "./Chats";
// Dynamic import
// The component Cat is going to take some amount of time to load this img.

const GeneralApp = () => {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />
    </Stack>
  );
};

export default GeneralApp;
