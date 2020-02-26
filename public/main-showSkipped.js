
document.addEventListener('click', (event) => {
    const fileName = event.target.getAttribute('data-file');
    const resultsIdx = event.target.getAttribute('data-idx');
    if (!fileName || !resultsIdx) return;
    const isEnd = event.target.getAttribute('data-end');
    const skipped = app.fileResults[fileName][resultsIdx].hideLines;
    const moreLines = isEnd ? skipped.splice(-10, 10) : skipped.splice(0, 10);
    const skippedLine = event.target.closest('.skipped');
    const where = isEnd ? 'afterEnd' : 'beforeBegin';
    skippedLine.insertAdjacentHTML(where, '<pre class="context">' + moreLines.join('\n') + '</pre>');
    if (!skipped.length) {
        skippedLine.style.display = 'none';
    } else {
        skippedLine.querySelector('.count').innerText = skipped.length;
    }
});
