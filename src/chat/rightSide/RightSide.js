import Contact from "../Contact/Contact";
import Btn from "../Btn/Btn";
import users from "../../DB";
import Outgoing from "../message/Outgoing";
import IncomingMessage from "../message/IncomingMassege";

function RightSide(currentConversation) {

    const messageList = users[1].chats[0].text.map((src, key ) => {
        if (src.isIncoming === 0) {
            return <Outgoing {...src} key={key}/>
        }
        return <IncomingMessage {...src} key={key}/>

    });

    return (
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
    )
}

export default RightSide;