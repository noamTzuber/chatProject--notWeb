import './Conversation.css'
import Btn from '../Btn/Btn'
import IncomingMessage from '../message/IncomingMassege';
import Outgoing from '../message/Outgoing';
function Conversation() {
  return (


    <div className='conversation'>
        <IncomingMessage />
        <Outgoing />
        <Outgoing />
        <Outgoing />
        <Outgoing />
        <Outgoing />
        
        <IncomingMessage />
        
        <IncomingMessage />
        
        <IncomingMessage />
        <Outgoing />
        <Outgoing />
        <Outgoing />
      </div>

  );
}
export default Conversation;