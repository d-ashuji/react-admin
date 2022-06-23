import React from "react";
import { Typography } from "@mui/material";
import ThemeSetting from "../ThemeSetting";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const Text = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontStyle: "italic",
      }}
    >
      <Typography color="text.secondary">
        {ThemeSetting.footerText}{" "}
        {ThemeSetting.footerYear && new Date().getFullYear()}{" "}
      </Typography>
      <Avatar alt="Remy Sharp" src={ThemeSetting.logoUrl} sx={{ ml: 1 }} />
    </Box>
  );
};

export default Text;
