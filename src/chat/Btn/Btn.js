import './Btn.css'
import users from "../../DB/DB";
import RecordAudio from "./RecordAudio";
import React, { useState } from "react";
import VideoRecord from "./VideoRecord";

function Btn(props) {




    const [srcRec, setSrcRec] = useState('')
    const [srcVid, setSrcVid] = useState('')

    function uploadImg() {
        let img = document.getElementById("img_submit");
        let imgURL = document.getElementById("img_submit").value;
        if (imgURL.length > 0) {
            let fReader = new FileReader()
            fReader.readAsDataURL(img.files[0])
            fReader.onloadend = function (event) {
                var path = event.target.result;
                var d = new Date();
                let date = +String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
                let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
                for (let i = 0; i < users[props.id].chats.length; i++) {
                    if (props.contact === users[props.id].chats[i].contact) {
                        users[props.id].chats[i].lastMessage = "img";
                        users[props.id].chats[i].lastTime = time + ' ' + date;
                        users[props.id].chats[i].text.push({
                            txt: path,
                            time: time + " " + date,
                            isIncoming: 0,
                            type: "img"
                        });
                        props.set(users[props.id].chats[i].text.concat([]));
                        props.setLast(users[props.id].chats.concat([]));
                    }
                }
            }
            document.getElementById("closeButtonImgModal").click();

        }
        img.value = "";
    }

    function uploadVid() {
        let vid = document.getElementById("vid_submit");
        let vidURL = document.getElementById("vid_submit").value;
        if (vidURL.length > 0) {
            let fReader = new FileReader()
            fReader.readAsDataURL(vid.files[0])
            fReader.onloadend = function (event) {
                var path = event.target.result;
                console.log(path);

                var d = new Date();
                let date = +String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
                let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
                for (let i = 0; i < users[props.id].chats.length; i++) {
                    if (props.contact === users[props.id].chats[i].contact) {
                        users[props.id].chats[i].lastMessage = "video";
                        users[props.id].chats[i].lastTime = time + ' ' + date;
                        users[props.id].chats[i].text.push({
                            txt: path,
                            time: time + " " + date,
                            isIncoming: 0,
                            type: "video"
                        });
                        props.set(users[props.id].chats[i].text.concat([]));
                        props.setLast(users[props.id].chats.concat([]));
                    }
                }
            }
            document.getElementById("closeVidModal").click();

        }
        vid.value = "";
    }

    function uploadRecord() {
        let audio = document.getElementById("audio_submit");
        let audioURL = document.getElementById("audio_submit").value;
        if (audioURL.length > 0) {
            let fReader = new FileReader()
            fReader.readAsDataURL(audio.files[0])
            fReader.onloadend = function (event) {
                var path = event.target.result;

                var d = new Date();
                let date = +String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
                let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
                for (let i = 0; i < users[props.id].chats.length; i++) {
                    if (props.contact === users[props.id].chats[i].contact) {
                        users[props.id].chats[i].lastMessage = "audio";
                        users[props.id].chats[i].lastTime = time + ' ' + date;
                        users[props.id].chats[i].text.push({
                            txt: path,
                            time: time + " " + date,
                            isIncoming: 0,
                            type: "audio"
                        });
                        props.set(users[props.id].chats[i].text.concat([]));
                        props.setLast(users[props.id].chats.concat([]));
                    }
                }
            }
            document.getElementById("closeRecordModal").click();

        }
        audio.value = "";
    }


    function send(type) {
        let currentText = document.getElementById("current-text").value;
        if (currentText === '') {
            return;
        }
        var d = new Date();
        let date = +String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
        let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        for (let i = 0; i < users[props.id].chats.length; i++) {
            if (props.contact === users[props.id].chats[i].contact) {
                users[props.id].chats[i].lastMessage = currentText;
                users[props.id].chats[i].lastTime = time + ' ' + date;
                users[props.id].chats[i].text.push({
                    txt: currentText,
                    time: time + " " + date,
                    isIncoming: 0,
                    type: type
                });
                props.set(users[props.id].chats[i].text.concat([]));
                props.setLast(users[props.id].chats.concat([]));

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
        let date = +String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
        let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        for (let i = 0; i < users[props.id].chats.length; i++) {
            if (props.contact === users[props.id].chats[i].contact) {
                users[props.id].chats[i].lastMessage = "audio";
                users[props.id].chats[i].lastTime = time + ' ' + date;
                users[props.id].chats[i].text.push({
                    txt: srcRec,
                    time: time + " " + date,
                    isIncoming: 0,
                    type: "audio"
                });
                props.set(users[props.id].chats[i].text.concat([]));
                props.setLast(users[props.id].chats.concat([]));
                document.getElementById("closeRecordModal").click()
            }
        }
        setSrcRec("");

    }

    function sendVid() {// let currentText = document.getElementById("audioMes").value;
        if (srcVid === '') {
            return;
        }
        var d = new Date();
        let date = +String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getFullYear()).slice(2, 4);
        let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        for (let i = 0; i < users[props.id].chats.length; i++) {
            if (props.contact === users[props.id].chats[i].contact) {
                users[props.id].chats[i].lastMessage = "video";
                users[props.id].chats[i].lastTime = time + ' ' + date;
                users[props.id].chats[i].text.push({
                    txt: srcVid,
                    time: time + " " + date,
                    isIncoming: 0,
                    type: "video"
                });
                props.set(users[props.id].chats[i].text.concat([]));
                props.setLast(users[props.id].chats.concat([]));

            }
        }
        setSrcVid("");

    }

    
    if(props.contact == ''){
        return(
        <div className='bottom-bar' style={{backgroundColor: "rgb(194 190 190 / 42%)"}}>
            <div className="input-group">
            </div>
        </div>
        );
    }


    return (


        <div className='bottom-bar' style={{backgroundColor: "rgb(194 190 190 / 42%)"}}>
            <div className="input-group">
                <button style={{border:"0px",padding: "0px"}} className="btn  " type="button"
                        aria-expanded="false"> <div className="btn-group">
                    <button type="button" id="actual-btn" className="btn myfunction btn-prim "
                            data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-paperclip" viewBox="0 0 16 16">
                            <path
                                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                        </svg>
                    </button>
                    <div className="dropdown-menu">
                        {/*  pic icon*/}
                        <button input type="file" accept="image/*" className="fs-6 dropdown-item item"
                                data-toggle="modal"
                                data-target="#img-modal"> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                               height="16"
                                                               fill="currentColor" className="bi bi-image-fill"
                                                               viewBox="0 0 16 16">
                            <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0

                                            1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0
                                             0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3
                                             .71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0
                                             1.5 1.5 0 0 0 3 0z"/>

                        </svg>
                        </button>

                        {/*  record icon*/}
                        <button className="dropdown-item rec" href="#" data-toggle="modal"
                                data-target="#record-modal"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16"
                                                                 fill="currentColor" className="bi bi-mic-fill"
                                                                 viewBox="0 0 16 16">
                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/><path
                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5
                                    4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        </button>


                        {/*  video icon*/}
                        <button className="dropdown-item " href="#" data-toggle="modal"
                                data-target="#vid-modal"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                              height="16"
                                                              fill="currentColor"
                                                              className="bi bi-camera-reels-fill"
                                                              viewBox="0 0 16 16">
                            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            <path
                                d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0
              1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                </button>

                <input id="current-text" type="text" style={{borderRadius:"50px"}} className="form-control" aria-label="Text input with 2 dropdown buttons"/>
                <button style={{backgroundColor:"transparent", border:"0px"}} onClick={()=>send("txt")}>
                    <i className='fa fa-send'></i>
                </button>


            </div>
            <div className="type_msg">
                <div className="input_msg_write">
                     <span>
                         <span>
                         <div className="input-group">



                            <span>
                             </span>
                         </div>
                     </span>
                 </span>

                        
            </div>





            <div className="modal fade" id="record-modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header" style={{ padding: "3px" }}>
                            <h3 className="modal-title" style={{ padding: "5px" }}>Rec</h3>
                            <button id="closeRecordModal" type="button" className="close" style={{
                                padding: "1px", border: "0",
                                backgroundColor: "transparent"
                            }} data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body" style={{ padding: "3px" }}>
                            <div id="audioMes">
                                <RecordAudio srcRec={srcRec} setSrcRec={setSrcRec}></RecordAudio>
                                <input type="file" accept="audio/*" id="audio_submit" name="myfile"
                                    onChange={uploadRecord} />

                            </div>
                        </div>

                        <div className="modal-footer" style={{ padding: "3px" }}>
                            <button type="button" className="btn btn-success" onClick={sendAudio}>Send</button>


                        </div>

                    </div>
                </div>
            </div>


            <div className="modal fade" id="vid-modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header" style={{ padding: "3px" }}>
                            <h3 className="modal-title" style={{ padding: "5px" }}>Video</h3>
                            <button id="closeVidModal" type="button" className="close" style={{
                                padding: "1px", border: "0",
                                backgroundColor: "transparent"
                            }} data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body" style={{ padding: "3px" }}>
                            <div id="vidMes">
                                {/*<VideoRecord srcVid={srcVid} setSrcRec={setSrcVid}></VideoRecord>*/}
                                <input type="file" accept="video/*" id="vid_submit" name="myfile" onChange={uploadVid} />

                            </div>
                        </div>

                        <div className="modal-footer" style={{ padding: "3px" }}>
                            <button type="button" className="btn btn-success" onClick={sendVid}>Send</button>

                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="img-modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header" style={{ padding: "3px" }}>
                            <h3 className="modal-title" style={{ padding: "5px" }}>Picture</h3>
                            <button type="button" className="close" id="closeButtonImgModal" style={{
                                padding: "1px", border: "0",
                                backgroundColor: "transparent"
                            }} data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body" style={{ padding: "3px" }}>
                            <input type="file" accept="image/*" id="img_submit" name="myfile" onChange={uploadImg} />
                        </div>

                        <div className="modal-footer" style={{ padding: "3px" }}>

                            <button type="button" className="btn btn-success" onClick={sendVid}>Send</button>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

    );
}

export default Btn;