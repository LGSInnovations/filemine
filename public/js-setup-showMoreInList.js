
app.showMoreInList = (names, classname) => {
    const count = document.querySelector(`.pane.${classname} .count`);
    count.innerText = Number(count.innerText) + names.length;
    const paneBody = document.querySelector(`.pane.${classname} .pane-body`);
    names.forEach(name => {
        paneBody.insertAdjacentHTML('beforeend', `
            <div class="${classname} item" id="${classname}-${name}">
                <input type="checkbox" checked>
                <div class="iblock">${name}</div>
            </div>
        `);
    });
};
