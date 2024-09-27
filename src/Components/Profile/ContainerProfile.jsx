import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { getPortfolioThunk, getStatusThunk, updateStatusThunk } from "../../Redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";
import { compose } from "redux";
import { useNavigate } from 'react-router-dom';

export const withNavigate = (Component) => {
  let RedirectTo = (props) => {
    return <Component {...props} navigate={useNavigate()} />
  }
  return RedirectTo;
}
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ContainerProfile extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.navigate('/login');
      }
    }
    this.props.getPortfolioThunk(userId)
    this.props.getStatusThunk(userId)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />
    return (
      <Profile status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} {...this.props} />
    )
  }
}
// let AuthRedirectContainer = withAuthRedirect(ContainerProfile)

// const WhitsUrlContainerComponent = withRouter(AuthRedirectContainer)



let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
  }
}

// const ProfilePageContainer = connect(mapStateToProps, {getPortfolioThunk})(WhitsUrlContainerComponent)

export default compose(
  connect(mapStateToProps, { getPortfolioThunk, getStatusThunk, updateStatusThunk }),
  withRouter,
  withAuthRedirect,
  withNavigate
)(ContainerProfile)

