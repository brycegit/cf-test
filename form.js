document.getElementById('string-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var string = document.getElementById('string-input').value;
    var legend = JSON.parse(sessionStorage.getItem('legend') || '{}');
    var table = document.getElementById('legend-table').getElementsByTagName('tbody')[0];
    var problems = document.getElementsByClassName('math-problems')[0];

    var letters = string.split('');
    letters.sort(function() { return 0.5 - Math.random() });

    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        var number = Math.floor(Math.random() * 20) + 1;
        legend[letter] = number;

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = letter;
        cell2.innerHTML = number;

        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = '1 + ' + (number - 1) + ' = ?';
        problems.appendChild(input);
    }

    sessionStorage.setItem('legend', JSON.stringify(legend));
    document.getElementById('string-input').value = '';
});
