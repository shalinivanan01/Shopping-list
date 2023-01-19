import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
export default Controller.extend({
  userName:null,
  firstName: 'user',
  lastName: null,
  fullName: computed('firstName', 'lastName', function () {
    return `${this.firstName} ${this.lastName}`;
  }),
  itemValue:null,
  categories: A([
    {
      name: 'Grocery',
      items: ['egg', 'milk', 'bread', 'rice', 'flour', 'spices'],
    },
    {
      name: 'Grooming',
      items: ['face wash', 'soap', 'moisturiser', 'shower gel', 'deodarant'],
    },
    {
      name: 'Stationary',
      items: ['pencil', 'pen', 'eraser', 'sharpener', 'ruler'],
    },
  ]),
  actions: {
    setUserName() {
      let [firstName, lastName] = this.userName.split(/\s+/);
      this.set('firstName', firstName);
      this.set('lastName', lastName);
    },
  },
});
