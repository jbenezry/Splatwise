import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.signupFields
  }


  handleSubmit(e) {
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
    debugger
    return (
      <div>

        <label>INTRODUCE YOURSELF</label>
        <form onSubmit={this.handleSubmit}>

          <label>Hi there! My name is
            <input onChange={this.update('name')} type="text" value={this.state.name}/>
          </label>

          <label>Here’s my email address:
            <input onChange={this.update('email')} type="text" value={this.state.email}/>
          </label>

          <label>And here’s my password:
            <input onChange={this.update('password')} type="text" value={this.state.password}/>
          </label>

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