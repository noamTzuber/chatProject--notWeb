import './Login.css'

function Login() {
  return (
    <div id='form' className="position-absolute top-50 start-50 translate-middle">
      <span className="fs-1" style={{padding:'30px', display:'table', margin: '0 auto'}}>Login</span>
      <div className='inputAndTitle'>
        <div className="fs-6">Username</div>
        <input type="text" className="form-control" placeholder="Type your Username" aria-label="Email" aria-describedby="basic-addon1" />
      </div>

      <div className='inputAndTitle'>
        <div className="fs-6">Password</div>
        <input type="password" className="form-control" placeholder="Type your Password" aria-label="Email" aria-describedby="basic-addon1"/>
      </div>

      <button id = 'loginButton' className="btn btn-primary" type="button">Login</button>


      <div id = 'registration'>
        <div className="fs-6">Have not accounted yet?</div>
        <a href="/Register" style={{display:'table', margin: '0 auto'}} className="fs-6">Signed up</a>
      </div>
      
    </div>
  );
}

export default Login

