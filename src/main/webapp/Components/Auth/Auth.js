function Auth(props) {
  console.log(props);
  if (props.type === "login")
    return (
      <div className="loginContainer">
        <div className="login">
          <form id="loginForm" method="post">
            <div id="text">Login</div>
            <input
              type="text"
              name="email"
              id=""
              placeholder="Email address"
              autoComplete="off"
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <br />
            <input type="checkbox" name="showPassword" id="showPassword" />
            <span id="showpassword">Show Password</span>
            <br />
            <input type="button" value="Login"  />
            <br />
            <a href="" id="forgetPass">
              Forget password?
            </a>{" "}
            <br />
            <div id="signup">
              New to Zoho Foods?{" "}
              <a href="./signup.html" id="forgetPass">
                Signup
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  else if (props.type === "register")
    return (
      <div className="signupContainer">
        <div className="signup">
          <form method="post" id="registerForm">
            <div id="text">Signup</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              id="name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Mobile number"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              id="signupPassword"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="cpassword"  
              id="cpassword"
              placeholder="Confirm Password"
            //   onFocus ="passwordCheck()"
              required
            />
            <br />
            <input type="file" name="file" id="file" />
            <div id="err">
              <ul>
                <li>
                  <span>
                    <img
                      src="./assets/images/remove.png"
                      alt="asdf" 
                      id="errImg6"
                    />
                  </span>
                  Password must be atleast 6 characters
                </li>
              </ul>
            </div>
            <input
              type="button"
              value="signup"
              id="submit"
            />
            <br />
            <a href="" id="forgetPass">
              Forget password?
            </a>{" "}
            <br />
            <div id="signup">
              Already have an account in Zoho Foods?{" "}
              <a href="./login.html" id="forgetPass">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    );
}
