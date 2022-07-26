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
          <div className="flex justify-center">
            <div>
              <div className="dropdown relative">
                <button
                  className="dropdown-toggle px-6 py-2.5
                                    text-black
                                    text-sm
                                    leading-tight
                                    rounded
                                    transition
                                    duration-150
                                    ease-in-out
                                    text-lightblack
                                    flex
                                    items-center
                                    whitespace-nowrap
                                    hover:text-red-700
                                    "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Межсетевые экраны
                </button>
                <ul
                  className="
                                    dropdown-menu
                                    min-w-max
                                    absolute
                                    hidden
                                    bg-white
                                    text-base
                                    z-50
                                    float-left
                                    py-2
                                    list-none
                                    text-left
                                    rounded-lg
                                    shadow-lg
                                    mt-1
                                    m-0
                                    bg-clip-padding
                                    border-none
                                    "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:text-red-700
                                        hover:bg-gray-100
                                        "
                      href="/"
                    >
                      Шаблоны форм статической отчетности
                    </a>
                  </li>
                  <li>
                    <a
                      className="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:text-red-700
                                        hover:bg-gray-100
                                        "
                      href="/"
                    >
                      Шаблоны форм статической отчетности
                    </a>
                  </li>
                  <li>
                    <a
                      className="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:text-red-700
                                        hover:bg-gray-100
                                        "
                      href="/"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:text-red-700
                                        hover:bg-gray-100
                                        "
                      href="/"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
        </nav>
      </div>
    </header>
  )
}

export default Header
