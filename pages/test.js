import {Grid} from "@material-ui/core";
import Register from "../components/Register/Register";
import UnofficialChat from "../components/Chats/UnofficialChat";
import React from "react";

class test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <UnofficialChat />
      </Grid>
    )
  }
}

export default(test)
