import { connect } from "react-redux";
import Header from "./Header";
import React from "react"
import { logOutThunk } from "../../Redux/authReducer";
import { compose } from "redux";


class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
// const HeaderContainerConnect = connect(mapStateToProps, { getLoginThunk })(HeaderContainer)
export default compose(
  connect(mapStateToProps, { logOutThunk })
)(HeaderContainer)
