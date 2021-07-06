import React from 'react';
import {Helmet} from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import NavBar from "../Layout/NavBar/NavBar";

class profil extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Helmet>
                    <title>Profil</title>
                </Helmet>
                <NavBar/>
                <Grid>
                    <div className="section profil">
                        {/*<div className="centered-vh">*/}
                        <div className="header-profil"><h1>Mon profil</h1></div>
                        <div className="around-img">
                            <img src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" alt="Profil picture"/>
                        </div>
                        <h2>John Doe</h2>
                        <div className="card-profil">
                            <h2>Mes informations</h2>
                            <h3>Adresse E-mail : johndoe@gmail.com</h3>
                            <h3>Entreprise : Companykuréoru</h3>
                            <h3>Type d'entreprise : Entreprise individuelle (EI) </h3>
                            <h3>Compétence(s) : Vraiment trop beau</h3>
                            <h3>Breuvage favoris : Whisky</h3>
                            <a href="">Modifier mes informations</a>
                        </div>
                        {/*</div>*/}
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default profil
