import React from "react";
import { Stack, Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width="auto">
      {/* Chat Header */}
      <Header />
      {/* Message */}
      {/* flexGrow:1 => component will grow to occupy the remaining avaliable space*/}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/* Chat Footer*/}
      <Footer />
    </Stack>
  );
};

export default Conversation;
