window.onload = function() {
  visualizzaJSON();
};

function visualizzaJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var jsonContainer = document.getElementById('jsonContainer');
      data.forEach(racchetta => {
        var racchettaDiv = document.createElement('div');
        racchettaDiv.classList.add('racchetta-dettaglio');
        racchettaDiv.innerHTML = `
          <h2>${racchetta.marca} ${racchetta.modello}</h2>
          <p><strong>Peso:</strong> ${racchetta.peso}</p>
          <p><strong>Lunghezza:</strong> ${racchetta.lunghezza}</p>
          <p><strong>Area della testa:</strong> ${racchetta.area_testa}</p>
          <p><strong>Schema corde:</strong> ${racchetta.schema_corde}</p>
          <p><strong>Prezzo:</strong> ${racchetta.prezzo}</p>
          <p><strong>Disponibilità colori:</strong> ${racchetta.disponibilità_colori.join(', ')}</p>
        `;
        jsonContainer.appendChild(racchettaDiv);
      });
    })
    .catch(error => console.error('Si è verificato un errore durante il recupero dei dati JSON:', error));
}
