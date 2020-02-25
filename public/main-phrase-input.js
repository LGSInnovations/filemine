
document.querySelector('.pane.phrases input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        app.showMoreInList([event.target.value], 'phrases');
        event.target.value = '';
        app.doSearch();
    }
});
