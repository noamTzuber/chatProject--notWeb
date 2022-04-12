import './UserData.css'
import React from "react";
import users from "../../DB/DB";


function UserData(props) {



    const profilePic = require("../../DB/profilePictures/".concat("", users[props.id].profilePic));

    var nickname = users[props.id].nickName;

    function addUser() {
        document.getElementById("addUserErrorMessage").innerHTML = "";


        var contactName = document.getElementById("inputAddUser").value;
        document.getElementById("inputAddUser").value = '';
        let exist = false;
        let onMyContacts = false;

        for(let j =0; j< users[props.id].chats.length;j++){
            if(users[props.id].chats[j].contact === contactName){
                onMyContacts = true;
            }
        }

        for(var i = 0; i < users.length;i++){
            if (users[i].name === contactName){
                exist = true;
                break
            }
        }


        if(exist && !onMyContacts && contactName !== users[props.id].name){
            users[props.id].chats.push({contact: contactName, img: users[i].profilePic, lastMessage: "", lastTime: "", text: []})
            props.setContacts(users[props.id].chats.concat([]))
            document.getElementById("closeButtonModal").onclick();

        } else{
            document.getElementById("addUserErrorMessage").innerHTML = "Invalid UserName";
        }




    }



    return (
        <div className="userData">
            <div style={{backgroundImage: `url(${profilePic})`, backgroundSize:"cover", width:"70px", height:"70px", clipPath: "circle()", backgroundPosition: "center center", marginLeft:"3%"}}></div>
            {/*<img src={profilePic} style={{width: "17%", borderRadius: "50%", clipPath: "circle()"}}/>*/}

            <span className="position-absolute top-50 start-50 translate-middle">{nickname}</span>

            <button id="addConversation" type="button" className="btn btn-outline-light" data-toggle="modal"
                    data-target="#myModal" style={{position:"absolute", top:"20%", right:"0%"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fillRule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </button>


            {/*modal*/}
            <div className="modal fade" id="myModal" >
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h3 className="modal-title">Add user</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input id="inputAddUser" type="text" className="form-control" placeholder="username"
                                       aria-label="username" aria-describedby="button-addon2"/>
                            </div>
                            <div id = "addUserErrorMessage" style={{color :"red"}}></div>
                        </div>

                        <div className="modal-footer">

                            <button id = "closeButtonModal" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={() => {
                                addUser()
                            }}>Add User</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserData