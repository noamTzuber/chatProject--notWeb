import './IncomingMessage.css'

function IncomingMessage({txt,time, type}) {

    if(type==="img") {

        return (
            <div className="IncomingMessage">
                <img style={{width: "-webkit-fill-available"}} controls src={txt}/>
                <div>
                    <small style={{fontSize: "70%"}} className="text-muted" id="slast-ma">
                        {time}</small>
                </div>
            </div>
        );
    }


    if(type==="txt")
    {
    return (
            <div className="IncomingMessage" style={{wordBreak:"break-all"}}>
                {txt}
                <div>
                    <small style={{fontSize: "70%"}} className="text-muted" id="slast-ma">
                        {time}</small>
                </div>
            </div>
    );
        }
    if(type==="audio") {

        return (
            <div className="IncomingMessage">
                <audio style={{width: "-webkit-fill-available"}} controls src={txt}/>
                <div>
                    <small style={{fontSize: "70%"}} className="text-muted" id="slast-ma">
                        {time}</small>
                </div>
            </div>
        );
    }
        if(type==="video") {

            return (
                <div className="IncomingMessage">
                    <video style={{width: "-webkit-fill-available"}} controls src={txt}/>
                    <div>
                        <small style={{fontSize: "70%"}} className="text-muted" id="slast-ma">
                            {time}</small>
                    </div>
                </div>
            );
        }
}
export default IncomingMessage