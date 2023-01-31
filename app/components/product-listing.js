import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class productListing extends Component{
  itemValue = null;

  @action  
  deleteItem(item) {
    this.args.product.items.removeObject(item);
  }
  @action
  addItem() {
    this.args.product.items.pushObject(this.itemValue);
  }
}
