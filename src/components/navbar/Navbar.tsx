import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt=""></img>
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" className="icon" alt=""></img>
        <img src="/app.svg" className="icon" alt=""></img>
        <img src="/expand.svg" className="icon" alt=""></img>
        <div className="notification">
          <img src="/notifications.svg" alt=""></img>
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"></img>
          <span>Oykun</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"></img>
      </div>
    </div>
  );
};

export default Navbar;
