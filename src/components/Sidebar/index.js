import React, { Component } from 'react';
import cx from 'classnames';
import './index.css';

class Header extends Component {
  render() {
    const props = this.props;
    return (
      <section className={cx('l-sidebar ', props.sidebarVisibility ? '' : 'hide')}>
        <ul className="l-nav-list">
          <li><a className="item active" href="/">Contacts List</a></li>
          <li><a className="item" href="/admin">Admin Manage</a></li>
        </ul>
      </section>
    );
  }
}

export default Header;
