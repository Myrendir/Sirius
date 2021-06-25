import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { DataGrid } from "@material-ui/data-grid";
import Input from "@material-ui/core/Input";

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

const rows = [
    { id: 1, name: "Dorian", nickname: "Le Niglo"},
    { id: 2, name: "Nicolas", nickname: "Le Rigolo"}
];
const columns = [
    { field: "name", headerName: "Nom", width: 150 },
    { field: "nickname", headerName: "Surnom", width: 150}
];

var userEntityColumns = [ 
    { field: "firstName", headerName: "Prénom", width: 150 },
    { field: "LastName", headerName: "Nom", width: 150 },
    { field: "email", headerName: "Adresse mail", width: 150 },
    { field: "phoneNumber", headerName: "N° de tél", width: 150 },
    { field: "company", headerName: "Entreprise", width: 150 },
    { field: "companyActivity", headerName: "Secteur d'activité", width: 150 },
    { field: "skills", headerName: "Domaine(s) de compétence", width: 150 }
];

class ContactTable extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            dataGridRows: []
        }
    }

    componentDidMount() {
        axios.get('localhost:8000/api/users')
        .then(res => {
            this.setState({dataGridRows: res});
        })
        .catch(err => {
            console.log(err);
            this.setState({dataGridRows: []});
        });
    }

    render() {
        return (
            <Grid style={{width: '100%'}}>
                <DataGrid rows={rows} columns={columns} />
            </Grid>
        )
    }
}

export default ContactTable