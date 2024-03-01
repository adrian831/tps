window.onload = function() {
  visualizzaJSON();
};

function visualizzaJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var jsonContainer = document.getElementById('jsonContainer');
      jsonContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Si è verificato un errore durante il recupero dei dati JSON:', error));
}
