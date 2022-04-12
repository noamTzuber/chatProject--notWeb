import './Btn.css'
import users from "../../DB/DB";
import RecordAudio from "./RecordAudio";
import React, {useState} from "react";
import VideoRecord from "./VideoRecord";

function Btn(props) {


    function getPic(){

    }
    const [srcRec, setSrcRec] = useState('')
    const [srcVid, setSrcVid] = useState('')


    function send(type) {
        let currentText = document.getElementById("current-text").value;
        if (currentText === '') {
            return;
        }
        var d = new Date();
        let date = + String(d.getDate()).padStart(2, '0')+ '.' +String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
        let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        for (let i = 0; i < users[0].chats.length; i++) {
            if (props.contact === users[0].chats[i].contact) {
                users[0].chats[i].lastMessage=currentText;
                users[0].chats[i].lastTime=time+' '+date;
                users[0].chats[i].text.push({txt: currentText, time: time +" "+ date, isIncoming: 0,type:type});
                props.set(users[0].chats[i].text.concat([]));
                props.setLast(users[0].chats.concat([]));

            }
        }
        document.getElementById('current-text').value = '';

    }
    function sendAudio() {
        // let currentText = document.getElementById("audioMes").value;
        if (srcRec === '') {
            return;
        }
        var d = new Date();
        let date = + String(d.getDate()).padStart(2, '0')+ '.' +String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
        let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        for (let i = 0; i < users[0].chats.length; i++) {
            if (props.contact === users[0].chats[i].contact) {
                users[0].chats[i].lastMessage=srcRec;
                users[0].chats[i].lastTime=time+' '+date;
                users[0].chats[i].text.push({txt: srcRec, time: time +" "+ date, isIncoming: 0,type:"audio"});
                props.set(users[0].chats[i].text.concat([]));
                props.setLast(users[0].chats.concat([]));

            }
        }
        setSrcRec("");

    }
    function sendVid() {// let currentText = document.getElementById("audioMes").value;
        if (srcVid === '') {
            return;
        }
        var d = new Date();
        let date = + String(d.getDate()).padStart(2, '0')+ '.' +String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
        let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        for (let i = 0; i < users[0].chats.length; i++) {
            if (props.contact === users[0].chats[i].contact) {
                users[0].chats[i].lastMessage=srcVid;
                users[0].chats[i].lastTime=time+' '+date;
                users[0].chats[i].text.push({txt: srcVid, time: time +" "+ date, isIncoming: 0,type:"video"});
                props.set(users[0].chats[i].text.concat([]));
                props.setLast(users[0].chats.concat([]));

            }
        }
        setSrcVid("");

    }



    return (

        <div className='bottom-bar'>
            <div className="type_msg">
                <div className="input_msg_write">
                    <input id="current-text" type="text" className="write_msg" placeholder="Type a message"/>
                    <span>
                    <button onClick={() => {send("txt")}} className="msg_send_btn" type="button">
                        <i className="fa fa-paper-plane-o" style={{color:"black"}} aria-hidden="true"></i></button>
                    <span>
                         <div className="btn-group">
                            <button type="button" id="actual-btn" className="btn myfunction btn-prim " data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false"><i className="fa fa-paperclip" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown-menu">
                            {/*  pic icon*/}
                               <button input type="file" accept="image/*" className="fs-6 dropdown-item item" >
                               <div>
                                   <div className="upload-btn-wrapper">
                                      <button className="btn-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                       fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0
                                            1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0
                                             0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3
                                             .71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0
                                             1.5 1.5 0 0 0 3 0z"/>
                                        </svg>
                                      </button>
                                        <input type="file" accept="image/*" id="img_submit" name="myfile" onChange={()=>getPic()}/>
                                   </div>
                               </div>
                               </button>
                                 {/*  record icon*/}
                                <button  className="dropdown-item "  href="#" data-toggle="modal"
                                    data-target="#record-modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/><path
                                    d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5
                                    4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                </button>


      {/*  video icon*/}
                                <button  className="dropdown-item "  href="#" data-toggle="modal"
                                         data-target="#vid-modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
           fill="currentColor" className="bi bi-camera-reels-fill" viewBox="0 0 16 16">
          <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          <path
              d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0
              1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
            </svg>
    </button>
        </div>
</div>
                        </span>
                         </span>
                    <span>





                         </span>
                </div>
            </div>


            <div className="modal fade" id="record-modal" >
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header" style={{padding:"3px"}}>
                            <h3 className="modal-title" style={{padding:"5px"}}>Rec</h3>
                            <button type="button" className="close"  style={{padding:"1px",border:"0",
                                backgroundColor: "transparent"}} data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body" style={{padding:"3px"}}>
                            <div id="audioMes"  >
                            <RecordAudio srcRec={srcRec} setSrcRec={setSrcRec}></RecordAudio>
                            </div>
                        </div>

                        <div className="modal-footer" style={{padding:"3px"}}>
                            <button type="button" className="btn btn-success" onClick={ sendAudio}>Send</button>


                        </div>

                    </div>
                </div>
            </div>



            <div className="modal fade" id="vid-modal" >
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header" style={{padding:"3px"}}>
                            <h3 className="modal-title" style={{padding:"5px"}}>Rec</h3>
                            <button type="button" className="close"  style={{padding:"1px",border:"0",
                                backgroundColor: "transparent"}} data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body" style={{padding:"3px"}}>
                            <div id="vidMes"  >
                                <VideoRecord srcVid={srcVid} setSrcRec={setSrcVid}></VideoRecord>
                            </div>
                        </div>

                        <div className="modal-footer" style={{padding:"3px"}}>
                            <button type="button" className="btn btn-success" onClick={ sendVid}>Send</button>

                        </div>

                    </div>
                </div>
            </div>

        </div>



    );
}

export default Btn;