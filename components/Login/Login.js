import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import jwtDecode from 'jwt-decode';
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
import * as Router from "next";
const {BASE_URL} = require('../../utils/conf');
const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

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
    console.log(`${BASE_URL}/api/login_check`);

    e.preventDefault();
    const user = {
      username: this.state.email,
      password: this.state.password,
    }

    console.log(user);

    axios.post(`${BASE_URL}/api/login_check`, user)
      .then(res => {
        let decodedToken = jwtDecode(res.data.token);
        setAuthToken(res.data.token, this.state.email, decodedToken);
        setAxiosAuthentication();
        Router.push('/')
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

  onChangeEmail = (e) => {
    this.setState({email: e.target.value});
  }
  onChangePassword = (e) => {
    this.setState({password: e.target.value});
  }

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
                      onChange={this.onChangeEmail}
                      name="email"
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
                      onChange={this.onChangePassword}
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
                    de passe oublié ?</a></Link>
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
