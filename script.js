angular.module('myApp', [])
  .controller('MainController', function($scope, $location, $http) {
    $scope.goToSecondPage = function() {
      $http.get('data.json')
        .then(function(response) {
          var jsonString = JSON.stringify(response.data);
          $location.path('/secondPage').search({ json: jsonString });
        })
        .catch(function(error) {
          console.error('Errore durante il recupero dei dati JSON:', error);
        });
    };
  })
  .controller('SecondController', function($scope, $location, $sce) {
    var jsonString = $location.search().json;

    var data = JSON.parse(jsonString);

    $scope.formattedJSON = formatAsArticle(data);

    function formatAsArticle(data) {
      var articleContent = '';
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          articleContent += `<h2>${key}</h2>`;
          articleContent += '<ul>';
          var innerData = data[key];
          for (var innerKey in innerData) {
            if (innerData.hasOwnProperty(innerKey)) {
              articleContent += `<li><strong>${innerKey}:</strong> ${innerData[innerKey]}</li>`;
            }
          }
          articleContent += '</ul>';
        }
      }
      return $sce.trustAsHtml(articleContent);
    }
  });
