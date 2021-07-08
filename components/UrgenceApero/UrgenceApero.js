import React from 'react';
import axios from 'axios';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from '../../styles/components/UrgenceApero/UrgenceApero'
import {Grid} from "@material-ui/core";
const {BASE_URL} = require('../../utils/conf');

class UrgenceApero extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.post('')
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <Grid>
        <h1>test modal</h1>
      </Grid>
    )
  }
}

export default withStyles(styles)(UrgenceApero)
