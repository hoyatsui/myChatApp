import React from "react";
import { Divider, Stack, IconButton } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          //   &: father of the current selector
          //  ::before ::after :psedo-element selectors that represent the front and back of the selector. They can be used to insert content before or after an element without changing the original HTML structure.
          "&::before, $::after": { borderTopStyle: "dashed" },
        }}
      >
        OR
      </Divider>
      <Stack direction={"row"} justifyContent="center" spacing={2}>
        <IconButton>
          <GoogleLogo color="#DF3E30" />
        </IconButton>
        <IconButton color="inherit">
          <GithubLogo />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1C9CEA" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
