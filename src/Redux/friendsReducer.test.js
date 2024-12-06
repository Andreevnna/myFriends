import friendsReducer, {setToggleIsFetching } from "./friendsReducer"

let state = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: {
    isFetching: false,
    userId: null
  }
}

it('is followed true', () => {
  let action = setToggleIsFetching(true)
  
  let newState = friendsReducer(state, action)
  expect(newState.isFetching).toBe(true)
})
