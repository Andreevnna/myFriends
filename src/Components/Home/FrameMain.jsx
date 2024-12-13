import logoImg from "../../Assets/img/logo.jpg"
import Status from "../Profile/Status"
import iconEdit from "../../Assets/img/edit.svg"
import { Link } from "react-router-dom"

const FrameMain = () => {
  return (
    <div className="window-main">
      <div className="window-main__profile-background">
        <div className="window-main__avatar">
          <img src={logoImg} alt="" />
        </div>
      </div>
      <div className="window-main__description">
        <div className="description__name">
          <h1>Sam Lanson</h1>
          <p>250 connections</p>
        </div>
        <div className="description__edit">
          <button href="" className="edit-profile style-accent"><span className="icon icon-edit"></span> Edit profile</button>
        </div>
      </div>
      <div className="window-main__list-information">
        <ul className="list-info">
          <li><span className="icon icon-case"></span>Lead Developer</li>
          <li><span className="icon icon-map"></span>New Hampshire</li>
          <li><span className="icon icon-calendar"></span>Joined on Nov 26, 2019</li>
        </ul>
      </div>
      <nav className="window-main__footer">
        <ul className="nav-link nav-link_main-footer">
          <li>
            <Link>Feed</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Media</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FrameMain