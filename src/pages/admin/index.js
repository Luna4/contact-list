import React from 'react';
import { observer } from 'mobx-react';
import Loading from 'components/Loading';
import './index.css';

@observer
class AdminView extends React.Component {

  componentWillMount() {
    this.props.store.fetchContactsList();
  }

  render() {
    const {
      loadStatus,
      countsByFirstletter
    } = this.props.store;

    // eslint-disable-next-line
    const nodes = countsByFirstletter && countsByFirstletter.length > 0 && countsByFirstletter.map(item => (
      <li key={`alphabet-${item[0]}`} className="catageroy-item">
        <p>{item[0]}</p>
        <p className="intent">{item[1]}</p>
      </li>
    ));

    return (
      <div className="content-wrap">
        <p className="l-segment">Contact counts category by name alphabet</p>
        <ul className="category-wrap">
          { nodes }
        </ul>
        <Loading visible={loadStatus === 0} />
      </div>
    );
  }
}

export default AdminView;
