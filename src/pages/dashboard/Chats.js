import React from "react";
import {
  Divider,
  Button,
  Box,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import {
  ArchiveBox,
  MagnifyingGlass,
  CircleDashed,
  Users,
} from "phosphor-react";
import { useTheme } from "@mui/material/styles";

import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";

import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/dashboard/Friends";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
const Chats = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const theme = useTheme();
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <Box
        sx={{
          overflowY: "scroll",

          height: "100vh",
          width: 320,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          // direction="column"
          p={3}
          spacing={2}
          sx={{
            height: "100vh",
          }}
          // justifyContent="center"
        >
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography variant="h5">Chats</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
                sx={{ padding: 0 }}
              >
                <Users />
              </IconButton>
              <IconButton sx={{ padding: 0 }}>
                <CircleDashed size={28.5} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
              <IconButton>
                <ArchiveBox
                  size={24}
                  style={{ color: theme.palette.primary.main }}
                />
              </IconButton>
              <Button>Archive</Button>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            spacing={2}
            direction="column"
            sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
