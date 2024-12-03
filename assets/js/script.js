$(document).ready(function () {
var sort = 'new';

    $('#new').click(function () {
        if(sort != 'new')
        {
            $('#old').toggleClass('active');
            $('#new').toggleClass('active');
            sort = 'new';
            szukaj(sort);
        }
       
    });
    $('#old').click(function () {
        if(sort != 'old')
        {
            $('#new').toggleClass('active');
            $('#old').toggleClass('active');
            sort = 'old';
            szukaj(sort);
        }

    });


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
                window.location.href = "./astro.html";
            }
                break;
            case 'menu-card-4': {

            }
                break;
        }
    });
    $("#search-submit").click(function () { // Wychwytujemy kliknięcie przycisku
         // Wywołujemy funkcję z tymi parametrami
         szukaj(sort);
    });
});

function szukaj (sort) {
    let search = $('#search-keyword').val(); // Zmienna z zapytaniem
        let search_fields = 'title,main_text'; // Zmienna wskazująca, gdzie szukamy w artykule (np. tytuł, tekst itd.)
        if ($('#search-titles').is(':checked')) {
            search_fields = 'title'; // Jeśli checkbox zaznaczony to szukamy tylko w tytule
        }
        let prioritydomain = 'low';
        if ($('#search-prioritydomain').is(':checked')) {
            prioritydomain = 'top';
        }
        const selectLanguage = document.getElementById('language');
const selectedLanguage = Array.from(selectLanguage.selectedOptions);
const language = selectedLanguage.map(option => option.value).join(',');
        let published_after = $('#search-date').val(); // Od kiedy wyszukujemy
const selectCountry = document.getElementById('country');
const selectedCountry = Array.from(selectCountry.selectedOptions);
let country = selectedCountry.map(option => option.value).join(',');
if (search != '' && selectedLanguage !='' && selectedCountry != '')
{
    console.log("selectedLanguage: " + selectedLanguage);
    console.log("selectedCountry" + selectedCountry);
        fetchNews(search, language, prioritydomain, search_fields, country, sort);
}

    
}