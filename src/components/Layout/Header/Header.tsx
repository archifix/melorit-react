import React from "react"
import logo from "../../../styles/img/Logo.png"

//import "../../../styles/header.scss"

const Header: React.FC = () => {
  return (
    <header>
      <div className="container bg-local">
        <nav className="flex justify-between items-center pt-7">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="title border-l-2 px-3">
            <h6 className="text-sm">Официальный поставщик</h6>
            <h5 className="text-sm">Palo Alto и Fortinet в России</h5>
          </div>
          <ul className="flex gap-14">
            <li>
              <a
                href="/"
                className="font-medium text-base text-lightblack hover:text-red-700"
              >
                Межсетевые экраны
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-medium text-base text-lightblack hover:text-red-700"
              >
                Консалтинг и аудит
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-medium text-base text-lightblack hover:text-red-700"
              >
                Блог
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-medium text-base text-lightblack hover:text-red-700"
              >
                О компании
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
