import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteItem(item) {
      this.category.items.removeObject(item);
    },
    addItem() {
      this.category.items.pushObject(this.itemValue);
    },
  },
});
