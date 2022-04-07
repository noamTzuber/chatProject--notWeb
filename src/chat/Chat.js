import './Chat.css'
import Conversation from './conversation/Conversation';
import SummaryConversation from './summaryConversation/SummaryConversation';
import UserData from "./userData/UserData";
import Btn from "./Btn/Btn";
import IncomingMessage from "./message/IncomingMassege";
import Outgoing from "./message/Outgoing";
import Contact from "./Contact/Contact";
import DB from "../DB";
import users from "../DB";
import {useState} from "react";
import RightSide from "./rightSide/RightSide";

function Chat() {

    const [currentTalk, setCurrentTalk]= useState([])

    const userList = users.map((user, key) => {
        return < SummaryConversation{...user} setCurrentConversation={setCurrentTalk}  key={key}/>
    });

    return (
        <div className='chatbox'>

            <div className="col-3">
                <div className="container">
                    <div className="section" id="left-section">
                        <div className="content">
                            <UserData/>
                        </div>
                        <div className="scrollable-content" id="summary-conversation"
                             style={{marginTop: "1%", backgroundColor: "rgb(194 190 190 / 42%)"}}>
                            {userList}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-9">
                <RightSide currentConversation = {currentTalk}/>
            </div>

        </div>


    );
}

export default Chat