
app.searchFile = (phrases, file) => {
    const maxNumSize = String(file.lines.length).length;
    const matches = file.lines
        .map((line, i) => [Array(maxNumSize - String(i).length).fill(' ').join('') + i, line])
        .filter(linePair => {
            return phrases.some(phrase => linePair[1].toLowerCase().includes(phrase.toLowerCase()));
        })
        .map(linePair => linePair.join(': '));
    return ({...file, matches});
};
