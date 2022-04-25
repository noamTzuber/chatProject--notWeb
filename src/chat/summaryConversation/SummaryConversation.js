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
                        <div className="col-2">
                            <div style={{backgroundImage: `url(${pic})`, backgroundSize:"cover", width:"50px", height:"50px", borderRadius:"50%", clipPath: "circle()", backgroundPosition: "center center", marginRight:"100%"}}></div>
                        </div>
                        <div className="col-10" style={{paddingLeft:"5%"}}>
                            <div>
                                <div className="row">
                                    <div className="col-8">
                                        <span style={{fontSize:"120%", marginLeft:"5px"}}>{props.nickName}</span>
                                    </div>
                                    <div className="col-4">
                                        <span className="dateOnSummery" >{props.lastTime}</span>
                                    </div>
                                    </div>
                            </div>

                            <div>
                                <span style={{color:"darkgray" ,marginLeft:"5px"}}>{shortLastMessage()}</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryConversation