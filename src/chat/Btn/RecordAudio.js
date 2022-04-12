import {useState} from "react";

function RecordAudio(props) {


    var recorder;
    const getAudio = async () => {
        let chunks = [];


        //wait for the stream promise to resolve
        let stream = await navigator.mediaDevices.getUserMedia({audio: true});
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
            chunks.push(e.data);

        };
        recorder.onstop = (e) => {
            var blob = new Blob(chunks, {type: "audio/webm"});
            let testAudioRecord = URL.createObjectURL(blob);
            props.setSrcRec(testAudioRecord);
            console.log(testAudioRecord);
        }

        recorder.start();

    };
    return (
        <div>
            <audio id="audioMes" controls  style={{marginLeft: "19%",padding:"0px"}} src={props.srcRec}></audio>
<div>
                    <span >
                    <button className="stopBtRec btn-danger " style={{borderRadius:" 0.25rem",border:"0" ,marginLeft:"23%"}} onClick={() => {
                        recorder.stop();
                    }}>stop
                    </button>
                </span>
                    <span >
                    <button className="startBtRec btn-success " style={{borderRadius:" 0.25rem",border:"0",marginLeft:"3%"}}  onClick={getAudio}>start</button>
                </span>
</div>

        </div>
            );
            }

            export default RecordAudio;