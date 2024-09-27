import { usersAPI } from "../Api/api";
import { updateObjectInArray } from "../util/object-helpers";
import { AppDispatch } from "./store";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_IS_FETCHING = 'TOGGLE-FOLLOWING-IS-FETCHING'

let initializationState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: {
    isFetching: false,
    userId: null as number | null
  }
}
type initializationStateType = typeof initializationState
let friendsReducer = (state = initializationState, action: any): initializationStateType  => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
      }
    case UN_FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_FOLLOWING_IS_FETCHING:
      return {
        ...state,
        followingInProgress: {
          ...state.followingInProgress,
          isFetching: action.isFetching,
          userId: action.userId
        }
      }
    default:
      return state;
  }

}
type followActionCreatorType = {
  type: typeof FOLLOW,
  userId: number
}
export const follow = (userId: number): followActionCreatorType => {
  return {
    type: FOLLOW,
    userId: userId
  }
}
type unFollowActionCreatorType = {
  type: typeof UN_FOLLOW,
  userId: number
}
export const unFollow = (userId: number): unFollowActionCreatorType => {
  return {
    type: UN_FOLLOW,
    userId: userId
  }
}
type setUsersActionCreatorType = {
  type: typeof SET_USERS,
  users: any
}
export const setUsers = (users: any):setUsersActionCreatorType => {
  return {
    type: SET_USERS,
    users: users
  }
}
type setCurrentPageActionCreatorType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionCreatorType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}
type setTotalUsersCountActionCreatorType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionCreatorType => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  }
}
export const setToggleIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  }
}
export const setToggleFollowingIsFetching = (isFetching: boolean, userId: null) => {
  return {
    type: TOGGLE_FOLLOWING_IS_FETCHING,
    isFetching,
    userId
  }
}
export const getUsers = (current: number | undefined, pageSize: number | undefined) => async (dispatch: any) => {
  dispatch(setToggleIsFetching(true))
  const data = await usersAPI.getUsers(current, pageSize)
  dispatch(setToggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))

}
const followUnFollowFlow = async (dispatch: any, userId: any, apiMethod: { (userId: any): Promise<any>; (userId: any): Promise<any>; (arg0: any): any; }, actionCreator: { (userId: any): { type: string; userId: any; }; (userId: any): { type: string; userId: any; }; (arg0: any): any; }) => {
  dispatch(setToggleFollowingIsFetching(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(setToggleFollowingIsFetching(false, null))
}
export const setUnFollow = (userId: number) => async (dispatch: any) => {
  followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollow)
}

export const setFollow = (userId: number) => async (dispatch: any) => {
  followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow)
}

export default friendsReducer;