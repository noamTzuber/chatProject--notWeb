import './SummaryConversation.css'
import users from "../../DB/DB";

// {name, lastTime, lastMessage, setCurrentConversation}
function SummaryConversation(props) {
    function showBottomBar(){

    }
    var showConversation = function (contact) {
        for (let i = 0; i < users[props.id].chats.length; i++) {
            if (contact === users[props.id].chats[i].contact) {
                props.setCurrentConversation(users[props.id].chats[i]);
            }
        }
        showBottomBar();
    }
    //const profilePic = require("../../DB/profilePictures/".concat("", users[0].chats[props.key].img));
    var lastMessage;
    function shortLastMessage(){
        let maxSize = 25;
        if(props.lastMessage.length < maxSize){
            return props.lastMessage;
        }
        return props.lastMessage.substring(0,maxSize).concat('',"...");

    }


    var pic = require("../../DB/profilePictures/".concat("",users[props.id].chats[props.num].img));
    return (
        <div>
            <div onClick={() => {
                showConversation(props.contact)
            }}>
                <div className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col-3">
                            <div style={{backgroundImage: `url(${pic})`, backgroundSize:"cover", width:"50px", height:"50px", borderRadius:"50%", clipPath: "circle()", backgroundPosition: "center center"}}></div>
                        </div>
                        <div className="col-9">

                            <div>
                                <span style={{fontSize:"120%"}}>{props.contact}</span>
                                <span className="dateOnSummery">{props.lastTime}</span>
                            </div>

                            <div>
                                <span style={{color:"darkgray"}}>{shortLastMessage()}</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryConversation