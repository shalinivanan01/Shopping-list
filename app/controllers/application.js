import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
export default Controller.extend({
  firstName: 'user',
  lastName: null,
  fullName: computed('firstName', 'lastName', function () {
    console.log(this.firstName);
    return `${this.firstName} ${this.lastName}`;
  }),
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
      let userName = document.getElementById('userName');
      let [firstName, lastName] = userName.value.split(/\s+/);
      this.set('firstName', firstName);
      this.set('lastName', lastName);
    },
  },
});
