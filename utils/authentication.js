import axios from 'axios';
import cookie from 'react-cookies'

const jwt = require('jsonwebtoken');

const setAuthToken = (token) => {
  if (typeof localStorage == 'undefined') {
    console.error('Can not set auth token, undefined localStorage')
    return null
  }
  localStorage.setItem('token', token)
}

const getAuthToken = () => {
  if (typeof localStorage == 'undefined') {
    return null
  }
  const token = localStorage.getItem('token')
  if (!token) {
    return null
  }

  return jwt.decode(token.split(' ')[1])
}

const setAxiosAuthentication = () => {
  if (typeof localStorage == 'undefined') {
    console.log(`Can not set axios authentication, undefined localStorage`)
    return null
  }
  const token = localStorage.getItem('token')
  if (token) {
    // Apply to every request
    axios.defaults.headers.Authorization = 'Bearer ' + token
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization']
  }
};

const clearAuthenticationToken = () => {
  if (typeof localStorage == 'undefined') {
    console.log(`Can not clear authentication token, undefined localStorage`)
    return null
  }
  localStorage.removeItem('token')
}
const removeStatusRegister = () => {
  return localStorage.removeItem('setAlfredRegister')
}
module.exports = {
  setAxiosAuthentication, clearAuthenticationToken, setAuthToken, getAuthToken, removeStatusRegister
}
