import './Outgoing.css'

function Outgoing({txt,time,type}) {


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
    if(type==="audio"){

    return(
        <div className="Outgoing">
        <audio controls src = {txt}/>
            <div>
            <small style={{fontSize: "70%"}} className="text-muted" id="slast-ma">
                {time}</small>
    </div>
        </div>
        );
    }


        

        
        

}
export default Outgoing