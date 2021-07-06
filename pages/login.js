import React from 'react';
import {Helmet} from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Login from '../components/Login/Login'

class login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <Login/>
                <Grid>
                </Grid>
            </Grid>
        )
    }
}

export default login
