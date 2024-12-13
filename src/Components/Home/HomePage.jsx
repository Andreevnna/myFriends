import FrameAbout from "./FrameAbout"
import FrameFriends from "./FrameFriends"
import FrameMain from "./FrameMain"
import FramePosts from "./FramePosts"

const HomePage = () => {
  return (
    <section className="main">
      <div className="wrapper">
        <div className="container layout-2-columns">
          <div className="layout-1-columns">
            <FrameMain />
            <FramePosts />
          </div>
          <div className="layout-1-columns">
            <FrameAbout />
            <FrameFriends />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage