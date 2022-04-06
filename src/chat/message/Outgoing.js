import './Outgoing.css'

function Outgoing({txt,timeAndDate}) {

    var d = new Date();
    return (

        <div class="Outgoing">
            {txt}
            <div>
                <small className="text-muted" id="slast-ma">
                    {timeAndDate}</small>
            </div>
        </div>
        
        
        
        
    );
}
export default Outgoing