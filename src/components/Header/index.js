import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    const props = this.props;
    return (
      <header className="l-header" >
        <div className="menu-button" onClick={() => { props.toggleSideBar(); }} >
          <i className="icon-hamburger" />
        </div>
        <div className="l-widget">
          <h4>SMART CONTACTS</h4>
        </div>
      </header>
    );
  }
}

export default Header;
