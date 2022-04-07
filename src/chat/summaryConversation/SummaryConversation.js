import './SummaryConversation.css'
import users from "../../DB";

// {name, lastTime, lastMessage, setCurrentConversation}
function SummaryConversation(props) {

    var showConversation = function (name){
        console.log(users[1].chats[1].text);
        props.setCurrentConversation(users[1].chats[1].text);
    }
    return (
        <div >
            <div onClick={() => {showConversation(props.name)}}>
                <a href="#" className="list-group-item list-group-item-action" >
                    <div className="d-flex w-100 justify-content-between" >
                        <h6 className="mb-1">{props.name}</h6>
                        <small className="text-muted">{props.lastTime}</small>
                    </div>

                    <small className="text-muted" id="slast-ma">
                        {props.lastMessage}</small>
                </a>
            </div>

        </div>

)
;
}

export default SummaryConversation