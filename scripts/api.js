let api = (function() {

const BASE_URL = "https://thinkful-list-api.herokuapp.com/CMAP";

function getItems(){
    return Promise.resolve('A successful response!');
};


return {
    getItems
};

}());