import { stopSubmit } from "redux-form";
import { authAPI } from "../Api/api";

const SET_USE_DATA = 'SET-USE-DATA';

let initializationState = {
  userId: null as number | null,
  email: null as number | null,
  login: null as number | null,
  isAuth: false
}
type initializationStateType = typeof initializationState
let authReducer = (state = initializationState, action: any): initializationStateType => {
  switch (action.type) {
    case SET_USE_DATA:
      return {
        ...state,
        ...action.userData,
      }

    default:
      return state;
  }

}
type objectUserDataType = {
  userId: number | null, 
  email: string | null, 
  login: string | null, 
  isAuth: boolean
}
type setUserDataType = {
  type: typeof SET_USE_DATA,
  userData: objectUserDataType
}
export const setUserData = (userId: number | null, email:string | null, login: string | null, isAuth: boolean): setUserDataType => {
  return {
    type: SET_USE_DATA,
    userData: {
      userId, email, login, isAuth
    }
  }
}
export const getLoginThunk = () => async (dispatch: any) => {
  const data = await authAPI.getLogin()
  if (data.resultCode === 0) {
    let { id, email, login } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}


export const logInThunk = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  const data = await authAPI.logIn(email, password, rememberMe)
  if (data.resultCode === 0) {
    dispatch(getLoginThunk())
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : 'some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logOutThunk = () => async (dispatch: any) => {
  const data = await authAPI.logOut()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authReducer;