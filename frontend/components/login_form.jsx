import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginFields;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.login(this.state) //.then( () => this.props.history.push('/greeting'));
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  renderErrors() {
    const errors = this.props.errors.map(error => (
      <p key={error}>Whoops! We couldn’t find an account for that email address and password.</p>
    ))
    return (
      <div className="login-errors">
        {/* {errors} */}
        <ul>
          {errors}
        </ul>
      </div>
    )
  }
  
  render() {
    const errors = this.props.errors.length ? this.renderErrors() : ""
    return (
      <div className='overall'>
        <nav className='nav-bar'>
          <div className='nav-bar-left'>
            <img className='logo-wordmark' src={window.logoWordmarkURL} alt='logo-wordmark'/>
            <p className='logo-splatmark'>Splatwise</p>
          </div>
          <input className='nav-signup-button' type="submit" value="Sign Up" />
        </nav>
        <div className='wrapper'>
          <div className='login-page-left'>
            <img className="logo-square" src={window.logoSquareURL} alt="logo-square" />
          </div>
          <div className='login-page-right'>
            {this.renderErrors()}
            
            <h2>Welcome to Splatwise</h2>
            <form onSubmit={this.handleSubmit}>

              <div className='email'>Email address
                <input className='email-input' onChange={this.update('email')} type="text" value={this.state.email}/>
              </div>

              <div className='password'>Password
                <input className='password-input' onChange={this.update('password')} type="password" value={this.state.password}/>
              </div>

              <input className='login-button' type="submit" value="Log in" />
              {/* <button onClick="external link" value="G Sign up with Google"></button> */}
            </form>

            {/* <div>Forgot your password?
              <a href="">Click here</a>
            </div>

            <div>Or log in with <a href="">Facebook</a></div>
            <div>/</div>
            <div><a href="">G Google</a></div> */}
          </div>
        </div>
        <div className='footer'>
          <footer>
            <p className='made-with-smiles'>Made with ☻ in New York, NY, USA</p>
            <p className='copyright'>Copyright © 2019 Splatwise, Inc. All rights reserved</p>
          </footer>
        </div>
      </div>
    )
  }
}
export default LoginForm;
