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
import { useRouter } from "next/router";
const {BASE_URL, BASE_CLIENT_URL} = require('../../utils/conf');
const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

class LoginVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      showPassword: false,
    }
  }
  componentDidMount() {
    const Router = useRouter();
    setAxiosAuthentication();
    axios.get(`${BASE_URL}/api/user/list`)
    .then(res)
    .catch(err => {
        localStorage.clear();
        Router.push(`${BASE_CLIENT_URL}/login`);
    });
  }

  render() {
      return null;
  }
}

export default LoginVerification
