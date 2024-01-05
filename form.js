document.getElementById('key-value-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var key = document.getElementById('key-input').value;
    var value = document.getElementById('value-input').value;

    var legend = JSON.parse(sessionStorage.getItem('legend') || '{}');
    legend[key] = value;
    sessionStorage.setItem('legend', JSON.stringify(legend));

    var table = document.getElementById('legend-table').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = value;

    document.getElementById('key-input').value = '';
    document.getElementById('value-input').value = '';
});
