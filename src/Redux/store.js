import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";

import appReducer from "./appReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";

// let reducers = combineReducers({
//   friendsPage: friendsReducer,
//   profilePage: profileReducer,
//   auth: authReducer,
//   form: formReducer,
//   app: appReducer
// })

const store = configureStore({
  reducer: {
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
  }
})

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
 export default store