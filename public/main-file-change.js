
document.querySelector('#file-input').addEventListener('change',  event => {
    const fileArray = Array.from(event.target.files);
    app.showMoreInList(fileArray.map(file => file.name), 'files');
    app.ready = false;
    let numFiles = 0;
    fileArray.forEach(file => {
        // Note: app.files will not necessarily be in the same order as the displayed list
        file.text().then(text => {
            app.files.push({name: file.name, lines: text.split('\n')});
            if (++numFiles === fileArray.length) {
                app.ready = true;
                app.doSearch();
            }
        });
    });
});
