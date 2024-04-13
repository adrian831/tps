document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchButton').addEventListener('click', searchWordPress);
});

function searchWordPress() {
  var keyword = document.getElementById('keyword').value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: searchInPage,
        args: [keyword]
      });
    } else {
      console.error('Nessuna scheda attiva trovata.');
    }
  });
}

function searchInPage(keyword) {
  const url = `https://www.google.com/search?q=${keyword}+site:wordpress.com`;
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const titles = doc.querySelectorAll('h3');

      let resultsHtml = '';
      titles.forEach(title => {
        resultsHtml += `<p>${title.textContent}</p>`;
      });

      const resultsDiv = document.createElement('div');
      resultsDiv.innerHTML = resultsHtml;
      document.body.appendChild(resultsDiv);
    })
    .catch(error => {
      console.error('Errore durante il web scraping:', error);
    });
}
