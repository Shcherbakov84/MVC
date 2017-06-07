'use strict';
(function(){
    
    var model = function() {
        const Url = setUrl('http://www.omdbapi.com');
        const apiKey = setApiKey('520bbe17');

        function setUrl(url) {
            return '' + url;
        }
       
        function setApiKey(key) {
            return '' + key;
        }

        function getData(filmName = 'Godfather', pageNumber = 1) {
            return $.get( `${Url}/?page=${pageNumber}&s=${filmName}&apikey=${apiKey}`, function( data ) { 
                return data || {};
            })            
        }
        
        function saveData(item) {
            console.log("Data successfuly saved: ");
            console.log(item);
        }
       
        return {
            getData : getData,
            saveData: saveData
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();  
}())

