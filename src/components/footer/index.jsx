import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Footer() {
  var today = new Date();
  return (
    <Card sx={{ mt: 1, color: "gray", boxShadow: 0 }}>
      <CardContent>
        <center> &copy; Copyright TERAI {today.getFullYear()}</center>
      </CardContent>
    </Card>
  );
}
