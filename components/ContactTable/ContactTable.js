import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { DataGrid } from "@material-ui/data-grid";
import Input from "@material-ui/core/Input";

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

var fakeRows = [
    { id: 1, firstName: "Dorian", lastName: "LEGROS", email: "dodoledozo@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Juste le boss en fait" },
    { id: 2, firstName: "Nicolas", lastName: "DUFRESNE", email: "nicolo@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Tekken God" },
    { id: 3, firstName: "Paul", lastName: "TURPIN", email: "drudru@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Gros paquet" },
    { id: 4, firstName: "Baptiste", lastName: "ANGOT", email: "tchoupi@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Un foie blindé" },
    { id: 5, firstName: "Jorris", lastName: "POLTERGEIST", email: "poltergay@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Il fait peur" },
    { id: 6, firstName: "Dorian", lastName: "LEGROS", email: "dodoledozo@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Juste le boss en fait" },
    { id: 7, firstName: "Nicolas", lastName: "DUFRESNE", email: "nicolo@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Tekken God" },
    { id: 8, firstName: "Paul", lastName: "TURPIN", email: "drudru@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Gros paquet" },
    { id: 9, firstName: "Baptiste", lastName: "ANGOT", email: "tchoupi@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Un foie blindé" },
    { id: 10, firstName: "Jorris", lastName: "POLTERGEIST", email: "poltergay@gmail.com", phoneNumber: "0776011066", company: "NFactory School", skills: "Il fait peur" },
]

var userEntityColumns = [ 
    { field: "firstName", headerName: "Prénom", width: 150 },
    { field: "lastName", headerName: "Nom", width: 150 },
    { field: "email", headerName: "Mail", width: 150 },
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
            <Grid style={{width: '95%' , height: '80vh', backgroundColor:'#fff', margin:'0 auto'}}>
                <DataGrid rows={fakeRows} columns={userEntityColumns} pageSize={10} />
            </Grid>
        )
    }
}

export default ContactTable
