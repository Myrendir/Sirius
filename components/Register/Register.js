import React from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import * as Router from "next";
import {snackBarError, snackBarSuccess} from "../../utils/notifications";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from '../../styles/components/Register/Register';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const checkPasswordFormat = pass => (pass.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'));

const checkPass1 = pass => {
  if (pass === '') {
    return {check: false, error: 'Le mot de passe est vide'};
  } else if (checkPasswordFormat(pass)) {
    return {check: true};
  }
  return {
    error: '8 caractères minimum dont une majuscule, une minuscule et un chiffre',
    check: false,
  };
};
const checkPass2 = (pass1, pass2) => {
  if (pass1 == pass2) {
    return {check: true};
  }
  return {
    error: 'Les mots de passe saisis sont différents',
    check: false,
  };
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password2: '',
      token: '',
      status1: {error: '', check: false},
      status2: {error: '', check: false},
      showPassword: false
    }
  }

  componentDidMount() {
    const token = this.props.token;
    this.setState({
      token: token
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onChange2 = e => {
    this.setState({
      status1: checkPass1(this.state.password),
      status2: checkPass2(this.state.password, this.state.password2),
    });
  };
  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }
  onChangefirstname = e => {
    this.setState({
      firstname: e.target.value
    })
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }
  onChangeCompany = e => {
    this.setState({
      company: e.target.value
    })
  }
  handleChange = e => {
    this.setState({
      companyActivity: e.target.value
    })
  }
  onChangePhone = e => {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const data = {
      password: this.state.password,
      token: this.state.token,
    };
    axios.post('http://localhost:8000/api/register')
      .then(res => {
        const user = res.data;
        snackBarSuccess('Informations modifiées avec succès');
        Router.push({pathname: '/'});
      })
      .catch(err => {
        console.log(err)
        snackBarError(err.response.data.msg)
      })
  }
  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const {classes} = this.props;
    const {showPassword} = this.state;
    return (
      <Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

          <TextField
            id="standard-with-placeholder"
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
          <TextField
            id="standard-with-placeholder"
            type="text"
            name="firstname"
            placeholder="Prénom"
            onChange={this.onChangefirstname}
          />
          <TextField
            id="standard-with-placeholder"
            type="text"
            name="lastname"
            placeholder="Nom"
            onChange={this.onChangeName}
          />
          <TextField
            id="standard-with-placeholder"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onChangeEmail}
          />
          <TextField
            id="standard-with-placeholder"
            type="text"
            name="company"
            placeholder="Company"
            onChange={this.onChangeCompany}
          />

          <Select
            value="Domaine d'activité"
            onChange={this.handleChange}
          >
            <MenuItem value={'Architecture'}>Architecture</MenuItem>
            <MenuItem value={'Informatics'}>Informatique</MenuItem>
            <MenuItem value={'Marketing'}>Marketing</MenuItem>
          </Select>

          <TextField
            id="standard-with-placeholder"
            type="text"
            name="phoneNumber"
            placeholder="Téléphone"
            onChange={this.onChangePhone}
          />
          <TextField
            id="standard-with-placeholder"
            type="text"
            name="beverage"
            placeholder="Boisson"
            onChange={this.onChangePhone}
          />
          <TextField
            id="standard-with-placeholder"
            label="Mot de passe"
            placeholder="Mot de passe"
            style={{width: '100%'}}
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            onKeyUp={this.onChange2}
            error={this.state.status1.error}
            helperText={this.state.status1.error}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <TextField
            id="standard-with-placeholder"
            label="Répéter le mot de passe"
            placeholder="Mot de passe"
            style={{width: '100%'}}
            type={showPassword ? "text" : "password"}
            name="password2"
            value={this.state.password2}
            onChange={this.onChange}
            onKeyUp={this.onChange2}
            error={this.state.status2.error}
            helperText={this.state.status2.error}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    tabIndex="-1"
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            variant="contained"
            onClick={this.onSubmit}
            classes={{root: classes.saveButton}}
          >
            Valider
          </Button>
        </Grid>
      </Grid>

    )
  }
}

export default withStyles(styles)(Register);
