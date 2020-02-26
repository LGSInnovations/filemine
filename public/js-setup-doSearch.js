
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
        const {fileName, results} = app.searchFile(phrases, file);
        app.fileResults[fileName] = results;
        const html = '<div class="file-results"><div class="results-file-name">' + fileName + '</div>' + 
            results.map((result, idx) => {
                if (result.hideLines) {
                    return '<div class="skipped">' +
                        `<div class="button iblock" data-file="${fileName}" data-idx="${idx}">Show Start</div>` +
                            'Skipped: <div class="count iblock">' + result.hideLines.length + '</div>' +
                        `<div class="button iblock" data-file="${fileName}" data-idx="${idx}" data-end="true">Show End</div>` +
                    '</div>';
                } else if (result.showLine) {
                    return '<pre class="match">' + result.showLine + '</pre>';
                } else {
                    console.error('Unknown result:', Object.keys(result));
                }
            }).join('\n') + '</div>';
        displayArea.insertAdjacentHTML('beforeend', html);
    });
};
