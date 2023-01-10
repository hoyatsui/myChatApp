import React, { Suspense, lazy } from "react";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chats from "./Chats";

import Conversation from "../../components/Conversation";

// Dynamic import
// The compimport Conversation from './../../components/Conversation/index';
import Contact from "./../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 740px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
      {/* Contact */}
      <Contact />
    </Stack>
  );
};

export default GeneralApp;
