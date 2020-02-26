
app.searchFile = (phrases, file) => {
    const {recent, results} = file.lines.reduce((state, line) => {
        const spaces = line.match(/^s*/)[0];
        const isMatch = phrases.some(phrase => line.toLowerCase().includes(phrase.toLowerCase()));
        if (isMatch && state.recent.length) {
            state.results.push({hideLines: state.recent});
            state.recent = [];
        }
        if (isMatch) {
            state.results.push({showLine: line}); // TODO highlight 1 or more matches? hard with html
        } else {
            state.recent.push(line);
        }
        state.numSpaces = spaces.length;
        return state;
    }, {recent: [], results: []});
    // const maxNumSize = String(file.lines.length).length;
    // const matches = file.lines
    //     .map((line, i) => [Array(maxNumSize - String(i).length).fill(' ').join('') + i, line])
    //     .map(linePair => linePair.join(': '));
    if (recent.length) {
        results.push({hideLines: recent});
    }
    return ({fileName: file.name, results});
};
