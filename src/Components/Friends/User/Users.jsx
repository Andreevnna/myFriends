import PaginationComponent from '../../../common/Paginator/PaginationComponent'
import User from './User'


const Users = (props) => {

  return (
    <div>
      <div>
        <PaginationComponent totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
      </div>
      {props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} setUnFollow={props.setUnFollow} setFollow={props.setFollow}/>)
      }
    </div>
  )
}

export default Users