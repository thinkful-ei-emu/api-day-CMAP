'use strict';
/* global shoppingList, store, Item, api */
/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

// api.getItems()
//   .then(res => res.json())
//   .then(res => console.log(res));git 

// console.log(api.BASE_URL);
