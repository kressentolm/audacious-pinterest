/**
*
* Navigation
*
*/

import React from 'react';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages'; // can keep for testing fttb

class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="nav-list">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/boards">Boards</Link>
        <Link className="nav-item" to="/recent">Recent</Link>
      </div>
    );
  }
}

export default Navigation;
