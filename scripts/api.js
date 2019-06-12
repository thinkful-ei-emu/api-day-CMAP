'use strict';
/* global api */
/*eslint-env jquery*/

let api = (function() {
  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
  
        // In either case, parse the JSON stream:
        return res.json();
      })
  
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
  
        // Otherwise give back the data as resolved Promise
        return data;
      });
  }

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/CMAP';

  function getItems(){
    //return Promise.resolve('A successful response!');
    return listApiFetch(`${BASE_URL}/items`);
  }

  function createItem(name){
    let newItem = JSON.stringify({
      name,
    });

    return listApiFetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  }

  function updateItem(id, updateData){
    let uData = JSON.stringify(updateData);

    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: uData
    });
  }

  function deleteItem(id){
    return listApiFetch(`${BASE_URL}/items/${id}`, {
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
    deleteItem,
  };

  

}());