import './IncomingMessage.css'

function IncomingMessage({txt,timeAndDate}) {

    var d = new Date();
    return (

        <div class="incoming">
            {txt}
            <div>
                <small className="text-muted" id="slast-ma">
                    {timeAndDate}</small>
            </div>
        </div>
    );
}
export default IncomingMessage