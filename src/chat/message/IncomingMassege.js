import './IncomingMessage.css'

function IncomingMessage({txt,time}) {

    var d = new Date();
    return (
        <div className="incoming">
            {txt}
            <div>
                <small style={{fontSize:"70%"}} className="text-muted" id="slast-ma">
                    {time}</small>
            </div>
        </div>
    );
}
export default IncomingMessage