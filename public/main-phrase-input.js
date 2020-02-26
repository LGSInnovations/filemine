
const registerSearchPhrase = (textInputElement) => {
    if (!event.target.value) return;
    app.showMoreInList([event.target.value], 'phrases');
    event.target.value = '';
    app.doSearch();
};
document.querySelector('.pane.phrases input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        registerSearchPhrase(event.target);
    }
});
document.querySelector('.pane.phrases input').addEventListener('blur', (event) => {
    registerSearchPhrase(event.target);
});
