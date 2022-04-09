import './SummaryConversation.css'
import users from "../../DB/DB";

// {name, lastTime, lastMessage, setCurrentConversation}
function SummaryConversation(props) {
    var showConversation = function (contact) {
        for (let i = 0; i < users[0].chats.length; i++) {
            if (contact === users[0].chats[i].contact) {
                props.setCurrentConversation(users[0].chats[i]);
            }
        }
    }
    //const profilePic = require("../../DB/profilePictures/".concat("", users[0].chats[props.key].img));
    return (
        <div>
            <div onClick={() => {
                showConversation(props.contact)
            }}>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex  justify-content-between">

                        <img id="contactPic" src={require("../../DB/profilePictures/".concat("",users[0].chats[0].img))}/>
                        <h6 className="mb-1">{props.contact}</h6>
                        <small className="text-muted">{props.lastTime}</small>

                    </div>
                    <small className="text-muted" id="slast-ma" style={{textOverflow: "ellipsis \" [..]\";"}}>
                        {props.lastMessage}</small>
                </a>
            </div>

        </div>

    )
        ;
}

export default SummaryConversation