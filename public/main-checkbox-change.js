
document.addEventListener('change',  event => {
    if (event.target.getAttribute('type') !== 'checkbox') {
        return;
    }
    app.doSearch();
});
