import './Register.css'

function Register() {
    return (
        <div id='form' className="position-absolute top-50 start-50 translate-middle">
            <span className="fs-1" style={{ padding: '2%', display: 'table', margin: '0 auto' }}>Register</span>

            <div className='inputAndTitle'>
                <div class="fs-6">Username</div>
                <input id = 'userName' type="text" class="form-control" placeholder="Type your Username" />
            </div>

            <div className='inputAndTitle'>
                <div class="fs-6">Nickname</div>
                <input id = 'nickname' type="text" class="form-control" placeholder="Type your Nickname" />
            </div>

            <div className='inputAndTitle'>
                <div class="fs-6">Password</div>
                <input id = 'password' type="password" class="form-control" placeholder="Type your Password" />
            </div>

            <div className='inputAndTitle'>
                <div class="fs-6">Confirm Password</div>
                <input id = 'passworsConfirm' type="password" class="form-control" placeholder="Type your Password" />
            </div>

            <div id = 'picterUpload' style={{marginLeft:'22%'}}>
                <div class="fs-6">Upload profile picture</div>
                <input type="file" accept="image/*"/>
            </div>

            <p></p>
            <button id='loginButton' class="btn btn-primary" type="button" onClick={verifyData()}>Register</button>
            


        </div>
    );
}

export default Register

