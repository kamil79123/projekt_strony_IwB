async function fetchNews(search, language, prioritydomain, search_fields, country, sort) {
    let params = {
        query: search,
        language: language,
        prioritydomain: prioritydomain,
        country: country
    };
    // Budowanie zapytania do serwera PHP (proxy.php)
    let query = new URLSearchParams(params).toString();
    const apiUrl = "../../proxy.php?" + query;
    const container = document.getElementById('row-3');  // Element HTML, gdzie będą wyświetlane artykuły
    let str = '';  // Zmienna przechowująca wygenerowany HTML
    try {
        // Pobranie danych z serwera PHP (który działa jako proxy)
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Przetwarzanie odpowiedzi JSON
        const data = await response.json();
        let articles = data.results;
        if (!articles) {
            throw new Error('Brak artykułów w odpowiedzi z API');
        }
        // Iteracja po artykułach i generowanie HTML
        for (let article of articles) {
            let description = article.description || 'Więcej treści po kliknięciu w link prowadzący do artykułu';
            let articleHTML = `<div class="col-10 offset-1 offset-lg-0 col-lg-3 anim flex my-3 text-center"><div class="card"><img src="${article.image_url}" class="card-img-top" alt="..."><span class="category">${article.category}</span><img class="icon" src="${article.source_icon}"><span class="country">${article.country}, ${article.source_url}</span><div class="card-body"><h5 class="card-title">${article.title}</h5><p class="card-text">${description}</p><p class="date mb-lg-5">${article.pubDate}</p><div style="margin-top: 5vh"><a href="${article.link}" target="_blank" class="position-absolute bottom-0 translate-middle article-btn btn btn-primary">Czytaj dalej</a></div></div></div></div>`;
            str += articleHTML;
        }
        // Dodanie wygenerowanego HTML do kontenera
        container.innerHTML = str;
    } catch (error) {
        // Obsługa błędów, np. problem z pobraniem danych
        console.error("Błąd podczas pobierania lub przetwarzania danych:", error);
        container.innerHTML = "<p>Nie udało się załadować artykułów. Spróbuj ponownie później.</p>";
    }
}
