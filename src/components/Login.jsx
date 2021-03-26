/**
 * Component to render socket data.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
 const Login = (props) => {
    if (!props.message) {
    return (
      <div>
        <a href='https://protected-depths-73018.herokuapp.com/auth/gitlab'>Log in with GitLab</a>
      </div>
   )
    } else {
      return (
        <div>
          <h4>Please confirm logout</h4>
        <a href='https://protected-depths-73018.herokuapp.com/logout'>Log out</a>
      </div>
      )
    }
}

export default Login


