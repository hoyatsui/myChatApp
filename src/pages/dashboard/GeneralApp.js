import React from "react";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chats from "./Chats";

import Conversation from "../../components/Conversation";

// Dynamic import
// The compimport Conversation from './../../components/Conversation/index';
import Contact from "./../../components/Contact";
import { useSelector } from "../../redux/store";
import SharedMessages from "../../components/SharedMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((state) => state.app);

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? `calc(100vw - 740px )` : `calc(100vw - 420px )`,
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
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;

            case "STARRED":
              break;

            case "SHARED":
              return <SharedMessages />;

            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
