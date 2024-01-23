import { Link } from "react-router-dom";

function Header() {
  return (
    <div class=" bg-blue-500 font-main text-shadow:_0_1px_0_var(--tw-shadow-color)]">
      <div className="flex items-baseline bg-darkgreen flex-wrap p-2 pl-3">
        <div className="pl-0 pr-4">
          <h1 className="text-nowrap text-white text-5xl font-semibold align-end inline-block align-baseline font-heading">
            Rob Allen
          </h1>
        </div>
        <div className="text-nowrap pl-0 grow">
          <h2 className="text-white text-5xl font-semibold inline-block align-baseline">
            Software Developer
          </h2>
        </div>
      </div>

      <nav className="flex justify-between drop-shadow-lg bg-navbutt">
        <ul className="flex font-medium">
        <Link to={"/home"}><li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700">
          <a href="">Home</a>
          </li></Link> 
          <Link to={"/about"}><li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700">
          <a href="">About</a>
          </li></Link>
          <Link to={"/portfolio"}><li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700">
           <a href="">Portfolio</a>
          </li></Link> 
          <Link to={"/contact"}> <li className="inline-block p-3 bg-navbutt text-white hover:bg-sky-700">
          <a href="">Contact</a>
          </li></Link> 
        </ul>
        <ul className="flex">
          <li className=" bg-github-button bg-contain bg-center bg-no-repeat text-white text-opacity-0 hover:bg-sky-700">
            <a href="https://github.com/sirbacharach" target="_blank" className="inline-block py-3 px-0.5 ">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;