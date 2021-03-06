import Contact from "../Contact/Contact";
import Btn from "../Btn/Btn";
import users from "../../DB/DB";
import Outgoing from "../message/Outgoing";
import IncomingMessage from "../message/IncomingMassege";

function RightSide(props) {


    return (
        <div className="right-container" >
            <div className="section">
                <div className="content">
                    <Contact name={props.currentConversation.nickName} img = {props.currentConversation.img} />
                </div>
                <div className='scrollable-content content' style={{backgroundColor: "rgb(194 190 190 / 42%)"}}>

                    {props.currentConversation.text.map((src, key ) => {

                        if (src.isIncoming === 0) {
                            return <Outgoing {...src} key={key}/>
                        }
                        return <IncomingMessage {...src} key={key}/>
                    })
                    }
                </div>
            </div>
            <div className="content">
                <Btn setLast ={props.setContact} set={props.setMessages} contact={props.currentConversation.contact} id = {props.id}/>
            </div>
        </div>
    )
}

export default RightSide;