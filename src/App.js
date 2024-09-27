import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import ContainerFriendsPage from './Components/Friends/ContainerFriendsPage';
import HeaderContainerConnect from './Components/Header/HeaderContainer';
import HomePage from './Components/Home/HomePage';
import Loading from './Components/Loading/Loading';
import Login from './Components/Login/Login';
import ContainerFriendsPageConnect, { withRouter } from './Components/Profile/ContainerProfile';
import { initializeApp } from './Redux/appReducer';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    // if (!this.props.initialized) {
    //   return <Loading />
    // }
    return (
      <div className="App">
        <HeaderContainerConnect />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/my-friends' element={<ContainerFriendsPage />} />
          <Route path='/profile/:userId?' element={<ContainerFriendsPageConnect />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>)
  };
}
let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);

