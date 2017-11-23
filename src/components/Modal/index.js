import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './index.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onConfirm: props.onConfirm,
      onCancel: props.onCancel,
      visible: props.modalVisible,
      title: props.title,
      footer: props.footer,
      header: props.header,
      type: props.type,
      size: props.size
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.modalVisible === true && newProps.modalVisible === false) {
      this.onCancel();
    }
    if (newProps.modalVisible === true) {
      this.setState({
        visible: newProps.modalVisible
      });
    }
  }

  onCancel() {
    this.setState({
      visible: false
    });
  }

  render() {
    const { visible, title, header, footer, type, size } = this.state;
    const modalClz = cx(visible ? 'modal-show' : '', 'ui-modal');

    const headerNode = header ? (
      <div className="header">
        {title}
        <i className="i-ico-close icon-close" onClick={this.props.onCancel} />
      </div>
    ) : null;

    const footerNode = footer ? (
      <div className="footer">
        {
          type === 'msg' ? (
            <button type="button" className="l-btn l-btn-primary" onClick={this.state.onCancel}>confirm</button>
          ) : (
            <div>
              <button type="button" className="l-btn l-btn-primary" onClick={this.state.onConfirm}>confirm</button>
              <button type="button" className="l-btn" onClick={this.state.onCancel}>cancel</button>
            </div>
          )
      }
      </div>
    ) : null;

    const contentClass = `modal-content ${size}`;

    const result = (
      <div className={modalClz}>
        <div className="ui-mask" onClick={this.state.onCancel} />
        <div className="ui-modal-main">
          <div className={contentClass}>
            { headerNode }
            <div className="body">
              {this.props.children}
            </div>
            { footerNode }
          </div>
        </div>
      </div>
    );

    return result;
  }
}

Modal.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  modalVisible: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

Modal.defaultProps = {
  size: 'tiny',
  footer: false,
  header: true,
  type: 'msg', // confirm, msg
  title: 'tips',
  modalVisible: false,
  onCancel: () => false,
  onConfirm: () => false
};

export default Modal;
