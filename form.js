document.getElementById('string-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var string = document.getElementById('string-input').value;
    var legend = {};
    sessionStorage.setItem('legend', JSON.stringify(legend));
    var table = document.getElementById('legend-table').getElementsByTagName('tbody')[0];
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    var problems = document.getElementsByClassName('math-problems')[0];
    while (problems.firstChild) {
        problems.removeChild(problems.firstChild);
    }

    var letters = string.split('');
    var legendLetters = [...letters];
    legendLetters.sort(() => Math.random() - 0.5);

    var usedLetters = [];
    var usedNumbers = [];

    for (var i = 0; i < legendLetters.length; i++) {
        var letter = legendLetters[i];
        if (usedLetters.includes(letter)) {
            continue;
        }

        var number;
        do {
            number = Math.floor(Math.random() * 20) + 1;
        } while (usedNumbers.includes(number));

        legend[letter] = number;
        usedLetters.push(letter);
        usedNumbers.push(number);

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = number;
        cell2.innerHTML = letter;
    }

    var wordElement = document.getElementById('word');
    var wordAccum = {};

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        let number = legend[letter];

        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = '1 + ' + (number - 1) + ' = ?';
        input.addEventListener('input', function(event) {
            if (event.target.value == letter) {
                wordAccum[i] = letter;
                var sortedWord = Object.keys(wordAccum).sort().map(key => wordAccum[key]).join('');
                wordElement.textContent = sortedWord;
                if (sortedWord === string) {
                    document.getElementById('success-message').textContent = 'Success!';
                }
            }
        });
        problems.appendChild(input);
    }

    sessionStorage.setItem('legend', JSON.stringify(legend));
    document.getElementById('string-input').value = '';
});
