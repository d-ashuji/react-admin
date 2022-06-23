import React from "react";
import { Typography } from "@mui/material";
import ThemeSetting from "../ThemeSetting";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const Text = ({ sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontStyle: "italic",
        ...sx,
      }}
    >
      <Typography sx={{ fontSize: 12 }}>
        {ThemeSetting.footerText}{" "}
        {ThemeSetting.footerYear && new Date().getFullYear()}{" "}
      </Typography>
      <Avatar
        alt="Remy Sharp"
        src={ThemeSetting.logoUrl}
        sx={{
          ml: 1,
          height: 24,
          ".css-1pqm26d-MuiAvatar-img": { objectFit: "scale-down" },
        }}
      />
    </Box>
  );
};

export default Text;
