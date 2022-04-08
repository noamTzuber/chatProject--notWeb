import './Btn.css'
import users from "../../DB";

function Btn(props) {

    function openFunc() {
        return 1;
    }

    function send() {
        let currentText = document.getElementById("current-text").value;
        if (currentText === '') {
            return;
        }
        let d = new Date();
        let time = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        let date = d.getDay() + '.' + d.getMonth() + '.' + d.getFullYear();
        for (let i = 0; i < users[0].chats.length; i++) {
            if (props.contact === users[0].chats[i].contact) {
                users[0].chats[i].text.push({txt: currentText, time: time + date, isIncoming: 0});
                props.set(users[0].chats[i].text.concat([]));

            }
        }
        document.getElementById('current-text').value = '';

    }



    return (

        <div className='bottom-bar'>
            <div className="type_msg">
                <div className="input_msg_write">
                    <input id="current-text" type="text" className="write_msg" placeholder="Type a message"/>

                    <span>
                    <button onClick={() => {
                        send(props.contact)
                    }} className="msg_send_btn" type="button">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        <span>
                             <div className="btn-group">
  <button type="button" className="btn myfunction btn-prim " data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
    <i className="fa fa-paperclip" aria-hidden="true"></i>

  </button>
  <div className="dropdown-menu">
      {/*  pic icon*/}
    <a className="dropdown-item item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
  <path
      d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
</svg></a>
      {/*  record icon*/}
    <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/><path
      d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5
       4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
</svg></a>

      {/*  video icon*/}
    <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
   fill="currentColor" className="bi bi-camera-reels-fill" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  <path
      d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0
      1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
</svg> </a>
      {/*  gps icon*/}
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
   fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg></a>
  </div>
</div>
                        </span>
                         </span>
                    <span>
                    {/*<button className="functionality" type="button">*/}
                    {/* <i className="fa fa-paperclip fa" onClick={() => {*/}
                    {/*     openFunc()}}></i></button>*/}
                    {/*   */}




                         </span>
                </div>
            </div>
        </div>
    );
}

export default Btn;
