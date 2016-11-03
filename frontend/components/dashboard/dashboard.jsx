import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import LeftSidebarContainer from '../left_sidebar/left_sidebar_container';
import BillsContainer from '../bills/bills_container';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillUpdate");
    if (!this.props.currentUser) {
      this.props.router.push("/login");
    }
  }

  componentWillMount() {
    
  }

  render() {

    return(
      <div>
        <LeftSidebarContainer />
        <BillsContainer />
      </div>
    );
  }
}

export default withRouter(Dashboard);
