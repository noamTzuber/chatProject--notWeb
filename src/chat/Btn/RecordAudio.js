import {useState} from "react";

function RecordAudio() {
    const [srcRec, setSrcRec] = useState('')

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
            setSrcRec(testAudioRecord);
            console.log(testAudioRecord);
        }

        recorder.start();


    };
    return (
        <div>
            <audio controls src = {srcRec}></audio>
            <button onClick={()=>{
                recorder.stop();
            }}>stop</button>
            <button onClick={getAudio}>start</button>

        </div>
    );
}

export default RecordAudio;