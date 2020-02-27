
document.body.style.marginTop = '200%';
const dT = new ClipboardEvent('').clipboardData || // Firefox < 62 workaround exploiting https://bugzilla.mozilla.org/show_bug.cgi?id=1422655
  new DataTransfer(); // specs compliant (as of March 2018 only Chrome)
dT.items.add(new File(["This is\n  text content"], "sample.txt", {type: "text/plain", lastModified: Date.now()}));
const fileInput = document.querySelector('#file-input')
fileInput.files = dT.files;
console.assert(fileInput.files.length === 1, 'Test1 failed to set up sample file.');
fileInput.dispatchEvent(new Event('change'));
const phraseInput = document.querySelector('.phrases input[type="text"]');
phraseInput.value = 'content';
phraseInput.dispatchEvent(new Event('blur'));
setTimeout(() => {
    const bottom = document.querySelector('#bottom');
    console.assert(bottom.querySelectorAll('.file-results').length === 1, 'Test1 failed to display 1 result');
    console.assert(document.querySelector('.results-file-name').innerText === 'sample.txt', 'Test1 failed to display the filename "sample.txt"');
    console.assert(document.querySelector('.file-results').childElementCount === 3, 'Test1 file results did not have three parts (file name, skipped, and match)');
    console.assert(document.querySelector('.skipped').childElementCount === 3, 'Test1 skipped did not have three parts (show start, count, and show end)');
    console.assert(document.querySelector('.match').innerText === '  text content', 'Test1 did not show matched line "  text content"');
    console.assert(!document.querySelector('.file-results').innerText.includes('This is'), 'Test1 showed unmatched line "This is" before it should have');
    document.querySelector('.button[data-file]').click()
    console.assert(document.querySelector('.file-results').innerText.includes('This is'), 'Test1 did not show context line "This is" when it should have');
    console.info('Test1 ran');
    document.querySelector('.phrases .pane-body').innerHTML = '';
    document.querySelector('.files .pane-body').innerHTML = '';
    document.querySelector('#bottom').innerHTML = '';
    document.querySelectorAll('.count').forEach(span => span.innerText = '0');
    app.fileResults = {};
    app.files = [];
    document.body.style = '';
}, 15);
