import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchContainer = styled(Box)({
  background: "#fff",
  width: "38%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
});

const Search = () => {
  return (
    <SearchContainer>
      <InputBase
        sx={{ paddingLeft: "20px", width: "100%", fontSize: "unset" }}
        placeholder="search for products, brands and more"
      />
      <Box sx={{ display: "flex" }}>
        <SearchIcon sx={{ color: "blue", padding: "5px" }} />
      </Box>
    </SearchContainer>
  );
};

export default Search;
