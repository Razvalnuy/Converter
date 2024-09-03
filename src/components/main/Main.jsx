import { Box } from "@mui/material";
import Convertor from "../flags/Dropdown/Dropdown";

export default function Main() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Convertor />
      </Box>
    </>
  );
}
