import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import Modal from 'components/Modal';
import Loading from 'components/Loading';
import * as config from './config';
import './style.css';

@observer
class ListView extends React.Component {

  componentWillMount() {
    this.props.contactStore.fetchContactsList();
  }

  @action.bound
  handleFilter(e) {
    this.props.contactStore.filter = e.target.value;
  }

  @action.bound
  toggleModal() {
    this.props.contactStore.modalInfo.visibility = !this.props.contactStore.modalInfo.visibility;
  }

  @action.bound
  handleContactItemClick(person) {
    this.props.contactStore.modalInfo.detail = person;
    this.props.contactStore.modalInfo.visibility = !this.props.contactStore.modalInfo.visibility;
  }

  renderTbody(arr) {
    const ret = [];
    if (arr && arr.length > 0) {
      arr.forEach((row) => {
        ret.push(
          <tr key={`list-tbody-tr-${row.id}`} onClick={() => { this.handleContactItemClick(row); }}>
            <td width={100}>{row.name}</td>
            <td width={150}>{row.email}</td>
            <td width={100}>{row.phone}</td>
          </tr>
        );
      });
    } else {
      ret.push(
        <tr key="list-tbody-none">
          <td colSpan="3">none... ...</td>
        </tr>
      );
    }
    return ret;
  }

  render() {
    const {
      loadStatus,
      filter,
      filteredContacts,
      contactsCount,
      modalInfo
    } = this.props.contactStore;

    const theadNodes = config.tableHead.map(item => (
      <th key={`list-thead-th-${item.dataIndex}`}>
        <span>{item.title}</span>
      </th>
    ));

    return (
      <div className="list-wrap">
        <p className="l-segment">My Contacts</p>

        {/* filter */}
        <section className="filter-wrap">
          <input
            type="text"
            placeholder="text name for filter"
            className="filter-input"
            value={filter} onChange={this.handleFilter}
          />
          <span className="input-suffix">
            <i className="icon-search" />
          </span>
        </section>

        {/* grid */}
        <div className="l-table">
          <table>
            <thead className="table-thead">
              <tr>{ theadNodes }</tr>
            </thead>
            <tbody className="table-tbody">
              { this.renderTbody(filteredContacts) }
            </tbody>
          </table>

          <Loading visible={loadStatus === 0} />
        </div>

        <p className="l-segment">total counts: { contactsCount }</p>

        {/* business card modal */}
        <Modal
          title="business card"
          size="tiny"
          type="msg"
          footer
          onCancel={this.toggleModal}
          modalVisible={modalInfo.visibility}
        >
          <div className="msg-con">
            { modalInfo.detail && modalInfo.detail.name }
          </div>
        </Modal>

      </div>
    );
  }
}

export default ListView;
