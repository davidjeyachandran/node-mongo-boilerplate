var dbFunctions = (function() {
    'use strict';
    
    return {

        getData: function(endpoint, showData) {
            fetch(endpoint)
            .then((res) => res.json())
            .then((data) => showData(data))
            .catch((err) => console.log(err))
        },

        postData: function(endpoint, data) {
            fetch(endpoint, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        },

        deleteData: function(endpoint) {
            fetch(endpoint, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }
    }

}());
