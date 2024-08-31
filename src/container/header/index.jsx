import { Grid2 } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid2 container spacing={24} id="cert-header">
      <Grid2 item xs={4}>
        <div className="header-content"></div>
      </Grid2>
    </Grid2>
  );
};

export default Header;
