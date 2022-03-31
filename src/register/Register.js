import './Register.css'

function Register() {
    return (
        <div id='form' className="position-absolute top-50 start-50 translate-middle">
            <span className="fs-1" style={{ padding: '20px', display: 'table', margin: '0 auto' }}>Register</span>

            <div className='inputAndTitle'>
                <div class="fs-6">Username</div>
                <input type="text" class="form-control" placeholder="Type your Username" aria-label="Email" aria-describedby="basic-addon1" />
            </div>

            <div className='inputAndTitle'>
                <div class="fs-6">Nickname</div>
                <input type="text" class="form-control" placeholder="Type your Nickname" aria-label="Email" aria-describedby="basic-addon1" />
            </div>

            <div className='inputAndTitle'>
                <div class="fs-6">Password</div>
                <input type="password" class="form-control" placeholder="Type your Password" aria-label="Email" aria-describedby="basic-addon1" />
            </div>

            <div className='inputAndTitle'>
                <div class="fs-6">Confirm Password</div>
                <input type="password" class="form-control" placeholder="Type your Password" aria-label="Email" aria-describedby="basic-addon1" />
            </div>

            <div className='inputAndTitle' style={{width:'220px'}}>
                <div class="fs-6">Upload profile picture</div>
                <input type="file" accept="image/*"/>
            </div>


            
            <p></p>
            <button id='loginButton' class="btn btn-primary" type="button" href='/'>Register</button>




        </div>
    );
}

export default Register

