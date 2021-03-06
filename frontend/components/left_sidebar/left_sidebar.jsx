import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import { values } from 'lodash';

class LeftSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    //So it doesn't try to render currentUser.username and return a console error.

    if (!nextProps.currentUser) return false;
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      hashHistory.push("/login");
    }
  }

  openModal() {
    this.props.openModal("friend", "create");
  }

  handleLogout() {
    this.props.logout();
  };

  futureImplementation() {
    youAreOwed = (
      <h3 className="amount">
        You are owed<br/>
      <span className="green">$34.65</span>
      </h3>
    );
  }

  render() {
    const friendsList = values(this.props.currentUser.friends).slice(0, 3);
    const renderFriends = friendsList.map(
       (friend, idx) => (
      <li key={`friend-${idx}`}>{friend.username}</li>
    ));

    return(
      <div className='sidebar-content'>
        <section className="user-greeting">
          <img src="http://www.aveleyman.com/Gallery/ActorsL/10388-24033.gif" />
          <h2>Hello, {this.props.currentUser.username}</h2>

        </section>

        <div className="section-split"></div>

        <section>
          <p className=""><i className="fa fa-file-text" aria-hidden="true"></i>Bills</p>

          <p className="deactivated"><i className="fa fa-calendar"
            aria-hidden="true"></i>Recent Activity</p>

          <p className="deactivated"><i className="fa fa-usd"
            aria-hidden="true"></i>All Expenses</p>
        </section>

        <div className="section-split"></div>

        <section className="user-friends clearfix">
          <div className="sidebar-friends-list">
            <p><i className="fa fa-users"
              aria-hidden="true"></i>Friends</p>
            <ul>
              {renderFriends}
            </ul>
          </div>
          <div className="section-split"></div>
          <div className="add-friend" onClick={this.openModal}>
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </div>

        </section>

        <div className="section-split"></div>

        <section>

          <a href="https://github.com/clapinton/Diffindo/blob/master/README.md"
            target="_blank">
            <p><i className="fa fa-question"
              aria-hidden="true"></i>Help</p>
          </a>

          <a href="https://www.linkedin.com/in/ericoliveira"
            target="_blank">
            <p><i className="fa fa-user"
              aria-hidden="true"></i>Contact Us</p>
          </a>

          <button onClick={this.handleLogout}><i className="fa fa-power-off"
            aria-hidden="true"></i>Logout</button>
        </section>

      </div>
    );
  }
}

export default LeftSidebar;
