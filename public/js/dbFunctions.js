var dbFunctions = (function() {
    'use strict';
    
    return {

        getData: function(endpoint, showData) {
            console.log('getData');
            fetch(endpoint)
            .then((res) => res.json())
            .then((data) => showData(data))
            .catch((err) => console.log(err))
        },

        postData: function(endpoint, data, showData, endpointShowData) {
            fetch(endpoint, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => this.getData(endpointShowData, showData))
            .catch((err) => console.log(err))
        },

        deleteData: function(endpoint, showData, endpointShowData) {
            fetch(endpoint, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => this.getData(endpointShowData, showData))
            .catch((err) => console.log(err))
        }
    }

}());
