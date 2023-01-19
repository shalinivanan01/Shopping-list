import Component from '@ember/component';

export default Component.extend({
  itemValue:null,
  actions: {
    deleteItem(item) {
      this.category.items.removeObject(item);
    },
    addItem() {
      console.log(this);
      this.category.items.pushObject(this.itemValue);
    },
  },
});
