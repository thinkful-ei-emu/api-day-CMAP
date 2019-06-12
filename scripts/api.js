'use strict';
/* global api */
/*eslint-env jquery*/

let api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/CMAP';

  function getItems(){
    //return Promise.resolve('A successful response!');
    return fetch(`${BASE_URL}/items`);
  }

  function createItem(name){
    let newItem = JSON.stringify({
      name,
    });

    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  }

  function updateItem(id, updateData){
    let uData = JSON.stringify(updateData);

    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: uData
    });
  }

  function deleteItem(id){
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

}());