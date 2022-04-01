import './Btn.css'

function Btn() {
    return (

        <div className='bottom-bar'>
            <div className="type_msg">
                <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message"/>
                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o"
                                                                      aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
}
export default Btn