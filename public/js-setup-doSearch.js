
app.doSearch = () => {
    const displayArea = document.querySelector('#bottom');
    displayArea.innerHTML = '';
    const fileItems = document.querySelectorAll('.files.item')
    const isSelectedLookup = Array.from(fileItems).reduce((lookup, item) => {
        lookup[item.innerText.trim()] = item.querySelector('input').checked;
        return lookup;
    }, {});
    const phrases = Array.from(document.querySelectorAll('.phrases.item'))
        .filter(item => item.querySelector('input').checked)
        .map(item => item.innerText.trim());
    app.files.forEach(file => {
        if (!isSelectedLookup[file.name]) {
            return;
        }
        const {name, matches} = app.searchFile(phrases, file);
        displayArea.innerHTML += '<pre>' + JSON.stringify({name, matches}, null, 4) + '</pre>';
    });
};
