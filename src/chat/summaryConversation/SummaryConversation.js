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

    var pic = require("../../DB/profilePictures/".concat("",users[0].chats[props.num].img));
    return (
        <div>
            <div onClick={() => {
                showConversation(props.contact)
            }}>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col-3">

                                <div style={{backgroundImage: `url(${pic})`, backgroundSize:"cover", width:"50px", height:"50px", borderRadius:"50%", clipPath: "circle()", backgroundPosition: "center center"}}></div>
                                {/*<img className="pic" id="contactPic" src={require("../../DB/profilePictures/".concat("",users[0].chats[props.num].img))}/>*/}
                        </div>
                        <div className="col-9">

                            <div>
                                <span>{props.contact}</span>
                                <span  style={{fontSize:"70%", color:"black !important" }}>{props.lastTime}</span>
                            </div>

                            <div>
                                <span>{props.lastMessage}</span>
                            </div>

                        </div>

                    </div>





                    {/*<div className="d-flex  justify-content-between">*/}

                    {/*    <img className="pic" id="contactPic" src={require("../../DB/profilePictures/".concat("",users[0].chats[props.num].img))}/>*/}
                    {/*    <h6 className="mb-1">{props.contact}</h6>*/}
                    {/*    <small  style={{fontSize:"70%", color:"black !important" }}>{props.lastTime}</small>*/}

                    {/*</div>*/}
                    {/*<small className="text-muted" id="slast-ma" style={{textOverflow: "ellipsis \" [..]\";"}}>*/}
                    {/*    {props.lastMessage}</small>*/}
                </a>
            </div>

        </div>

    )
        ;
}

export default SummaryConversation