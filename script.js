// script.js

$(document).ready(function(){
    // Initialize the slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // AJAX Search
    $('#search').on('input', function() {
        const query = $(this).val();
        if (query.length > 2) {
            searchPosts(query);
        } else {
            $('.search-results').empty();
        }
    });

    function searchPosts(query) {
        // AJAX call to fetch posts (for demonstration purposes, replace with actual URL)
        $.get(`https://yourblog.blogspot.com/search?q=${query}`, function(data) {
            $('.search-results').html(data);
        });
    }
});
