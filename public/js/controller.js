(function(){
    
	var model = window.app.model,
        Gallery = window.app.Gallery,
        SearchView = window.app.SearchView,
        gallery = null,
        searchView = null;
    
    function bindUpdate() {
        searchView.eventHolder.on( searchView.updateEventName, (event, item) => {
            model.getData(item.searchValue).then((data) => {
                gallery.buildGalleryBySearch(data);
            });    
        });
    }
    
    function initGalleries(data){
        gallery = new Gallery(data);  
        searchView = new SearchView(); 
    }
    
    function init() {
            model.getData().then((data) => {
                initGalleries(data);
                bindUpdate();
            });
    }

    init();
}())
