import './Outgoing.css'

function Outgoing({txt,time,type}) {

    if(type==="img") {

        return (
            <div className="Outgoing">
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
            <div className="Outgoing">
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
            <div className="Outgoing">
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
                <div className="Outgoing">
                    <video style={{width: "-webkit-fill-available"}} controls src={txt}/>
                    <div>
                        <small style={{fontSize: "70%"}} className="text-muted" id="slast-ma">
                            {time}</small>
                    </div>
                </div>
            );
        }


        
        

}
export default Outgoing