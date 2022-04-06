





import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import Chat from './chat/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/**
 * do a clip -for photo and records
 * fix pixsels in login and register
 * validation in the first register
 * send text img record
 * change conversaions
 * bottom for add chat
 */
function App() {
  return (
    <div>
      <Chat/>
    </div>
  );
}

export default App;
