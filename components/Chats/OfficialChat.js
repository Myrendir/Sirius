import React from 'react';
import axios from 'axios';
import {snackBarError} from "../../utils/notifications";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
const {BASE_URL} = require('../../utils/conf');

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

class OfficialChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageContent: ""
        }
      }

    refreshChat = setInterval(function() {
        // const {messages} = this.state;
        // let lastMessage = messages[messages.length - 1];
        // let objectToSend = {Date: lastMessage.sendAt};
        // axios.post(`${BASE_URL}/api/chat/official/refresh`, JSON.stringify(objectToSend))
        //     .then(res => {this.setState({ messages: messages.concat(res)})})
        //     .catch(err => console.log(err))
    }, 15000);

    componentDidMount() {
        setAxiosAuthentication();
        axios.get(`${BASE_URL}/api/chat/official/lastmessage`)
        .then(res => {
            if(res.data.length != 0) {
                res.data.forEach((message) => {
                    let date = new Date(message.created_at);
                    message.prettyCreatedAt =
                    [date.getMonth()+1,date.getDate(),date.getFullYear()].join('/')+' '+
                    [date.getHours(),date.getMinutes(),date.getSeconds()].join(':');
                });
                this.setState({ messages: res.data.reverse() });
            }

            else
                this.setState({ messages: [{id: 1, author: null, created_at: null, content: "Aucun message à afficher"}] });
        })
        .catch(err => {
            console.log(err);
            this.setState({ messages: [] });
        });
        this.refreshChat;
    }

    onSend = e => {
        e.preventDefault();
        const messageToSend = {
            content: this.state.messageContent,
            author: localStorage.getItem("userEmail")
        }

        axios.post('http://localhost:8000/api/chat/official/send', JSON.stringify(messageToSend))
        .then(res => {
            let now = new Date();
            messageToSend.created_at = now.toISOString().slice(0, -5) + "+02:00";
            let date = new Date(messageToSend.created_at);
            messageToSend.prettyCreatedAt =
                [date.getMonth()+1,date.getDate(),date.getFullYear()].join('/')+' '+
                [date.getHours(),date.getMinutes(),date.getSeconds()].join(':');
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

export default OfficialChat
