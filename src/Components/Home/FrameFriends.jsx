import photo1 from "../../Assets/img/photo1.jpg"
import photo2 from "../../Assets/img/photo2.jpg"
import photo3 from "../../Assets/img/photo3.jpg"
import photo4 from "../../Assets/img/photo4.jpg"

const FrameFriends = () => {
  return (
    <div className="window window-friends">
      <div className="friends__top">
        <div className="friends__title">
          <h2>Friends <span className="friend-count style-accent">20</span></h2>
        </div>
        <div className="friends__button">
          <button className="btn btn-info btn-friends">See all friends</button>
        </div>
      </div>
      <div className="friends__cards">
        <div className="card">
          <img src={photo1} alt="" />
          <h3>Frances Guerrero</h3>
          <p>50 mutual connections</p>
          <div className="button__card">
            <button className="btn btn-primary"><span className="icon icon-message-light"></span></button>
            <button className="btn btn-success"><span className="icon icon-user"></span></button>
          </div>
        </div>
        <div className="card">
          <img src={photo2} alt="" />
          <h3>Frances Guerrero</h3>
          <p>50 mutual connections</p>
          <div className="button__card">
            <button className="btn btn-primary"><span className="icon icon-message-light"></span></button>
            <button className="btn btn-success"><span className="icon icon-user"></span></button>
          </div>
        </div>
        <div className="card">
          <img src={photo3} alt="" />
          <h3>Frances Guerrero</h3>
          <p>50 mutual connections</p>
          <div className="button__card">
            <button className="btn btn-primary"><span className="icon icon-message-light"></span></button>
            <button className="btn btn-success"><span className="icon icon-user"></span></button>
          </div>
        </div>
        <div className="card">
          <img src={photo4} alt="" />
          <h3>Frances Guerrero</h3>
          <p>50 mutual connections</p>
          <div className="button__card">
            <button className="btn btn-primary"><span className="icon icon-message-light"></span></button>
            <button className="btn btn-success"><span className="icon icon-user"></span></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FrameFriends