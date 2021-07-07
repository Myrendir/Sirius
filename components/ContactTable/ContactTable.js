import React from 'react';
import axios from 'axios';
import {withStyles} from '@material-ui/core/styles';
import styles from '../../styles/components/ContactTable/ContactTable';
import Grid from "@material-ui/core/Grid";
import {DataGrid} from "@material-ui/data-grid";

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

const fakeRows = [
  {
    id: 1,
    firstName: "Dorian",
    lastName: "LEGROS",
    email: "dodoledozo@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Juste le boss en fait"
  },
  {
    id: 2,
    firstName: "Nicolas",
    lastName: "DUFRESNE",
    email: "nicolo@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Tekken God"
  },
  {
    id: 3,
    firstName: "Paul",
    lastName: "TURPIN",
    email: "drudru@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Gros paquet"
  },
  {
    id: 4,
    firstName: "Baptiste",
    lastName: "ANGOT",
    email: "tchoupi@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Un foie blindé"
  },
  {
    id: 5,
    firstName: "Jorris",
    lastName: "POLTERGEIST",
    email: "poltergay@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Il fait peur"
  },
  {
    id: 6,
    firstName: "Dorian",
    lastName: "LEGROS",
    email: "dodoledozo@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Juste le boss en fait"
  },
  {
    id: 7,
    firstName: "Nicolas",
    lastName: "DUFRESNE",
    email: "nicolo@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Tekken God"
  },
  {
    id: 8,
    firstName: "Paul",
    lastName: "TURPIN",
    email: "drudru@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Gros paquet"
  },
  {
    id: 9,
    firstName: "Baptiste",
    lastName: "ANGOT",
    email: "tchoupi@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Un foie blindé"
  },
  {
    id: 10,
    firstName: "Jorris",
    lastName: "POLTERGEIST",
    email: "poltergay@gmail.com",
    phoneNumber: "0776011066",
    company: "NFactory School",
    skills: "Il fait peur"
  },
];

const userEntityColumns = [
  {field: "firstName", headerName: "Prénom", width: 150},
  {field: "lastName", headerName: "Nom", width: 150},
  {field: "email", headerName: "Mail", width: 150},
  {field: "phoneNumber", headerName: "N° de tél", width: 150},
  {field: "company", headerName: "Entreprise", width: 150},
  {field: "companyActivity", headerName: "Secteur d'activité", width: 150},
  {field: "skills", headerName: "Domaine(s) de compétence", width: 150}
];

class ContactTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataGridRows: []
    }
  }

  componentDidMount() {
    setAxiosAuthentication()
    axios.get('localhost:8000/api/user/list')
      .then(res => {
        this.setState({dataGridRows: res});
      })
      .catch(err => {
        console.log(err);
        this.setState({dataGridRows: []});
      });
  }

  render() {
    const {dataGridRows} = this.state;
    return (
      <Grid style={{width: '100%', height: '660px'}}>
        <DataGrid rows={dataGridRows} columns={userEntityColumns} pageSize={10}/>
      </Grid>
    )
  }
}

export default withStyles(styles)(ContactTable)
