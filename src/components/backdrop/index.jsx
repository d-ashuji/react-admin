import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Index({ state }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={state}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Index;
