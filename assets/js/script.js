$(document).ready(function () {
    $(".menu-card").click(function () {
        const Id = $(this).attr("id");
        switch (Id) {
            case 'menu-card-1': {
                window.location.href = "./wiadomosci.html";
            }
                break;
            case 'menu-card-2': {
                window.location.href = "./nasa.html";
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
    $("#search-submit").click(function () { // Wychwytujemy kliknięcie przycisku
        let search = $('#search-keyword').val(); // Zmienna z zapytaniem
        let search_fields = 'title,main_text'; // Zmienna wskazująca, gdzie szukamy w artykule (np. tytuł, tekst itd.)
        if ($('#search-titles').is(':checked')) {
            search_fields = 'title'; // Jeśli checkbox zaznaczony to szukamy tylko w tytule
        }
        let language = $('#search-language').val(); // Język wyszukiwania
        let published_after = $('#search-date').val(); // Od kiedy wyszukujemy
        let sort = $('#search-sort').val(); // Jak sortujemy wyniki
        fetchNews(search, language, sort, published_after, search_fields); // Wywołujemy funkcję z tymi parametrami
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let today = new Date();
    let formattedToday = today.toISOString().split('T')[0];
    let threeSixty = new Date();
    threeSixty.setDate(today.getDate() - 360);
    let formattedthreeSixty = threeSixty.toISOString().split('T')[0];
    let maxDate = today.toISOString().split('T')[0];
    let minDate = threeSixty.toISOString().split('T')[0];
    let dateInput = document.getElementById('search-date');
    let dateInput2 = document.getElementById('search-date-2');
    dateInput.setAttribute('max', maxDate);
    dateInput.setAttribute('min', minDate);
    $('#search-date').val(formattedthreeSixty);
});