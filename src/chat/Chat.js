import './Chat.css'
import Conversation from './conversation/Conversation';
import SummaryConversation from './summaryConversation/SummaryConversation';
import UserData from "./userData/UserData";
import Btn from "./Btn/Btn";
import IncomingMessage from "./message/IncomingMassege";
import Outgoing from "./message/Outgoing";
import Contact from "./Contact/Contact";
import DB from "../DB/DB";
import users from "../DB/DB";
import {useState} from "react";
import RightSide from "./rightSide/RightSide";

function Chat() {
    function getIndex(){
        const findIdEqualNum = /id=[\d]+/;
        const findNum = /[\d]+/;
        let semiResult = document.URL.match(findIdEqualNum)[0];
        return semiResult.match(findNum)[0];
    }
    const [currentTalk, setCurrentTalk]= useState({contact:'',lastMessage:'',lastTime:'',text:[]})
    const [currentMessages, setCurrentMessages]= useState([])

    const userList = users[0].chats.map((user, key) => {
        return < SummaryConversation{...user} setCurrentConversation={setCurrentTalk}  key={key}/>
    });


    var id = getIndex();

    return (
        <div className='chatbox'>

            <div className="col-3">
                <div className="container">
                    <div className="section" id="left-section">
                        <div className="content">
                            <UserData id={id}/>
                        </div>
                        <div className="scrollable-content" id="summary-conversation"
                             style={{marginTop: "1%", backgroundColor: "rgb(194 190 190 / 42%)"}}>
                            {userList}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-9">
                <RightSide currentConversation = {currentTalk} setMessages ={setCurrentMessages}/>
            </div>

        </div>


    );
}

export default Chat