import React from 'react';
import LoginVerification from '../components/Login/LoginVerification';
import {Helmet} from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import NavBar from "../Layout/NavBar/NavBar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import UrgenceApero from "../components/UrgenceApero/UrgenceApero";
import UnofficialChat from "../components/Chats/UnofficialChat";
import OfficialChat from "../components/Chats/OfficialChat";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import getAuthToken from '../utils/authentication';
import Login from "../components/Login/Login";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedDate: new Date(),
      setSelectedDate: new Date(),
      auth: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({auth: true})
    }
    console.log(this.state.auth)
  }

  handleClickOpen = () => {
    this.setState({open: true})
  };


  handleClose = () => {
    this.setState({open: false})
  };

  handleDateChange = (date) => {
    this.state.setSelectedDate(date);
  };


  render() {

    const {open, selectedDate, setSelectedDate, auth} = this.state;
    return (

      <Grid>
        {
          auth ?
            <Grid>
              <Helmet>
                <title>Sirius</title>
              </Helmet>
              <Grid>
                <NavBar/>
                <div className="home" id="accueil">
                  <div className="block-home">
                    <h1>SIRIUS 1.7.5</h1>
                    <p>Sirius est une plateforme qui a pour objectif d'être votre happiness officer en ligne.
                      Vous pouvez accéder aux dernières publications d'Orion que ce soit sous forme de posts ou par
                      messages dans
                      les chats qui sont mis à votre disposition.
                      Vous pouvez également consulter l'annuaire des entreprises partenaires pour trouver un contact ou
                      encore
                      déposer une ou plusieurs idées dans la boite à idées.
                      Enfin, si vous souhaitez retrouver vos collègues ou des membres d'autres entreprises présentes au
                      sein des locaux d'Orion,
                      vous pouvez déclencher l'alerte apéro pour les inviter.</p>
                    <div className="align-ctr"><a href="../#actualites">C'est parti !</a></div>
                  </div>
                </div>

                <div className="section news" id="actualites">
                  <div className="centered-vh">
                    <h1>Actualités</h1>
                    <div className=" single-news">
                      <img src="https://www.businessfrance-tech.fr/wp-content/uploads/business-meeting-1080x675.jpeg"
                           alt="News"/>
                      <h2>Hackathon</h2>
                      <h3>Mardi 1 juin</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis
                        deserunt,
                        ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                        quisquam sit totam?</p>
                      <a href="">Voir le lien</a>
                    </div>

                    <div className="single-news">
                      <img src="https://www.businessfrance-tech.fr/wp-content/uploads/business-meeting-1080x675.jpeg"
                           alt="News"/>
                      <h2>Hackathon</h2>
                      <h3>Mardi 1 juin</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis
                        deserunt,
                        ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                        quisquam sit totam?</p>
                      <a href="">Voir le lien</a>
                    </div>
                    <div className="single-news">
                      <img src="https://www.businessfrance-tech.fr/wp-content/uploads/business-meeting-1080x675.jpeg"
                           alt="News"/>
                      <h2>Hackathon</h2>
                      <h3>Mardi 1 juin</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis
                        deserunt,
                        ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                        quisquam sit totam?</p>
                      <a href="">Voir le lien</a>
                    </div>
                    <div className="arrow"><a href="#apero">Apéro &#9660;</a></div>
                  </div>
                </div>

                <div className="section apero" id="apero">
                  <div className="centered-vh">
                    <h1>Urgence Apéro !</h1>
                    <div className="bgd-apero">
                      <div className="card-apero"/>
                      <div className="card-apero-2">
                        <h2>Urgence apéro !</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis
                          deserunt,
                          ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                          quisquam sit totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                          asperiores
                          assumenda commodi, dignissimos doloremque ducimus eveniet explicabo fugit, ipsa laborum
                          maiores
                          nam natus provident quasi rerum sapiente soluta temporibus tenetur.</p><br/>

                        <div className="align-ctr btn-apero">
                          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Urgence
                            Apéro</Button>
                          <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Alerte apéro </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Lorem blabla blabla boir alcool
                              </DialogContentText>
                              <TextField
                                autoFocus
                                margin="dense"
                                id="comment"
                                label="Commentaire"
                                type="text"
                                fullWidth
                              />
                              {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                              {/*  <Grid container justifyContent="space-around">*/}
                              {/*    <KeyboardDatePicker*/}
                              {/*      disableToolbar*/}
                              {/*      variant="inline"*/}
                              {/*      format="MM/dd/yyyy"*/}
                              {/*      margin="normal"*/}
                              {/*      id="date-picker-inline"*/}
                              {/*      label="Date picker inline"*/}
                              {/*      value={selectedDate}*/}
                              {/*      onChange={this.handleDateChange}*/}
                              {/*      KeyboardButtonProps={{*/}
                              {/*        'aria-label': 'change date',*/}
                              {/*      }}*/}
                              {/*    />*/}
                              {/*  </Grid>*/}
                              {/*</MuiPickersUtilsProvider>*/}
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={this.handleClose} color="primary">
                                Annuler
                              </Button>
                              <Button onClick={this.handleClose} color="primary">
                                Apéro !
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                    <div className="arrow"><a href="#idees">Boîte à idées &#9660;</a></div>
                  </div>
                </div>


                <div className="section idees" id="idees">
                  <div className="centered-vh">
                    <div className="form">
                      <h1>La boîte à idées</h1>
                      <form>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis
                          deserunt,
                          ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                          quisquam sit totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                          asperiores
                          assumenda commodi, dignissimos doloremque ducimus eveniet explicabo fugit, ipsa laborum
                          maiores
                          nam natus provident quasi rerum sapiente soluta temporibus tenetur.</p>
                        <textarea name="" id="" cols="30" rows="10" placeholder="J'ai une idée ! "/><br/>
                        <button type="submit" id="login-button">Envoyer</button>
                      </form>
                    </div>
                  </div>
                </div>

                <footer>
                  <div className="ft-logo">
                    <h1>Sirius 1.7.5</h1>
                  </div>
                </footer>
                <UnofficialChat/>
                <OfficialChat/>
              </Grid></Grid> : <Login/>
              }
            </Grid>

          )
        }
        }

        export default Home
