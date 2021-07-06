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
      <Grid className="navbar">
        {/*<h2 className={classes.title}>Je suis une Navbar</h2>*/}
        <ul>
          <li><a className="nav-a" href="">Profil</a></li>
          <li><a className="nav-a" href="#accueil">Accueil</a></li>
          <li><a className="nav-a" href="#actualites">Actualités</a></li>
          <li><a className="nav-a" href="#apero">Apéro !</a></li>
          <li><a className="nav-a" href="#idees">Idées</a></li>
        </ul>
      </Grid>

    )
  }
}

export default withStyles(styles)(NavBar)
