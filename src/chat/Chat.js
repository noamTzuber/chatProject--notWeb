import './Chat.css'
import Conversation from './conversation/Conversation';
import SummaryConversation from './summaryConversation/SummaryConversation';
import UserData from "./userData/UserData";
import Btn from "./Btn/Btn";
import IncomingMessage from "./message/IncomingMassege";
import Outgoing from "./message/Outgoing";
import Contact from "./Contact/Contact";

function Chat() {
    return (


        <div className='chatbox'>

            <div class="col-3">
                <div className="container">
                    <div className="section" id="left-section">
                        <div className="content">
                            <UserData/>
                        </div>
                        <div className="scrollable-content" id="summary-conversation">
                            <SummaryConversation/>
                            <SummaryConversation/>
                            <SummaryConversation/>
                            <SummaryConversation/>
                            <SummaryConversation/>
                            <SummaryConversation/>
                            <SummaryConversation/>
                            <SummaryConversation/>
                            <SummaryConversation/>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <div className="left-container">
                    <div className="section">
                        <div className="content">
                            <Contact/>
                        </div>

                        <div className='scrollable-content content '>
                            <Conversation/>
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