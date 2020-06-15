
app.updateLocalStorageList = (className) => {
    const newList = [...document.querySelectorAll('.phrases.item')]
        .filter(item => item.querySelector('input[type="checkbox"]').checked)
        .map(item => item.querySelector('div.iblock').innerText)
    localStorage.setItem(className, JSON.stringify(newList));
}
