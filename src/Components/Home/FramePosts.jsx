import React from "react"
import { Link } from "react-router-dom"
import logoImg from "../../Assets/img/logo.jpg"


const FramePosts = () => {
  return (
    <div className="window window-posts">
      <div className="flex">
        <div className="posts__logo">
          <img src={logoImg} alt="" />
        </div>
        <div className="post">
          <textarea name="" id="" placeholder="Share your thoughts..."></textarea>
        </div>
      </div>
      <nav className="post-link">
        <ul>
          <li>
            <Link>
              <span className="icon icon-camera"></span>Photo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FramePosts