

app = { files: [], fileResults: {} };

if (!localStorage.getItem('phrases')) {
	localStorage.setItem('phrases', JSON.stringify([]));
}

