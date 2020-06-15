
document.addEventListener('change',  event => {
    if (event.target.getAttribute('type') !== 'checkbox') {
        return;
    }
    if (event.target.closest('.phrases.item')) {
	    app.updateLocalStorageList('phrases');
    }
    app.doSearch();
});
