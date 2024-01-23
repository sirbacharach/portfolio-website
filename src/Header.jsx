import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

const [homeSelected, setHomeSelected] = useState("true")
const [aboutSelected, setAboutSelected] = useState("true")
const [portfolioSelected, setPortfolioSelected] = useState("true")
const [contactSelected, setContactSelected] = useState("true")

  return (
    <div className=" bg-blue-500 font-main text-shadow:_0_1px_0_var(--tw-shadow-color)] sticky top-0">
      <div className="flex items-baseline bg-darkgreen flex-wrap p-1 pl-3">
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

      <nav className="flex justify-between drop-shadow-lg bg-navbutt sticky top-0">
        <ul className="flex font-medium">
          <Link to={"/home"}>
            <li onClick={()=>{console.log('test')}} className="transition duration-500 hover:scale-y-110 active:bg-green-700 inline-block p-2 bg-navbutt text-white hover:bg-sky-700">
              <p>Home</p>
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="transition duration-500 hover:scale-y-110 active:bg-green-700 inline-block p-2 bg-navbutt text-white hover:bg-sky-700">
              <p>About</p>
            </li>
          </Link>
          <Link to={"/portfolio"}>
            <li className="transition duration-500 hover:scale-y-110 active:bg-green-700 inline-block p-2 bg-navbutt text-white hover:bg-sky-700">
              <p>Portfolio</p>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="transition duration-500 hover:scale-y-110 active:bg-green-700 first:inline-block p-2 bg-navbutt text-white hover:bg-sky-700">
              <p>Contact</p>
            </li>
          </Link>
        </ul>
        <ul className="flex">
          <li className="transition duration-500 hover:scale-y-110 active:bg-green-700 bg-github-button bg-contain bg-center bg-no-repeat text-white text-opacity-0 hover:bg-sky-700">
            <a
              href="https://github.com/sirbacharach"
              target="_blank"
              className="inline-block py-2 px-0.5 "
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
