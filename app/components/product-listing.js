import Component from '@ember/component';

export default Component.extend({
  itemValue:null,
  actions: {
    deleteItem(item) {
      this.category.items.removeObject(item);
    },
    addItem() {
      this.category.items.pushObject(this.itemValue);
    },
  },
});
