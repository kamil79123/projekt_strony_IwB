$(document).ready(function() {
    $(".menu-card").click(function() {
        console.log('xd');
        const Id = $(this).attr("id");
        switch(Id)
        {
            case 'menu-card-1': {
                    console.log('1');
                    window.location.href = "./wiadomosci.html";
                }
                break;
                case 'menu-card-2': {

                    }
                break;
                case 'menu-card-3': {

                    }
                break;
                case 'menu-card-4': {

                    }
                break;
        }
    });
    $("#search-submit").click(function() {
        let keyword = $('#search-keyword').val();
        let titles = 'title,description,content';
        if ($('#search-titles').is(':checked')) {
            titles = 'title';
        }
        let language = $('#search-language').val();
        let date = $('#search-date').val();
        let date2 = $('#search-date-2').val();
        let sort = $('#search-sort').val();
        fetchNews(1, keyword, titles, language, date, date2, sort);
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
        let today = new Date();
        let formattedToday = today.toISOString().split('T')[0];
        let thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);
        let formattedThirtyDaysAgo = thirtyDaysAgo.toISOString().split('T')[0];
        let maxDate = today.toISOString().split('T')[0];
        let minDate = thirtyDaysAgo.toISOString().split('T')[0];
        let dateInput = document.getElementById('search-date');
        let dateInput2 = document.getElementById('search-date-2');
        dateInput.setAttribute('max', maxDate);
        dateInput.setAttribute('min', minDate);
        dateInput2.setAttribute('max', maxDate);
        dateInput2.setAttribute('min', minDate);
        $('#search-date').val(formattedThirtyDaysAgo);
        $('#search-date-2').val(formattedToday);
    });