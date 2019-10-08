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
      <li key={error}>
        {error}
      </li>
    ))
    return (
      <ul className="errors">
        <p>The following errors occurred:</p><br/>
        {errors}
      </ul>
    )
  }
  
  render() {
    
    return (
      <div className='wrapper'>
        <div className='login-page-left'>
          <img className="logo-square" src={window.logoSquareURL} alt="logo-square" />
        </div>
        <div className='login-page-right'>
          {this.renderErrors()}
          
          <h2>WELCOME TO SPLATWISE</h2>
          <form onSubmit={this.handleSubmit}>

            <div>Email address
              <input onChange={this.update('email')} type="text" value={this.state.email}/>
            </div>

            <div>Password
              <input onChange={this.update('password')} type="password" value={this.state.password}/>
            </div>

            <input type="submit" value="Log in" />
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
    )
  }
}
export default LoginForm;
