import { getLoginThunk } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


let initializationState = {
  initialized: false,
}

type initializationStateType = typeof initializationState
let appReducer = (state = initializationState, action: any):initializationStateType  => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    
    default:
      return state;
  }

}
type initializedSuccessType = {
  type: typeof initializedSuccess
}
export const initializedSuccess = (): initializedSuccessType => ({type: initializedSuccess})

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getLoginThunk())
  Promise.all([promise]).then(
    dispatch(() => {initializedSuccess()})
  )
}

export default appReducer;