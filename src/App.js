





import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import Chat from './chat/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Register'
            element={<Register />}></Route>

          <Route path='/' element={<Login />}></Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
