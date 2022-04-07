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

    const [currentConversation, setCurrentConversation]= useState('')

    const userList = users.map((user, key) => {
        return < SummaryConversation{...user} key={key} setCurrentConversation={setCurrentConversation} />
    });

    return (
        <div className='chatbox'>

            <div class="col-3">
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

            <div class="col-9">
                <RightSide currentConversation = {currentConversation}/>
            </div>

        </div>


    );
}

export default Chat