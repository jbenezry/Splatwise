import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginFields
  }
}

handleSubmit(e) {
  this.props.login(this.state)
}

update(field) {
  return e => {
    this.setState({
      [field]: e.target.value
    })
  }
}

render() {
  return (
    <div>

      <label>WELCOME TO SPLATWISE</label>
      <form onSubmit={this.handleSubmit}>

        <label>Email address
          <input onChange={this.update('email')} type="text" value={this.state.email}/>
        </label>

        <label>Password
          <input onChange={this.update('password')} type="text" value={this.state.password}/>
        </label>

        <input type="submit" value="Log in" />
        {/* <button onClick="external link" value="G Sign up with Google"></button> */}
      </form>

      <label>Forgot your password?
        <a href="">Click here</a>
      </label>

      <label>Or log in with <a href="">Facebook</a></label>
      <label>/</label>
      <label><a href="">G Google</a></label>
    </div>
  )
}

export default LoginForm;
