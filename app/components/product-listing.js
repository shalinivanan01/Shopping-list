import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteItem(item) {
      let list = document.querySelector(`.${this.category.name}`);
      let listItem = document.querySelector(`[data-itemname = "${item}"]`);
      list.removeChild(listItem);
      this.category.items.pop(item);
    },
    addItem() {
      let list = document.querySelector(`.${this.category.name}`);
      let item = document.getElementById(`${this.category.name}`);
      let itemValue = item.value;
      
      const listItem = document.createElement('li');
      const divElem = document.createElement('div');
      const delBtn = document.createElement('button');
      const brTag = document.createElement('br');

      if (itemValue != '') {
        listItem.textContent = itemValue;
        divElem.dataset.itemname = itemValue;
        delBtn.textContent = 'Delete';
        delBtn.classList.add('btn','btn-outline-dark','btn-sm');
        delBtn.addEventListener('click',this.actions.deleteItem.bind(this,itemValue));

        listItem.appendChild(delBtn);
        divElem.appendChild(listItem);
        divElem.appendChild(brTag);
        list.appendChild(divElem);

        this.category.items.push(itemValue);
      }
    },

  },
});
