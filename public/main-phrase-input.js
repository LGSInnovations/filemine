
const registerSearchPhrase = (textInputElement) => {
	if (!event.target.value) return;
	app.showMoreInATopList([event.target.value], 'phrases');
	app.updateLocalStorageList('phrases');
	event.target.value = '';
	app.doSearch();
};
document.querySelector('.pane.phrases input[type="text"]').addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		registerSearchPhrase(event.target);
	}
});
document.querySelector('.pane.phrases input[type="text"]').addEventListener('blur', (event) => {
	registerSearchPhrase(event.target);
});
