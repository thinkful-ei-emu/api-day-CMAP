'use strict';
/* global shoppingList, store, Item, api */
/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});

store.items.push(Item.create('apples'));



// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     const item = items[0];
//     return api.updateItem(item.id, { name: 'pear', checked: true});
//   })
//   .then(res => res.json())
//   .then(() => console.log('updated!'));

// api.getItems()
//   .then(res => res.json())
//   .then(res => console.log(res));git 

// console.log(api.BASE_URL);


// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });