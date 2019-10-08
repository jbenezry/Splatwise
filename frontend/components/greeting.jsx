import React from 'react'


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;

  }

  render() {
    return (
      <div>
        {this.state.username}
        <input className="logout" onClick={this.props.logout} type="submit" value="Log Out"/>
      </div>
    )
  }
}

export default Greeting;