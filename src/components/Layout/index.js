import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './index.css';

const MAX_SCREEN_SIZE = 500;

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisibility: window.screen.width > 600
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  toggleSideBar() {
    const { sidebarVisibility } = this.state;
    this.setState({
      sidebarVisibility: !sidebarVisibility
    });
  }

  updateDimensions() {
    const screenSize = window.innerWidth ||
      document.documentElement.clientWidth ||
      document.getElementsByTagName('body')[0].clientWidth;
    this.setState({
      sidebarVisibility: screenSize > MAX_SCREEN_SIZE
    });
  }

  render() {
    const props = this.props;
    const { sidebarVisibility } = this.state;
    return (
      <div className="page-layout">
        <Header sidebarVisibility={sidebarVisibility} toggleSideBar={() => this.toggleSideBar()} />
        <div className="l-wrapper">
          <Sidebar sidebarVisibility={sidebarVisibility} />
          <div className="l-main-content" >
            { props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
