





import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import Chat from './chat/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path = "/" element={<Login/>}/>
              <Route path = "/Register" element={<Register/>}/>
              <Route path = "/Chat/id=:id" element={<Chat/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
