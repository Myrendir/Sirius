export default theme => ({
  fullContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: '#03989E',
    position:'relative'
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContant: {
    flexDirection: 'column',
  },
  linkText: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 12,
  },

  hrStyle: {
    borderWidth: 0.5,
    color: 'lightgray',
  },
  margin: {
    width: '100%',
  },
  genericContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  colorIcon: {
    color: 'rgba(84,89,95,0.95)',
  },
  widthTextField: {
    width: '70%',

  },
  newContainer: {
    padding: '5%',
    backgroundColor: '#fff',
    width:'60%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform:'translate(-50%,-50%)',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  },
  containerDialogContent: {
    width: '100%',
    height: '100%',
    marginBottom: '1.6rem',
    marginTop: '-1.6rem',
  },
  titleRegister: {
    textAlign: 'center',
    margin: '0px auto 1.6rem',
    fontSize: '1.6rem',
    color: 'rgba(84,89,95,0.95)',
    letterSpacing: -1,
    fontWeight: 'bold',
  },
  flexContainerPics: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: '100%'
  }
});

