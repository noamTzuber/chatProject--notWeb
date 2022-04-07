import Contact from "../Contact/Contact";
import Btn from "../Btn/Btn";
import users from "../../DB";
import Outgoing from "../message/Outgoing";
import IncomingMessage from "../message/IncomingMassege";

function RightSide(props) {


    // const messageList = props.currentConversation.map((src, key ) => {
    //     if (src.isIncoming === 0) {
    //         return <Outgoing {...src} key={key}/>
    //     }
    //     return <IncomingMessage {...src} key={key}/>
    //
    // });

    return (
        <div className="right-container">
            <div className="section">
                <div className="content">
                    <Contact/>
                </div>
                <div className='scrollable-content content' style={{backgroundColor: "rgb(194 190 190 / 42%)"}}>
                    {console.log(props.currentConversation)}
                    {props.currentConversation.map((src, key ) => {
                        if (src.isIncoming === 0) {
                            return <Outgoing {...src} key={key}/>
                        }
                        return <IncomingMessage {...src} key={key}/>
                    })
                    }
                </div>
            </div>
            <div className="content">
                <Btn/>
            </div>
        </div>
    )
}

export default RightSide;