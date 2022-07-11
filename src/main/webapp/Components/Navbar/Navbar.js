function Navbar() {
  const userDet =userAuth(); 
  return (
    <div className="navbar">
      <div className="logo">
        <a href="">
          <img src="./assets/images/logo.png" alt="" />
        </a>
      </div>
      <div className="navContent">
        <a href="./template/restaurant/login.html" className="navConText">
          Restaurant Login
        </a>
        <a href="./template/login.html">
          <button className="btnnavbar">Login</button>
        </a>
        <a href="./template/signup.html">
          <button className="btnnavbar">Signup</button>
        </a>
      </div>
    </div>
  );
}
