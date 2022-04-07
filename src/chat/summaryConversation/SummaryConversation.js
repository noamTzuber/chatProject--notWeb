import './SummaryConversation.css'



function SummaryConversation({name, time, lastMessage}) {
    return (
        <div>
            <div>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h7 className="mb-1">{name}</h7>
                        <small className="text-muted">{time}</small>
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