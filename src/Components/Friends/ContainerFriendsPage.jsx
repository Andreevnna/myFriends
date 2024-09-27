import { connect } from "react-redux"
import { getUsers, setCurrentPage, setFollow, setUnFollow } from "../../Redux/friendsReducer"
import React from "react"
import Users from "./User/Users"
import Loading from "../Loading/Loading"
import { Navigate } from "react-router-dom"
import { withAuthRedirect } from "../../Hoc/withAuthRedirect"
import { compose } from "redux"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber) // сначала уйдет в стейт
    this.props.getUsers(pageNumber, this.props.pageSize) // но берем значение которое возвращается из колбека, более актуальное
  }

  render() {
    if(!this.props.isAuth) return <Navigate to='/login'/>
    return (
      <>
        {this.props.isFetching ? <Loading /> : null}
        <Users {...this.props}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress} 
          setUnFollow={this.props.setUnFollow}
          setFollow={this.props.setFollow}/>
      </>

    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followingInProgress: state.friendsPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     }
//   }
// }
// let ContainerFriendsPageWithRouter = withRouter(UsersContainer)
// let AuthRedirectContainer = withAuthRedirect(UsersContainer)

// const ContainerFriendsPageConnect = connect(mapStateToProps, {
//   setCurrentPage,
//   getUsers,
//   setUnFollow,
//   setFollow
// })(AuthRedirectContainer)

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    setUnFollow,
    setFollow
  }),
  withAuthRedirect
)(UsersContainer)