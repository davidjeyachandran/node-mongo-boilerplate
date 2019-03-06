var dbFunctions = (function() {
    'use strict';
    
    return {
        postData: function(endpoint, nombre, monto, categoria) {
            fetch(endpoint, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify({nombre, monto, categoria}),
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
