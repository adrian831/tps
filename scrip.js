// Funzione per leggere e visualizzare il JSON
function visualizzaJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var jsonContainer = document.getElementById('jsonContainer');
      jsonContainer.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Si è verificato un errore durante il recupero dei dati JSON:', error));
}

document.getElementById('viewButton').addEventListener('click', visualizzaJSON);
