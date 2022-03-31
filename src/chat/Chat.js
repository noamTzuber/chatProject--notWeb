import './Chat.css'
import Conversation from './conversation/Conversation';
import SummaryConversation from './summaryConversation/SummaryConversation';

function Chat() {
  return (

   
      <div className='chatbox'>
        <div class="container">
          <div class="row" >
            <div class="col-4" >
            <div class="scroll-container" >
               <SummaryConversation/> 
               <SummaryConversation/>
               <SummaryConversation/> 
               <SummaryConversation/> 
               <SummaryConversation/>  
               <SummaryConversation/>  
               <SummaryConversation/>  
               <SummaryConversation/>  
               <SummaryConversation/>  
              </div>
            </div>
            <div class="col-8">
              <div className='currenConv'>
                <Conversation />
              </div>
            </div>
          </div>
        </div>
      </div>
      

  );
}

export default Chat