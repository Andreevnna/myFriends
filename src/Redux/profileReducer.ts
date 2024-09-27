import { profileAPI } from "../Api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE'
const GET_PROFILE_STATUS = 'GET-PROFILE-STATUS'

let initializationState = {
  userProfile: null,
  status: ''
}
type initializationStateType = typeof initializationState
let profileReducer = (state = initializationState, action: any): initializationStateType => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      }
    case GET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }

}
type setUserProfileType = {
  type: typeof SET_USER_PROFILE,
  userProfile: object
}
export const setUserProfile = (userProfile: object): setUserProfileType => ({
  type: SET_USER_PROFILE,
  userProfile
})
type setStatusType = {
  type: typeof GET_PROFILE_STATUS,
  status: string
}
export const setStatus = (status: string): setStatusType => ({
  type: GET_PROFILE_STATUS,
  status
})
export const getPortfolioThunk = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}
export const getStatusThunk = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatusThunk = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer