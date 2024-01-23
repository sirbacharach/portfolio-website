function Header() {
  return (
    <div class="bg-blue-500 font-heading">
      <div className="flex items-baseline bg-darkgreen">
        <div className="pl-3 pr-4 py-3">
          <h1 className="text-white text-5xl font-semibold align-end inline-block align-baseline font-heading">Rob Allen</h1>
        </div>
        <div className="pl-0 py-3 grow"><h2 className="text-white text-5xl font-semibold inline-block align-baseline">Software Developer</h2></div>
      </div>

      <nav className="flex justify-between drop-shadow-lg bg-navbutt">
            <ul className="flex">
            <li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700"><a href="">Home</a></li>
            <li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700"><a href="">About</a></li>
            <li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700"><a href="">Portfolio</a></li>
            <li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700"><a href="">Contact</a></li>
            </ul>
            <ul className="flex">
            <li><a href="" className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700">GitHub</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
