document.getElementById('key-value-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var key = document.getElementById('key-input').value;
    var value = document.getElementById('value-input').value;

    var legend = JSON.parse(sessionStorage.getItem('legend') || '{}');
    legend[key] = value;
    sessionStorage.setItem('legend', JSON.stringify(legend));

    document.getElementById('key-input').value = '';
    document.getElementById('value-input').value = '';
});
