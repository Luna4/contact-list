import { observable, action, runInAction, computed, useStrict } from 'mobx';
import Ajax from 'ajax';
import { isArray } from 'common/utils/validator';

useStrict(true);

export default class ContactStore {
  @observable loadStatus = 1;
  @observable contacts = [];

  @observable name = '';
  @observable filter = '';
  @observable modalInfo = {
    visibility: false,
    detail: {}
  };

  @computed get contactsCount() {
    return this.filteredContacts.length;
  }

  constructor(config) {
    if (config && config.name) {
      this.name = config.name;
    } else {
      this.name = 'not login';
    }
  }

  @computed get filteredContacts() {
    const matchesFilter = new RegExp(this.filter, 'i');
    return this.contacts.filter(contact => !this.filter || matchesFilter.test(contact.name));
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
