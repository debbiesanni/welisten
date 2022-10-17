import Box from "@mui/material/Box";

const Logo = (): JSX.Element => {
  return (
    <Box
      sx={{
        fontFamily: "eczar",
        fontWeight: 900,
        fontSize: { xs: 40, md: 60 },
        color: "#0492c2",
        padding: 0,
      }}
    >
      welisten<span style={{ color: "#59788e" }}>.</span>
    </Box>
  );
};

export default Logo;
