import './SummaryConversation.css'
import users from "../../DB";


function SummaryConversation({name, lastTime, lastMessage, setCurrentConversation}) {

    const showConversation = function (name){

        setCurrentConversation('');
    }
    return (
        <div >
            <div>
                <a href="#" className="list-group-item list-group-item-action" onClick={showConversation(name)}>
                    <div className="d-flex w-100 justify-content-between" >
                        <h7 className="mb-1">{name}</h7>
                        <small className="text-muted">{lastTime}</small>
                    </div>

                    <small className="text-muted" id="slast-ma">
                        {lastMessage}</small>
                </a>
            </div>

        </div>

)
;
}

export default SummaryConversation