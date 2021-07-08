import React from 'react';
import axios from 'axios';
import {snackBarError} from "../../utils/notifications";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
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
       setInterval(function () {
        let lastMessage = messages[messages.length - 1];
        let objectToSend = {date: lastMessage.prettyCreatedAt};
        axios.post(`${BASE_URL}/api/chat/unofficial/lastmessage/since`, objectToSend)
          .then(res => {
            console.log('res' +res.data)
            this.setState({messages: messages.push(res.data)})
          })
          .catch(err => console.log(err))
      }, 15000)
    };

    setAxiosAuthentication();
    axios.get(`${BASE_URL}/api/chat/unofficial/lastmessage`)
      .then(res => {
        console.log(res);
        if (res.data.length != 0) {
          res.data.forEach((message) => {
            let date = new Date(message.created_at);
            message.prettyCreatedAt =
              [date.getMonth() + 1, date.getDate(), date.getFullYear()].join('/') + ' ' +
              [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
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
    console.log(this.state)
    // refreshChat();
  }

  onSend = e => {
    e.preventDefault();
    const messageToSend = {
      content: this.state.messageContent,
      author: localStorage.getItem("userEmail")
    }

    axios.post(`${BASE_URL}/api/chat/unofficial/send`, JSON.stringify(messageToSend))
      .then(res => {
        let now = new Date();
        messageToSend.created_at = now.toISOString().slice(0, -5) + "+02:00";
        let date = new Date(messageToSend.created_at);
        messageToSend.prettyCreatedAt =
          [date.getMonth() + 1, date.getDate(), date.getFullYear()].join('/') + ' ' +
          [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
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
      <Grid className='chat'>
          <input type="checkbox" id='toggle'/>
          <div className="complete-box">
          <div className="head-chat">
              <svg id="b06f5967-fed7-4e93-82f7-c825c21009e5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="637.95669" height="480" viewBox="0 0 637.95669 480"><path d="M784.97835,518c-75.14014,0-134-13.6167-134-31,0-10.42188,20.856-19.7207,57.22-25.51123a1,1,0,1,1,.31445,1.9751C674.25789,468.919,652.97835,477.9375,652.97835,487c0,15.71973,60.44848,29,132,29s132-13.28027,132-29c0-9.10059-21.41553-18.14111-55.88965-23.59277a1.00008,1.00008,0,0,1,.3125-1.97559c36.59106,5.78662,57.57715,15.106,57.57715,25.56836C918.97835,504.3833,860.11848,518,784.97835,518Z" transform="translate(-281.02165 -210)" fill="#ccc"/><path d="M718.49983,523.83838a76.98277,76.98277,0,0,0,133.1499-.33551A1211.97868,1211.97868,0,0,1,718.49983,523.83838Z" transform="translate(-281.02165 -210)" fill="#e6e6e6"/><path d="M859.02034,502.12292a76.997,76.997,0,1,0-147.85742.79908A572.23317,572.23317,0,0,0,859.02034,502.12292Z" transform="translate(-281.02165 -210)" fill="#e6e6e6"/><path d="M400.47835,219a9,9,0,1,0-12.5,8.29388V274h7V227.29388A9.00223,9.00223,0,0,0,400.47835,219Z" transform="translate(-281.02165 -210)" fill="#ccc"/><path d="M450.98128,443h-.00293a20.02122,20.02122,0,0,1-19.9856-20.771c.40088-10.603,9.58106-19.229,20.46436-19.229h54.94458l45.2124-20.01514a5.00688,5.00688,0,0,1,6.596,2.54737l12.14428,27.43261a5.0062,5.0062,0,0,1-2.54785,6.59571L523.275,439.27441a35.4,35.4,0,0,1-14.00171,3.04639Z" transform="translate(-281.02165 -210)" fill="#ccc"/><path d="M317.79549,548.34277a4.59492,4.59492,0,0,1-.77759-.0664L287.44783,543.23h.00024a4.49921,4.49921,0,0,1-3.65893-5.30127l23.14551-118.05078a19.49983,19.49983,0,0,1,38.44189,6.57227L322.191,544.70654A4.46977,4.46977,0,0,1,317.79549,548.34277Z" transform="translate(-281.02165 -210)" fill="#ccc"/><circle cx="20.95669" cy="346" r="18" fill="#e6e6e6"/><circle cx="108.27953" cy="124.67717" r="67" fill="#e6e6e6"/><circle cx="108.27953" cy="124.67717" r="67" fill="#e6e6e6"/><circle cx="108.27953" cy="124.67717" r="51" fill="#01c5ad"/><path d="M395.26365,356.0861c-3.30591-.0918-7.42029-.20654-10.59-2.522a8.13275,8.13275,0,0,1-3.20007-6.07276,5.47084,5.47084,0,0,1,1.86035-4.49315c1.65552-1.39893,4.073-1.72706,6.67823-.96143L387.313,322.3112l1.98144-.27149,3.17322,23.19-1.65466-.75928c-1.91834-.87988-4.55164-1.32764-6.188.05517a3.51516,3.51516,0,0,0-1.15271,2.89551,6.14684,6.14684,0,0,0,2.38122,4.52783c2.46668,1.80176,5.74622,2.03418,9.46582,2.13819Z" transform="translate(-281.02165 -210)" fill="#2f2e41"/><rect x="85.72051" y="114.01237" width="10.77161" height="2" fill="#2f2e41"/><rect x="119.72051" y="114.01237" width="10.77161" height="2" fill="#2f2e41"/><path d="M354.97835,335a51.01141,51.01141,0,0,1,43.26806-50.41675A50.99376,50.99376,0,1,0,397.4427,385.275,51.00412,51.00412,0,0,1,354.97835,335Z" transform="translate(-281.02165 -210)" opacity="0.2"/><path d="M440.3011,548.5h-102a16.51868,16.51868,0,0,1-16.5-16.5V417a16.51868,16.51868,0,0,1,16.5-16.5h15.5V405a11.51294,11.51294,0,0,0,11.5,11.5h48a11.51294,11.51294,0,0,0,11.5-11.5v-4.5h15.5a16.51868,16.51868,0,0,1,16.5,16.5V532A16.51868,16.51868,0,0,1,440.3011,548.5Z" transform="translate(-281.02165 -210)" fill="#e6e6e6"/><path d="M453.98714,659H413.97835V612.811l-52.251-80.11622,33.50439-21.85107,52.02247,79.76758a36.18943,36.18943,0,0,1,5.8789,19.16455Z" transform="translate(-281.02165 -210)" fill="#e6e6e6"/><path d="M383.47835,689.5h-39v-117h39Z" transform="translate(-281.02165 -210)" fill="#e6e6e6"/><path d="M432.3011,583.5h-86a8.50951,8.50951,0,0,1-8.5-8.5V543a8.50951,8.50951,0,0,1,8.5-8.5h86a8.50951,8.50951,0,0,1,8.5,8.5v32A8.50951,8.50951,0,0,1,432.3011,583.5Z" transform="translate(-281.02165 -210)" fill="#e6e6e6"/><path d="M460.97835,677.5h-46.5v-31h46.5a15.5,15.5,0,0,1,0,31Z" transform="translate(-281.02165 -210)" fill="#ccc"/><path d="M390.97835,689.5h-46.5v-31h46.5a15.5,15.5,0,0,1,0,31Z" transform="translate(-281.02165 -210)" fill="#ccc"/><path d="M437.97835,451.5h-37a3.5,3.5,0,0,1,0-7h37a3.5,3.5,0,0,1,0,7Z" transform="translate(-281.02165 -210)" fill="#fff"/><path d="M437.97835,464h-37a3.5,3.5,0,0,1,0-7h37a3.5,3.5,0,0,1,0,7Z" transform="translate(-281.02165 -210)" fill="#fff"/><path d="M501.02165,690h-219a1,1,0,0,1,0-2h219a1,1,0,1,1,0,2Z" transform="translate(-281.02165 -210)" fill="#3f3d56"/><circle cx="291.95669" cy="184" r="18" fill="#e6e6e6"/><path d="M578.47835,466.5a6.00672,6.00672,0,0,1-6-6v-216a6,6,0,0,1,12,0v216A6.00672,6.00672,0,0,1,578.47835,466.5Z" transform="translate(-281.02165 -210)" fill="#3f3d56"/><path d="M760.6385,240.34c-5.27-4.61005-23.37011-18.96-46.72021-21.58-17.46973-1.95-37.87988,2.66-58.04981,22.84-16.18017,16.18005-31.43994,23.85-45.35986,22.81-14.21045-1.06994-23.66016-11.17-28.03027-17.1a2.44334,2.44334,0,0,0-2.77-.88,2.46966,2.46966,0,0,0-1.73,2.38v74.66a2.50928,2.50928,0,0,0,1.43017,2.26c5.44971,2.58,25.07959,11.15,44.83985,11.15,11.58984,0,23.23974-2.95,32.08007-11.8.08985-.09.16993-.17005.25977-.25,15.66016-15.24,50.18018-12.11005,75.37012-7.13,10.41992,2.06,19.24023,4.43,24.47021,5.95a4.4928,4.4928,0,0,0,5.73975-4.32v-75.6A4.51348,4.51348,0,0,0,760.6385,240.34Z" transform="translate(-281.02165 -210)" fill="#01c5ad"/><circle cx="519.95669" cy="234" r="9" fill="#fff"/><circle cx="503.95669" cy="333" r="9" fill="#fff"/><circle cx="474.95669" cy="265" r="15" fill="#fff"/></svg>
              <label htmlFor="toggle">Informel</label>
              </div>
        <div id="messagesSection">
          {messages?.map(message => (
            <div id="messageDiv" key={message.id}>
              <p>
                <span className='author'>{message.author}</span>
                <span className='date'>{message.prettyCreatedAt}</span><br/>
                <span className='content'>{message.content}</span>
                <hr/>
              </p>

            </div>
          ))}
        </div>
        <div id="sendMessageSection">
          <Input placeholder="Votre message..." value={messageContent} onChange={this.onChange}/><br/><br/>
          <Button onClick={this.onSend} variant="contained" color="primary"
                  style={{width: '100%', color: 'white'}}>
            Envoyer
          </Button>
        </div>
          </div>
      </Grid>
    )
  }
}

export default UnofficialChat
