$(document).ready(function() {
    $('#search-button').on('click', function() {
        var searchInput = $('#search-input').val();
        if (searchInput.trim() !== '') {
            var apiUrl = 'https://wordpress.com/read/search?q=' + encodeURIComponent(searchInput);

            $.ajax({
                url: apiUrl,
                method: 'GET',
                success: function(response) {
                    displayResults(response);
                },
                error: function(error) {
                    console.log('Errore nella richiesta API:', error);
                }
            });
        }
    });

    function displayResults(data) {
        $('#results-container').empty();
        var articles = $(data).find('.post-title');

        if (articles.length > 0) {
            articles.each(function() {
                var title = $(this).text();
                $('#results-container').append('<p>' + title + '</p>');
            });
        } else {
            $('#results-container').append('<p>Nessun articolo trovato.</p>');
        }
    }
});
