import './Btn.css'
import users from "../../DB";

function Btn(props) {
    function send() {
        let currentText = document.getElementById("current-text").value;
        if(currentText===''){
            return;
        }
        let d = new Date();
        let time= (d.getHours()<10?'0':'')+d.getHours()+':'+(d.getMinutes()<10?'0':'')+d.getMinutes();
        let date= d.getDay()+'.'+d.getMonth()+'.'+d.getFullYear();
        for (let i = 0; i < users[0].chats.length; i++) {
            if (props.contact === users[0].chats[i].contact) {
                users[0].chats[i].text.push({txt: currentText,time:time+date ,isIncoming: 0});
                props.set( users[0].chats[i].text.concat([]));

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
                    <button onClick={() => {send(props.contact)}} className="msg_send_btn" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-send" viewBox="0 0 16 16">
                            <path
                                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg><i className="fa fa-paper-plane-o"
                                                                      aria-hidden="true"></i></button>
                         </span>
                    <span>
                    <button onClick={() => {send(props.contact)}} className="msg_send_btn" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-send" viewBox="0 0 16 16">
                            <path
                                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg><i className="fa fa-paper-plane-o"
                                 aria-hidden="true"></i></button>
                         </span>


                </div>
            </div>
        </div>
    );
}
export default Btn;