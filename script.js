window.onload = function() {
  visualizzaJSON();
};

function visualizzaJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var jsonContainer = document.getElementById('jsonContainer');
      jsonContainer.innerHTML = formatAsArticle(JSON.stringify(data));
    })
    .catch(error => console.error('Si è verificato un errore durante il recupero dei dati JSON:', error));
}

function formatAsArticle(jsonString) {
  var data = JSON.parse(jsonString);
  var articleContent = '';
  data.forEach(racchetta => {
    articleContent += `<article>
                          <h2>${racchetta.marca} ${racchetta.modello}</h2>
                          <p><strong>Peso:</strong> ${racchetta.peso}</p>
                          <p><strong>Lunghezza:</strong> ${racchetta.lunghezza}</p>
                          <p><strong>Area della testa:</strong> ${racchetta.area_testa}</p>
                          <p><strong>Schema corde:</strong> ${racchetta.schema_corde}</p>
                          <p><strong>Prezzo:</strong> ${racchetta.prezzo}</p>
                          <p><strong>Disponibilità colori:</strong> ${racchetta.disponibilità_colori.join(', ')}</p>
                        </article>`;
  });
  return articleContent;
}
