import React from 'react';
import Grid from "@material-ui/core/Grid";
import styles from "../../styles/layout/NavBar/NavBar";
import withStyles from "@material-ui/core/styles/withStyles";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid>
        <h2 className={classes.title}>Je suis une Navbar</h2>
      </Grid>

    )
  }
}

export default withStyles(styles)(NavBar)
