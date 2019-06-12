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
    console.log(updateData);
    console.log(id);
    let uData = JSON.stringify(updateData);
    console.log(uData);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: uData
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    //findAndUpdate
  };

}());