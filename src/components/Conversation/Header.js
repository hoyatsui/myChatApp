import React from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { CaretDown, VideoCamera, Phone, MagnifyingGlass } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";

import StyledBadge from "../StyledBadge";

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        direction="row"
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack direction="row" spacing={2}>
          <Box p={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack p={2} spacing={0.2}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Typography variant="caption">online</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;