import React from 'react'
import Navbar from './navbar'
import UsersIndex from './users_index'
import FriendsIndex from './friends_index'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  componentDidMount() {
    // debugger
    this.props.fetchAllUsers();
  }

  render() {
      // const friends = this.props.users.map(user => {
    //   this.props.currentUser.filter()
    //   <li>{user.username}</li>
    // })
    
    return (
      <div className='wrapper'>
        <Navbar/>
        <div className='sidenav'>
          <ul>
            <FriendsIndex/>
          </ul>
          <br/>
            <UsersIndex/>
        </div>
      </div>
    )
  }
}

export default Dashboard;