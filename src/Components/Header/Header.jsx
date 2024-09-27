import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/my-friends'>My-friends</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>

        <div className="login-user"> 
          {props.isAuth ? <div>{props.login} - <button onClick={props.logOutThunk}>log out</button> </div> :  <div>login</div> }
          </div>
      </div>
    </header>
  )
}

export default Header