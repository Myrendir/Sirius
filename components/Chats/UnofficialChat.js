import React from 'react';
import axios from 'axios';
import {snackBarError} from "../../utils/notifications";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import moment from "moment";

moment.locale('fr');
const {BASE_URL} = require('../../utils/conf');

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

class UnofficialChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageContent: ""
    }
  }


  componentDidMount() {

    const refreshChat = () => {
      const {messages} = this.state;
      setInterval(() => {
        let lastMessage = messages[messages.length - 1];
        let objectToSend = {date: lastMessage.created_at};
        axios.post(`${BASE_URL}/api/chat/unofficial/lastmessage/since`, objectToSend)
          .then(res => {
            res.data.forEach((data) => {
              if (Object.keys(data).length != 0) {
                data.prettyCreatedAt = moment(data.created_at).format('LLL')
                this.setState({messages: messages.concat(data)})
              }
            })

          })
          .catch(err => console.log(err))
      }, 5000)
    };

    setAxiosAuthentication();
    axios.get(`${BASE_URL}/api/chat/unofficial/lastmessage`)
      .then(res => {
        if (res.data.length != 0) {
          res.data.forEach((message) => {
            message.prettyCreatedAt = moment(message.created_at).format('LLL')

          });
          this.setState({messages: res.data.reverse()});
          refreshChat();
        } else
          this.setState({messages: [{id: 1, author: null, created_at: null, content: "Aucun message à afficher"}]});
      })
      .catch(err => {
        console.log(err);
        this.setState({messages: []});
      });

  }

  onSend = e => {
    e.preventDefault();
    const messageToSend = {
      content: this.state.messageContent,
      author: localStorage.getItem("userEmail")
    }

    axios.post(`${BASE_URL}/api/chat/unofficial/send`, JSON.stringify(messageToSend))
      .then(res => {
        messageToSend.prettyCreatedAt = moment(messageToSend.created_at).format('LLL')

        messageToSend.id = this.state.messages[this.state.messages.length - 1].id + 1;
        this.setState({messages: this.state.messages.concat(messageToSend)})
        this.render();
      })
      .catch(err => {
        console.error(err);
        if (err.response)
          snackBarError(err.response.data);
      });
  }

  onChange = e => {
    this.setState({messageContent: e.target.value});
  }

  render() {
    const {messageContent, messages} = this.state;

    return (
      <Grid style={{width: '100%'}}>
        <div id="messagesSection">
          {messages?.map(message => (
            <div id="messageDiv" key={message.id}>
              <p>
                <span>{message.author}</span>
                <span>{message.content}</span>
                <span>{message.prettyCreatedAt}</span>
              </p>

            </div>
          ))}
        </div>
        <div id="sendMessageSection">
          <Input placeholder="Votre message..." value={messageContent} onChange={this.onChange}/>
          <Button onClick={this.onSend} variant="contained" color="primary"
                  style={{width: '100%', color: 'white'}}>
            Envoyer
          </Button>
        </div>
      </Grid>
    )
  }
}

export default UnofficialChat
