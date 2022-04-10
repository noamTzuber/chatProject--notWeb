import './IncomingMessage.css'

function IncomingImg({txt,time}) {

    var d = new Date();
    return (
        <img src={require(".")} className="incoming">
            {txt}
            <div>
                <small style={{fontSize:"70%"}} className="text-muted" id="slast-ma">
                    {time}</small>
            </div>
        </img>
    );
}
export default IncomingImg