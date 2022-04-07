import './Outgoing.css'

function Outgoing({txt,time}) {

    var d = new Date();
    return (
        <div className="Outgoing">
            {txt}
            <div>
                <small style={{fontSize:"70%"}} className="text-muted" id="slast-ma">
                    {time}</small>
            </div>
        </div>
        

        
        
    );
}
export default Outgoing