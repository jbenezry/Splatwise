import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.signupFields
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
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
  
  renderErrors() {
    const errors = this.props.errors.map(error => {
      if (error.startsWith('Username can\'t')) {
        return (<li key={error}>First name can't be blank</li>)
      } else {
        return (
          <li key={error}>
            {error}
          </li>
        )
      }
    })
    return (
      <div className="signup-errors">
        <p>The following errors occurred:</p>
        <ul>
          {errors}
        </ul>
      </div>
    )
  }
  
  
  render() {
    // debugger
    const errors = this.props.errors.length ? this.renderErrors() : "" // 0 is falsey in JS, so checking the length of the errors array effects a conditional
    return (
      <div className='wrapper'>
        <div className='signup-page-left'>
          <img className='logo-square' src={window.logoSquareURL} alt='logo-square' />
        </div>
        <div className='signup-page-right'>
          <h2>Introduce Yourself</h2>
          {errors}
          
          <form className="signup-form" onSubmit={this.handleSubmit}>

            <div className='name'><strong>Hi there! My name is</strong><br/>
              <input className='name-input' onChange={this.update('username')} type="text" value={this.state.name}/>
            </div> 
            <br/>

            <div className='email'>Here’s my <strong>email address:</strong><br/>
              <input className='email-input' onChange={this.update('email')} type="text" value={this.state.email}/>
            </div>
            <br/>
          

            <div className='password'>And here’s my <strong>password:</strong><br/>
              <input className='password-input' onChange={this.update('password')} type="password" value={this.state.password}/>
            </div>
            <br/>

            {/* RECAPTCHA - I'm not a robot */}

            <input className='signup-button' type="submit" value="Sign me up!" />
            {/* <p>or</p>
            <br/>
            <button onClick="external link" value="G Sign up with Google"></button>

          <div>By signing up, you accept the Splatwise Terms of Service.</div><br/>
          <div>Don't use USD for currency? Click here.</div> */}
          </form>

        </div>
      </div>
    )
  }
}

export default SignupForm;