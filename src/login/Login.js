import './Login.css'

function Login() {
    return (
      <div>
        <form action="#" method="post">
          <h2>Sign Up</h2>
          <p>
            <label for="Email" class="floatLabel">Email</label>
            <input id="Email" name="Email" type="text"></input>
          </p>
          <p>
            <label for="password" class="floatLabel">Password</label>
            <input id="password" name="password" type="password" />
              <span>Enter a password longer than 8 characters</span>
          </p>
          <p>
            <label for="confirm_password" class="floatLabel">Confirm Password</label>
            <input id="confirm_password" name="confirm_password" type="password" />
              <span>Your passwords do not match</span>
          </p>
          <p>
          <button type="button" class="btn btn-outline-dark">Submit</button>

          </p>
        </form>
        
      </div>
    );
  }

export default Login

