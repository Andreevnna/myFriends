import Loading from "../Loading/Loading"
import WithHookStatus from "./WithHookStatus"


let Profile = (props) => {
  if (!props.userProfile) {
    return (
      <Loading />
    )
  }
  else {
    return (
      <>
        <section className="profile">
          <div className="wrapper">
            <h1>Profile</h1>
            <ul>
              <img src={props.userProfile.photos.large} alt="" />
              <div className="status">
                <WithHookStatus updateStatusThunk={props.updateStatusThunk} status={props.status}/>
              </div>
              <li className="name">{props.userProfile.fullName}</li>
              <li></li>
              <li>{props.userProfile.aboutMe}</li>
              <li></li>
            </ul>
          </div>
        </section>
        <div></div>
      </>
    )
  }
}
export default Profile