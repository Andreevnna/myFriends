import { Link } from "react-router-dom"
import logoImg from "../../Assets/img/logo.jpg"
import { useState } from "react"
import logo from "../../Assets/img/logo.jpeg"

const Header = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <header className="header">
      <div className="wrapper flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-elements">
          <nav className="header-menu">
            <ul className="nav-link nav-link__menu">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/my-friends'>Users</Link></li>
              <li><Link to='/profile'>About</Link></li>
              <li><Link className="btn btn-secondary" to='/messages'> <span className="icon icon-messages"></span> </Link></li>
            </ul>
          </nav>

          {props.isAuth ?
            <div className="header__logo-img"
              onClick={handleClick}
            >
              <img src={logoImg} alt="" />
              {
                isClicked &&
                <div className="header__information">
                  <div className="pop-up__login-info">
                    <img src={logoImg} alt="" />
                    <div className="pop-up__login-data">
                      <p className="login-data__name">Anastasiia Andreevna</p>
                      <p className="login-data__login">{props.login}</p>
                    </div>
                  </div>
                  <div className="pop-up_login">
                    <a className="pop-up__link" onClick={props.logOutThunk}>
                      <span className="icon icon-sign-out" />
                      <span className="pop-up__button-text">log out</span>
                    </a>
                  </div>
                </div>
              }
            </div>
            : <div>login</div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header