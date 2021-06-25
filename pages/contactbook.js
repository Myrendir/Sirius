import React from 'react';
import {Helmet} from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import NavBar from "../Layout/NavBar/NavBar";
import ContactTable from "../components/ContactTable/ContactTable";

class ContactBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Helmet>
          <title>Annuaire</title>
        </Helmet>
        <Grid>
          <NavBar/>
          <ContactTable/>
        </Grid>
      </Grid>
    )
  }
}

export default ContactBook