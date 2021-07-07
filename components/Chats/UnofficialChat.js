import React from 'react';
import axios from 'axios';
import {snackBarError} from "../../utils/notifications";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

var refreshChat = setInterval(function() {
    let lastMessage = messages[messages.length - 1];
    let objectToSend = {Date: lastMessage.sendAt};
    axios.post('localhost:8000/api/chat/unofficial/refresh', JSON.stringify(objectToSend))
        .then(res => {this.setState({ messages: messages.concat(res)})})
        .catch(err => console.log(err))
}, 15000);

class UnofficialChat extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageContent: ""
        }
      }

    componentDidMount() {
        axios.get('localhost:8000/api/chat/unofficial')
        .then(res => {
            this.setState({ messages: res });
        })
        .catch(err => {
            console.log(err);
            this.setState({ messages: [] });
        });
        refreshChat;
    }

    onSend = e => {
        e.preventDefault();
        const messageToSend = {
            content: this.state.messageContent
        }
        axios.post('localhost:8000/api/chat/unofficial/send', JSON.stringify(messageToSend))
        .then(res => {
            
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
        const {messageContent} = this.state;

        return (
            <Grid style={{width: '100%'}}>
                <div id="messagesSection">
                    {messages.map(message => (
                        <div id="messageDiv">
                            <p>
                                <span>message.sender</span>
                                <span>message.content</span>
                                <span>message.sendAt</span>
                            </p>
                            
                        </div>
                    ))}
                </div>
                <div id="sendMessageSection">
                    <Input placeholder="Votre message..." value={messageContent} onChange={this.onChange} />
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