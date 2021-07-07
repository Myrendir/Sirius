import React from 'react';
import {Helmet} from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import NavBar from "../Layout/NavBar/NavBar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import UrgenceApero from "../components/UrgenceApero/UrgenceApero";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false
    }
  }


  dialogUrgence = () => {
    const {openDialog} = this.state;
    const handleClose = () => {
      this.state({open: false});
    }
    
    return (
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle onClose={() => this.setState({open: false})}>
        </DialogTitle>
        <DialogContent>
          <UrgenceApero/>
          <Button onClick={handleClose}>Fermer</Button>
        </DialogContent>
      </Dialog>
    )
  }

  render() {
    return (
      <Grid>
        <Helmet>
          <title>Sirius</title>
        </Helmet>
        <Grid>
          <NavBar/>
          <div className="home" id="accueil">
            <div className="block-home">
              <h1>SIRIUS 1.7.5</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis deserunt,
                ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                quisquam sit totam? Mollitia, pariatur!</p>
              <div className="align-ctr"><a href="">C'est parti !</a></div>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis deserunt,
                  ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                  quisquam sit totam?</p>
                <a href="">Voir le lien</a>
              </div>

              <div className="single-news">
                <img src="https://www.businessfrance-tech.fr/wp-content/uploads/business-meeting-1080x675.jpeg"
                     alt="News"/>
                <h2>Hackathon</h2>
                <h3>Mardi 1 juin</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis deserunt,
                  ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                  quisquam sit totam?</p>
                <a href="">Voir le lien</a>
              </div>
              <div className="single-news">
                <img src="https://www.businessfrance-tech.fr/wp-content/uploads/business-meeting-1080x675.jpeg"
                     alt="News"/>
                <h2>Hackathon</h2>
                <h3>Mardi 1 juin</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis deserunt,
                  ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                  quisquam sit totam?</p>
                <a href="">Voir le lien</a>
              </div>
            </div>
          </div>

          <div className="section apero" id="apero">
            <div className="centered-vh">
              <h1>Urgence Apéro !</h1>
              <div className="bgd-apero">
                <div className="card-apero"/>
                <div className="card-apero-2">
                  <h2>Urgence apéro !</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis deserunt,
                    ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                    quisquam sit totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores
                    assumenda commodi, dignissimos doloremque ducimus eveniet explicabo fugit, ipsa laborum maiores
                    nam natus provident quasi rerum sapiente soluta temporibus tenetur.</p><br/>
                  <div className="align-ctr btn-apero"><a onClick={() => this.dialogUrgence()}>Urgence Apéro !</a></div>
                </div>
              </div>
            </div>
          </div>


          <div className="section idees" id="idees">
            <div className="centered-vh">
              <div className="form">
                <h1>La boîte à idées</h1>
                <form>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi debitis deserunt,
                    ducimus eos incidunt ipsam laborum nam natus necessitatibus nulla officia perferendis quaerat
                    quisquam sit totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores
                    assumenda commodi, dignissimos doloremque ducimus eveniet explicabo fugit, ipsa laborum maiores
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
        </Grid>
      </Grid>
    )
  }
}

export default Home
