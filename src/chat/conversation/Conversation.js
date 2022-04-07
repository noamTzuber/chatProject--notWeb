import './Conversation.css'
import Btn from '../Btn/Btn'
import IncomingMessage from '../message/IncomingMassege';
import Outgoing from '../message/Outgoing';
function Conversation({text}) {
  return (
<div className='screenCon'>
    <div className='conversation'>
        {text}
      </div>
</div>

  );
}
export default Conversation;