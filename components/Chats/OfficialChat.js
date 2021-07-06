import React from 'react';
import axios from 'axios';

const {setAuthToken, setAxiosAuthentication} = require('../../utils/authentication');

var refreshChat = setInterval(function() {
    let lastMessage = messages[messages.length - 1];
    axios.post('localhost:8000/api/offchat/refresh', lastMessage.sendAt)
        .then(res => {this.setState({ messages: messages.concat(res)})})
        .catch(err => console.log(err))
}, 15000);

class OfficialChat extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
      }

    componentDidMount() {
        axios.get('localhost:8000/api/offchat')
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
    }

    render() {
        return (
            <Grid style={{width: '100%'}}>
                
            </Grid>
        )
    }
}

export default OfficialChat