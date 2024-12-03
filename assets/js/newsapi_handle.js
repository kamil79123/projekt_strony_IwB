/*function fetchNews(search, language, sort, published_after, search_fields) {
    let requestOptions = {
        method: 'GET'
    };
    let params = {
        api_token: 'CxtOGu2ABnyrhuxbVNLsj0X1xzFePg4uOnJZXDUs',
        search: search,
        sort: sort,
        language: language,
        published_after: published_after,
        search_fields: search_fields
    };
    let rezultat;
    let esc = encodeURIComponent;
    let query = Object.keys(params)
        .map(function (k) { return esc(k) + '=' + esc(params[k]); })
        .join('&');
    console.log("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions);
    fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
        .then(response => response.text())
        .then(result => {
            rezultat = result;
            let parsedResponse = JSON.parse(rezultat);
            console.log(parsedResponse);
            let data = parsedResponse.data;
            let returnedValue = parsedResponse.meta.returned;
            let str = '';
            let row3 = document.getElementById('row-3');
            for (let i = 0; i < returnedValue; i++) {
                str = str + '<div class="col-10 offset-1 offset-lg-0 col-lg-4 anim flex my-3 text-center"> <div class="card"> <img src="' + data[i].image_url + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">' + parsedResponse.data[i].title + '</h5> <p class="card-text">' + parsedResponse.data[i].description + '</p> <div style="margin-top: 10vh"> <a href="' + parsedResponse.data[0].url + '" target="blank" class="position-absolute bottom-0 translate-middle article-btn btn btn-primary">Czytaj dalej</a></div> </div></div></div>';
                console.log(i);
            }
            row3.innerHTML = str;
            draw_news_animation();
        })
        .catch(error => console.log('error', error));
}*/

/*function fetchNews(search, language, sort, published_after, search_fields) {
    let requestOptions = {
        method: 'GET'
    };
    let params = {
        apikey: 'pub_5944662628c04af6fe1dfe8b857495abc442f',
        q: search,
        language: language
    };
    let rezultat;
    let esc = encodeURIComponent;
    let query = Object.keys(params)
        .map(function (k) { return esc(k) + '=' + esc(params[k]); })
        .join('&');
    console.log("https://newsdata.io/api/1/news?" + query, requestOptions);
    fetch("https://newsdata.io/api/1/news?" + query, requestOptions)
        .then(response => response.text())
        .then(result => {
            rezultat = result;
            let parsedResponse = JSON.parse(rezultat);
            console.log("wynik: " + JSON.stringify(parsedResponse, null, 2));
            let x = JSON.stringify(parsedResponse, null, 2);
            const extractedData = x.results.map(article => {
                return {
                  title: article.title,
                  imageUrl: article.image_url
                };
              });
              
              // Wyświetlenie wyniku w konsoli
              console.log(extractedData);
            console.log(parsedResponse);
            let data = parsedResponse.data;
            let returnedValue = parsedResponse.meta.returned;
            let str = '';
            let row3 = document.getElementById('row-3');
            for (let i = 0; i < returnedValue; i++) {
                str = str + '<div class="col-10 offset-1 offset-lg-0 col-lg-4 anim flex my-3 text-center"> <div class="card"> <img src="' + data[i].image_url + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">' + parsedResponse.data[i].description + '</h5> <p class="card-text">' + parsedResponse.data[i].link + '</p> <div style="margin-top: 10vh"> <a href="' + parsedResponse.data[0].link + '" target="blank" class="position-absolute bottom-0 translate-middle article-btn btn btn-primary">Czytaj dalej</a></div> </div></div></div>';
                console.log(i);
            }
            row3.innerHTML = str;
            draw_news_animation();
        })
        .catch(error => console.log('error', error));
} */

        async function fetchNews(search, language, sort, published_after, search_fields) {
            let str='';
            
            if ($('#search-titles').is(':checked')){
                var params = {
                    apikey: 'pub_5944662628c04af6fe1dfe8b857495abc442f',
                    qInTitle: search,
                    language: language
                };
            }
            else {
                var params = {
                    apikey: 'pub_5944662628c04af6fe1dfe8b857495abc442f',
                    q: search,
                    language: language
                };
            }
            
            let esc = encodeURIComponent;
            let query = Object.keys(params)
        .map(function (k) { return esc(k) + '=' + esc(params[k]); })
        .join('&');
        const apiUrl = "https://newsdata.io/api/1/news?"+query; // Zmień na rzeczywisty URL API
        console.log('apiurl: ' + apiUrl);
            const container = document.getElementById('row-3');
      
            try {
              // Pobieranie danych z API
              const response = await fetch(apiUrl);
      
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
      
              const data = await response.json();
              let i=0;
           console.log("odpowiedz: " + data.results);
              // Iteracja po artykułach i generowanie HTML
              for (let article of data.results) {
                i++;
                str = str + '<div class="col-10 offset-1 offset-lg-0 col-lg-4 anim flex my-3 text-center"> <div class="card"> <img src="' + article.image_url + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">' + article.title + '</h5> <p class="card-text">' + article.description + '</p> <div style="margin-top: 10vh"> <a href="' + article.link + '" target="blank" class="position-absolute bottom-0 translate-middle article-btn btn btn-primary">Czytaj dalej</a></div> </div></div></div>';
                // Dodanie wygenerowanego elementu do kontenera
                console.log("i: " + i);
              }
            } catch (error) {
              console.error("Błąd podczas pobierania lub przetwarzania danych:", error);
              container.innerHTML = "<p>Nie udało się załadować artykułów. Spróbuj ponownie później.</p>";
            }
            container.innerHTML = str;
            draw_news_animation();
          }
      
          // Wywołanie funkcji