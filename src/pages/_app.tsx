import "../styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { CiBrightnessDown } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import theme from "@src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Component {...pageProps} />
      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          right: { xs: "4%", md: "11%" },
          display: "flex",
          alignItems: "center",
        }}
      >
        {mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={() =>
            mode === "light" ? setMode("dark") : setMode("light")
          }
          color="inherit"
        >
          {mode === "dark" ? <CiDark /> : <CiBrightnessDown />}
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
