import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "5vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            align="center"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            POKEMON
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
