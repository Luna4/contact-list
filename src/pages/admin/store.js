import { observable, action, runInAction, computed, useStrict } from 'mobx';
import Ajax from 'ajax';
import { isArray } from 'common/utils/validator';

useStrict(true);

export default class Store {
  @observable loadStatus = 1;
  @observable contacts = [];

  @computed get contactsCount() {
    return this.filteredContacts.length;
  }

  @computed get countsByFirstletter() {
    // eslint-disable-next-line
  	const result = Object.entries(this.contacts.reduce((r, i) => {if(r[i.name.substring(0,1)]){r[i.name.substring(0,1)] += 1;}else{r[i.name.substring(0,1)] = 1;} return r;}, {}));
    return result;
  }

  @action('fetch list') async fetchContactsList() {
    this.loadStatus = 0;
    const res = await Ajax({
      url: '/api/contactsList',
      type: 'GET',
      data: {
        delay: 500
      }
    });
    if (res && isArray(res) && res.length > 0) {
      runInAction('fetch success', () => {
        this.loadStatus = 1;
        this.contacts = res;
      });
    } else {
      runInAction('fetch fail', () => {
        this.loadStatus = -1;
        this.contacts = [];
        console.log(res.errmsg || `error：${res.errcode}`);
      });
    }
  }
}
