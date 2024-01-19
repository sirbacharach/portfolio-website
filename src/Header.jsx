function Header() {
  return (
    <div className="wrapper">
      <div className="title-flex-container">
        <div className="box one">
          <h1 className="header-content">Rob Allen</h1>
        </div>
        <div className="box two"><h2 className="header-content">Software Developer</h2></div>
        <div className="box three"></div>
      </div>
      <div className="title-flex-container">
    </div>
    <nav>
            <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact</a></li>
            </ul>
            <ul className="social">
            <li><a href="" className="gh">GitHub</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
