window.onload = function() {
  visualizzaJSON();
};

function visualizzaJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var jsonContainer = document.getElementById('jsonContainer');
      var formattedJSON = JSON.stringify(data, null, 2);
      var article = document.createElement('article');
      article.innerHTML = `<pre>${formattedJSON}</pre>`;
      jsonContainer.appendChild(article);
    })
    .catch(error => console.error('Si è verificato un errore durante il recupero dei dati JSON:', error));
}
