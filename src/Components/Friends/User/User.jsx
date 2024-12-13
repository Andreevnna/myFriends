import { NavLink } from 'react-router-dom'
import userImg from '../../../Assets/img/logo.jpg'
const User = ({user, followingInProgress, setUnFollow, setFollow}) => {
  return <>
  <div>
    <ul>
      <li>{user.name}</li>
      <li>{user.status}</li>
      <NavLink to={'/profile/' + user.id} >
        <img alt='photo-user' src={user.photos.small != null ? user.photos.small : userImg}></img>
      </NavLink>
    </ul>
  </div>
  <div>
    {user.followed ? <button disabled={followingInProgress.userId === user.id} onClick={() => {

      setUnFollow(user.id)

    }}>unFollow</button> : <button disabled={followingInProgress.userId === user.id} onClick={() => {
      setFollow(user.id)
    }}>follow</button>}
  </div>
</>
}
export default User