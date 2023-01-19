import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,
  // alpha(theme.palette.background.paper, 1),
  marginRight: 0,
  width: "100%",
}));

export default Search;
