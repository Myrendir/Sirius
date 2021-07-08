import React from 'react';
import axios from 'axios';
import {withStyles} from '@material-ui/core/styles';
import styles from '../../styles/components/ContactTable/ContactTable';
import Grid from "@material-ui/core/Grid";
import {DataGrid} from "@material-ui/data-grid";

const {setAuthToken, setAxiosAuthentication, getAuthToken} = require('../../utils/authentication');
const {BASE_URL} = require('../../utils/conf');

const userEntityColumns = [
    {field: "first_name", headerName: "Prénom", width: 150},
    {field: "last_name", headerName: "Nom", width: 150},
    {field: "id", headerName: "Mail", width: 150},
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
    setAxiosAuthentication();
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/api/user/list`)
      .then(res => {
          console.log(res);
          res.data.forEach(function (user) {
              user.id = user.email;
              user.companyActivity = user.company_activity.name;
          });
        this.setState({dataGridRows: res.data});
      })
      .catch(err => {
        console.log(err);
        this.setState({dataGridRows: []});
      });
  }

    render() {
    const {dataGridRows} = this.state;
        return (
            <Grid style={{width: '95%' , height: '80vh', backgroundColor:'#fff', margin:'0 auto'}}>
                <DataGrid rows={dataGridRows} columns={userEntityColumns} pageSize={10} />
            </Grid>
        )
    }
}

export default ContactTable
