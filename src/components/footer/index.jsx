import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Text from "./FooterText";

export default function Footer() {
  return (
    <Card sx={{ mt: 1, color: "gray", boxShadow: 0 }}>
      <CardContent
        sx={{
          p: 0,
          ":last-child": { pb: 0 },
        }}
      >
        <Text />
      </CardContent>
    </Card>
  );
}
