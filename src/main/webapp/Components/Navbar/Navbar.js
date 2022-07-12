function Navbar() {
  const Link = ReactRouterDOM.Link;
  const userDet = userAuth();
  if (userDet.type === "user")
    return (
      <div class="navbar">
        <div class="logo">
          <a href="../">
            <img src="../assets/images/logo.png" alt="" />
          </a>
        </div>
        <div class="navContent">
          <a href="./restaurant.html" class="navConText">
            Restaurants
          </a>
          <a href="./orders.html" class="navConText">
            Orders
          </a>
          <a href="./cart.html" class="navConText">
            <div class="navCart">
              <div class="navCart-icon">
                <img src="../assets/images/cart.png" alt="" />
              </div>
              <div class="navCart-badge">
                <span id="cartNo">0</span>
              </div>
            </div>
          </a>
          <div class="profilePic" id="profilePic">
            <div class="imgCon" id="imgConProfile"></div>
            <div class="dropDown" id="dropDown">
              <a href="./account.html" class="navConText1">
                Account
              </a>
              <div class="navConText1" onclick="logout()">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="./assets/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="navContent">
          <Link to="/auth/restaurantLogin" className="navConText">Restaurant Login</Link>
          <Link to="/auth/login">
            <button className="btnnavbar">Login</button>
          </Link>
          <Link to="/auth/register">
            <button className="btnnavbar">Signup</button>
          </Link>
        </div>
      </div>
    );
}
