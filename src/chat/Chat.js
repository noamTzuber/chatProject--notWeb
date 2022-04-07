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

function Chat() {

    const userList = users.map((user, key) => {
        return < SummaryConversation{...user} key={key}/>
    });
    const messageList = users[1].chats[0].text.map((src, key) => {
        if (src.isIncoming === 0) {
            return <Outgoing {...src} key={key}/>
        }

        return <IncomingMessage {...src} key={key}/>

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
                <div className="right-container">
                    <div className="section">
                        <div className="content">
                            <Contact/>
                        </div>
                        <div className='scrollable-content content' style={{backgroundColor: "rgb(194 190 190 / 42%)"}}>
                            {messageList}
                        </div>
                    </div>
                    <div className="content">
                        <Btn/>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Chat