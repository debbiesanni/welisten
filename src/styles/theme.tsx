import { createTheme, PaletteMode } from "@mui/material";
import grey from "@mui/material/colors/grey";

const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? "#1976d2" : grey[400],
      },
      secondary: {
        main: mode === "light" ? grey[600] : grey[400],
      },
    },
  });
export default theme;
