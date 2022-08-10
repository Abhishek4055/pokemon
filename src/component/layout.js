import { Grid } from "@mui/material";
import React from "react";
import Header from "./header";

function Layout(props) {
  return (
    <div>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container style={{ marginTop: "80px" }}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          {props.children}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}

export default Layout;
