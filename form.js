document.getElementById('key-value-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var key = document.getElementById('key-input').value;
    var value = document.getElementById('value-input').value;

    sessionStorage.setItem(key, value);

    document.getElementById('key-input').value = '';
    document.getElementById('value-input').value = '';
});
