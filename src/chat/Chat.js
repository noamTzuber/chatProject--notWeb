import './Chat.css'
import Conversation from './conversation/Conversation';
import SummaryConversation from './summaryConversation/SummaryConversation';
import UserData from './userData/UserData';


function Chat() {
  return (

   
      <div className='chatbox'>
        <div class="container">
          <div class="row" >
            <div class="col-4" >
            <UserData/>
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