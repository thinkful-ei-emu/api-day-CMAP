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
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    })
  }


  return {
    getItems,
    createItem
  };

}());