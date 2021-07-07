import {Grid} from "@material-ui/core";
import Register from "../components/Register/Register";
import React from "react";

class test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Register/>
      </Grid>
    )
  }
}

export default(test)
