import './Register.css'
import {users} from "../DB/DB";
import {useNavigate} from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

    function validation() {
        var errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = ""

        var newUserName = document.getElementById("userName").value;
        for (let i = 0; i < users.length; i++) {
            if (newUserName === users[i].name)
                errorMessage.innerHTML = "Username already exist<br>"
        }
        if (newUserName.length === 0) {
            errorMessage.innerHTML += "please enter Username<br>"
        } else if (/[^a-zA-Z0-9]/.test(newUserName)) {
            errorMessage.innerHTML += "Use only English and numbers in Username<br>";
        }

        let newNickname = document.getElementById("nickname").value;
        if (newNickname.length === 0) {
            errorMessage.innerHTML += "please enter Nickname<br>"
        } else if (/[^a-zA-Z0-9]/.test(newNickname)) {
            errorMessage.innerHTML += "Use only English and numbers in Nickname<br>";
        } else if(newNickname.length>8)
            errorMessage.innerHTML += "Use only 8 characters in Nickname<br>";

    


        let newPassword = document.getElementById("password").value;
        if (newPassword.length < 8)
            errorMessage.innerHTML += "Use 8 characters or more for your password<br>"
        else {
            if (!/[0-9]/.test(newPassword))
                errorMessage.innerHTML += "Use numbers for your password<br>"
            if (!/[a-zA-Z]/.test(newPassword))
                errorMessage.innerHTML += "Use letters for your password<br>"

            if (/[^(a-zA-Z0-9)]/.test(newPassword))
                errorMessage.innerHTML += "Use only English and numbers for your password<br>"

            if (document.getElementById("password-confirm").value !== newPassword)
                errorMessage.innerHTML += "the confirm password is not match<br>"
        }

        if(document.getElementById("uploadImageButten").value.length > 0){
            let img = document.getElementById("uploadImageButten");
            let imgURL = document.getElementById("uploadImageButten").value;
            if (imgURL.length > 0) {
            let fReader = new FileReader()
            fReader.readAsDataURL(img.files[0])
            fReader.onloadend = function (event) {
                if (errorMessage.innerHTML === "") {
                    //push
                    users.push({ name: newUserName, profilePic: event.target.result, nickName:newNickname, password: newPassword, chats: []})
                    navigate('/Chat', {state:{id: users.length-1}})
                }
            }
        }
        }else{
            errorMessage.innerHTML += "the confirm password is not match<br>"
        }

        // if (errorMessage.innerHTML === "") {
        //     //push
        //     users.push({ name: "fdb", profilePic: "hermione.jpg", nickName:"fdbdrs", password: newPassword, chats: [
        //         // {
        //         //     contact: 'hermione',
        //         //     img: "hermione.jpg",
        //         //     lastMessage: 'bye8',
        //         //     lastTime: '80:00 18.10.28',
        //         //     text: [{txt: 'hey my nam22222222222222222222222e is noam', isIncoming: 0, time: "0:29 11.11.19", type:"txt"}, {txt: "b", isIncoming: 1 , time: "20:29 11.11.19 ",type:"txt"}]
        //         // } ,
        //         // {
        //         //     contact: 'ron',
        //         //     img: "ron.jpg",
        //         //     lastMessage: 'bye2',
        //         //     lastTime: '11:00 12.10.25',
        //         //     text: [{txt: 'hey my name is noam', isIncoming: 0, time: "20:29 11.11.19", type:"txt"}, {txt: "blob", isIncoming: 1 , time: "20:29 11.11.19 ",type:"txt"}]
        //         // }
        //     ] })
        //     navigate('/Chat', {state:{id: users.length-1}})
        //
        // }
    }


    return (
        <div id='form' className="my-form position-absolute top-50 start-50 translate-middle">
            <span className="fs-1" style={{padding: '2%', display: 'table', margin: '0 auto'}}>Register</span>

            <div className='inputAndTitle'>
                <div className="fs-6">Username</div>
                <input id='userName' type="text" className="form-control" placeholder="Type your Username"/>
            </div>

            <div className='inputAndTitle'>
                <div className="fs-6">Nickname</div>
                <input id='nickname' type="text" className="form-control" placeholder="Type your Nickname"/>
            </div>

            <div className='inputAndTitle'>
                <div className="fs-6">Password</div>
                <input id='password' type="password" className="form-control" placeholder="Type your Password"/>
            </div>

            <div className='inputAndTitle'>
                <div className="fs-6">Confirm Password</div>
                <input id='password-confirm' type="password" className="form-control" placeholder="Type your Password"/>
            </div>
            <div id='picterUpload' style={{marginLeft: '22%'}}>
                <div className="fs-6">Upload profile picture</div>
                <input id = "uploadImageButten" type="file" accept="image/*"/>
            </div>

            <button id='loginButton' className="btn btn-primary" type="button" onClick={validation}
                    style={{marginTop: "3%"}}>Register
            </button>

            <div id="error-message"></div>

        </div>
    );
}

export default Register

