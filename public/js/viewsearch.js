'use strict';
(function() {

    function SearchView (items) {        
        this.DOMElements = {
            refreshBtn  : document.querySelector(".view-search__refresh-btn"),
            searchField : document.querySelector(".view-search__input")
        };
        this.searchValue = '';
        this.eventHolder = $({});
        this.updateEventName = "filmsUpdate";
        this.initListeners();
    }
    
    SearchView.prototype = {
        initListeners : function () {
            this.DOMElements.refreshBtn.addEventListener("click", (event) => {
                this.eventHolder.trigger( this.updateEventName , [{searchValue: this.DOMElements.searchField.value}]);
            });
        } 
    }
    
    window.app = window.app || {};
    window.app.SearchView = SearchView; 
}());
