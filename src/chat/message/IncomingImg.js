import './IncomingMessage.css'

function IncomingImg({txt,time,type}) {

    var d = new Date();
    if (type === "txt") {
        return (
            <img src={require(".")} className="incoming">
                {txt}
                <div>
                    <small style={{fontSize: "70%"}} className="text-muted" id="slast-ma">
                        {time}</small>
                </div>
            </img>
        );
    }
}
export default IncomingImg