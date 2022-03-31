import './Conversation.css'
import Btn from '../Btn/Btn'
import IncomingMessage from '../message/IncomingMassege';
import Outgoing from '../message/Outgoing';
function Conversation() {
    return (

        <div>
          <IncomingMessage/>
          <Outgoing/>
          <Btn/>
        </div>
    );
}
export default Conversation