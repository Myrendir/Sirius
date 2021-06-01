import React from 'react';
import {Helmet} from 'react-helmet';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Helmet>
          <title>Sirius</title>
        </Helmet>
        <Grid>
          <h1>Bonjour</h1>
        </Grid>
      </Grid>
    )
  }
}
export default Home
