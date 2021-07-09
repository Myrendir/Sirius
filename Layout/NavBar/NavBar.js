import React from 'react';
import Grid from "@material-ui/core/Grid";
import styles from "../../styles/layout/NavBar/NavBar";
import withStyles from "@material-ui/core/styles/withStyles";
import {clearAuthenticationToken} from '../../utils/authentication'
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    }

  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({auth: true})
    }
  }

  render() {
    const {classes} = this.props;
    const {auth} = this.state;
    return (
      <Grid className="navbar">
        {/*<h2 className={classes.title}>Je suis une Navbar</h2>*/}

        <input id="burger" type="checkbox"/>

        <label htmlFor="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav>
          <ul>
            <li><a className="nav-a" href="../#accueil">Accueil</a></li>
            <li><a className="nav-a" href="/profil">Profil</a></li>
            <li><a className="nav-a" href="/contactbook">Annuaire</a></li>
            <li>{!auth ? <a className="nav-a" href="/login">Se connecter</a> : <a href="/" onClick={clearAuthenticationToken}>Se déconnecter</a>}</li>
          </ul>
        </nav>
      </Grid>

    )
  }
}

export default withStyles(styles)(NavBar)
