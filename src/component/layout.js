import { Grid } from "@mui/material";
import React from "react";
import Header from "./header";

function Layout(props) {
  return (
    <div>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container className="children-countainer" >
          {props.children}
      </Grid>
    </div>
  );
}

export default Layout;
