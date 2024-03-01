window.onload = function() {
  visualizzaJSON();
};

function visualizzaJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var jsonContainer = document.getElementById('jsonContainer');
      var formattedJSON = JSON.stringify(data, null, 2);
      jsonContainer.innerHTML = `<article>${formatAsArticle(formattedJSON)}</article>`;
    })
    .catch(error => console.error('Si è verificato un errore durante il recupero dei dati JSON:', error));
}

function formatAsArticle(jsonString) {
  var json = JSON.parse(jsonString);
  var articleContent = '';
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      articleContent += `<h2>${capitalizeFirstLetter(key)}</h2>`;
      if (typeof json[key] === 'object') {
        articleContent += formatObject(json[key]);
      } else {
        articleContent += `<p>${json[key]}</p>`;
      }
    }
  }
  return articleContent;
}

function formatObject(obj) {
  var content = '<ul>';
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      content += `<li><strong>${capitalizeFirstLetter(key)}:</strong> ${obj[key]}</li>`;
    }
  }
 
