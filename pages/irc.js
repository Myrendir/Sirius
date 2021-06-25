import React from 'react';
import io from 'socket.io-client';

const socket = io('localhost:8000');

class irc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
      setMessages: []
    }
  }


  render() {
    const {messages, setMessages} = this.state;
    const setNewMessage = (msg) => {
      setMessages([
        ...messages,
        msg
      ])

    }
    const sendMessage = (e) => {
      e.preventDefault();
      const msg = {
        username: e.target.username.value,
        text: e.target.text.value
      };
      socket.emit('CLIENT_MSG', msg);
      setNewMessage(msg);
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">My first chat</div>
                <hr/>
                <div className="messages">
                  {messages.map(msg => {
                    return (
                      <div key>{msg.username}: {msg.text}</div>
                    )
                  })}
                </div>
              </div>
              <form onSubmit={e => sendMessage(e)}>
                <div className="card-footer">
                  <input id="username"
                         type="text"
                         placeholder="Username"
                         className="form-control"
                  />
                  <br/>
                  <input id="text"
                         type="text"
                         placeholder="Your message"
                         className="form-control"
                  />
                  <br/>
                  <button type="submit"
                          className="btn btn-primary form-control">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default irc
