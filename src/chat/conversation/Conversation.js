import './Conversation.css'
import Btn from '../Btn/Btn'
import IncomingMessage from '../message/IncomingMassege';
import Outgoing from '../message/Outgoing';
function Conversation() {
  return (


    <div>
      <div className='conversaion'>
        <IncomingMessage />
        <Outgoing />
        <Btn />
        </div>
        </div>
        );
}
        export default Conversation;