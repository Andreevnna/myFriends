import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { logInThunk, logOutThunk } from "../../Redux/authReducer"

const LoginForm = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"login"} name={"email"} component={"input"} />
        </div>
        <div>
          <Field placeholder={"password"} name={"password"} type={'password'} component={"input"} />
        </div>
        <div>
          <Field type={'checkbox'} placeholder={"password"} name={"rememberMe"} component={"input"} />remember me
        </div>
        <div>
          {props.error && <div className="err">
            {props.error}
          </div>}
        </div>
        <button>submit</button>
      </form>
    </div>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
  const onSubmit = (dataForm) => {
    props.logInThunk(dataForm.email, dataForm.password, dataForm.rememberMe)
  }
  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return (
    <>
      <div className="wrapper">
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { logInThunk, logOutThunk })(Login)