function Header() {
  return (
    <div className="bg-gray">

      <div className="flex items-baseline bg-darkgreen">
        <div className="pl-3 pr-4 py-3">
          <h1 className="text-white text-4xl font-bold align-end inline-block align-baseline">Rob Allen</h1>
        </div>
        <div className="pl-0 py-3 grow"><h2 className="text-white text-3xl font-semibold inline-block align-baseline">Software Developer</h2></div>
      </div>

      <nav className="flex justify-between bg-navbutt">
            <ul className="flex">
            <li className="inline-block p-3 bg-navbutt text-white"><a href="">Home</a></li>
            <li className="inline-block p-3 bg-navbutt text-white"><a href="">About</a></li>
            <li className="inline-block p-3 bg-navbutt text-white"><a href="">Portfolio</a></li>
            <li className="inline-block p-3 bg-navbutt text-white"><a href="">Contact</a></li>
            </ul>
            <ul className="flex">
            <li><a href="" className="inline-block gh p-3 text-white">GitHub</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
