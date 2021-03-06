import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from '../../styles/components/Login/Login';
import axios from 'axios';
import {snackBarError} from "../../utils/notifications";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication')

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      showPassword: false,
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }

    axios.post('localhost:8000/api/login', user)
      .then(res => {
        setAuthToken()
        setAxiosAuthentication()
        this.props.login();
      })
      .catch(err => {
        console.error(err);
        if (err.response) {
          snackBarError(err.response.data);
          this.setState({errors: err.response.data});
        }
      })

  }
  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const {classes, callRegister, id} = this.props;
    const {errors, email, password, showPassword} = this.state;


    return (
      <Grid className={classes.fullContainer}>
        <Grid style={{width: '100%'}}>
          <Grid className={classes.newContainer}>
            <Grid>
              <h2 className={classes.titleRegister}>Connexion</h2>
            </Grid>
            <Grid container spacing={3} className={classes.containerDialogContent}>
              <Grid item className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end" className={classes.genericContainer}>
                  <Grid item>
                    <MailOutlineIcon className={classes.colorIcon}/>
                  </Grid>
                  <Grid item className={classes.widthTextField}>
                    <Input
                      label="Email"
                      placeholder="Email"
                      style={{width: '100%', marginTop: 16, marginBottom: 8}}
                      name="email"
                      onChange={this.onChange}
                    />
                    <em>{errors.email}</em>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end" className={classes.genericContainer}>
                  <Grid item>
                    <LockOpenOutlinedIcon className={classes.colorIcon}/>
                  </Grid>
                  <Grid item className={classes.widthTextField}>
                    <Input
                      id="standard-with-placeholder"
                      label="Mot de passe"
                      placeholder="Mot de passe"
                      style={{width: '100%', marginTop: 16, marginBottom: 8}}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={this.onChange}
                      error={errors.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <em>{errors.password}</em>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.margin}>
                <Grid container className={classes.genericContainer}>
                  <Button onClick={this.onSubmit} variant="contained" color="primary"
                          style={{width: '100%', color: 'white'}}>
                    Connexion
                  </Button>
                </Grid>
              </Grid>
              <Grid item className={classes.margin}>
                <Grid container className={classes.genericContainer} style={{flexDirection: 'column'}}>
                  <Link href={'/forgotPassword'}><a color="primary" style={{textDecoration: 'none', color: '#2FBCD3'}}>Mot
                    de passe oubli?? ?</a></Link>
                  <a color="primary" onClick={callRegister}
                     style={{textDecoration: 'none', color: '#2FBCD3', cursor: 'pointer'}}>Pas encore inscrit ?
                    Inscrivez-vous !</a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )

  }
}

export default withStyles(styles)(Login)
