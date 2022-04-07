import './Login.css'
import {users} from "../DB";

function Login() {
    function varifyLogin() {
        var errorMessage = document.getElementById("errorMessage");
        var name = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        let userExist = 0;
        for (var i = 0; i < users.length; i++)
            if(users[i].name === name && users[i].password ===password){
                userExist =1;
                break;
            }

        if(userExist)
            window.location.href = '/Chat/id=' + i;
        else{
            errorMessage.innerHTML = "Username or password incorrect";
        }
    }


    return (
        <div id='form' className="position-absolute top-50 start-50 translate-middle">
            <span className="fs-1" style={{padding: '30px', display: 'table', margin: '0 auto'}}>Login</span>
            <div className='inputAndTitle'>
                <div className="fs-6">Username</div>
                <input id="username" type="text" className="form-control" placeholder="Type your Username" aria-label="Email"
                       aria-describedby="basic-addon1"/>
            </div>

            <div className='inputAndTitle'>
                <div className="fs-6">Password</div>
                <input id="password" type="password" className="form-control" placeholder="Type your Password"
                       aria-label="Email" aria-describedby="basic-addon1"/>
            </div>

            <button id='loginButton' className="btn btn-primary" type="button" onClick={varifyLogin}>Login</button>

            <div id="errorMessage"></div>

            <div id='registration'>
                <div className="fs-6">Have not accounted yet?</div>
                <a href="/Register" style={{display: 'table', margin: '0 auto'}} className="fs-6">Signed up</a>
            </div>


        </div>
    );
}

export default Login

