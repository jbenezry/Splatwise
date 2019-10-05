import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.signupFields
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    // debugger
    return (
      <div>
        <ul>
          {this.props.errors}
        </ul>

        <label>INTRODUCE YOURSELF</label>
        <form onSubmit={this.handleSubmit}>

          <label>Hi there! My name is
            <input onChange={this.update('username')} type="text" value={this.state.name}/>
          </label>

          <label>Here’s my email address:
            <input onChange={this.update('email')} type="text" value={this.state.email}/>
          </label>

          <label>And here’s my password:
            <input onChange={this.update('password')} type="password" value={this.state.password}/>
          </label>

          {/* RECAPTCHA - I'm not a robot */}

          <input type="submit" value="Sign me up" />
          {/* <button onClick="external link" value="G Sign up with Google"></button> */}
        </form>

        <label>By signing up, you accept the Splatwise Terms of Service.</label>
        <label>Don't use USD for currency? Click here.</label>
      </div>
    )
  }
}

export default SignupForm;