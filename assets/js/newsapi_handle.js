        async function fetchNews(search, language, prioritydomain, search_fields, country, sort) {
            let str='';
            console.log("domain: " + prioritydomain);
            if ($('#search-titles').is(':checked')){
                var params = {
                    apikey: 'pub_5944662628c04af6fe1dfe8b857495abc442f',
                    qInTitle: search,
                    language: language,
                    prioritydomain: prioritydomain,
                    country: country,
                    image: '1',
                    removeduplicate: '1'
                };
            }
            else {
                var params = {
                    apikey: 'pub_5944662628c04af6fe1dfe8b857495abc442f',
                    q: search,
                    language: language,
                    prioritydomain: prioritydomain,
                    country: country,
                    image: '1',
                    removeduplicate: '1'
                };
            }
            console.log('country: ' + country);
            console.log("language: " + language);
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
              let articles = data.results;
              var i=0;
           console.log("odpowiedz: " + articles);
           console.log("new czy starszych: " + sort);
              if(sort == 'new') {
                articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                console.log("nowszych");
              }
              else {
                articles.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
                console.log("starszych");
              }
         
          
           console.log(articles);
              // Iteracja po artykułach i generowanie HTML
              for (let article of articles) {
                console.log('co tam siedzi: '+article.description);
                console.log("Log article: " + article);
                i++;
                if(!article.description)
                {
                    article.description = 'Więcej treści po kliknięciu w link prowadzący do artykułu';
                }
                article.source_url = article.source_url.replace("https://", "");
                str = str + `<div class="col-10 offset-1 offset-lg-0 col-lg-3 anim flex my-3 text-center"> <div class="card"> <img src="' + article.image_url + '" class="card-img-top" alt="..."><span class="category">'+ article.category+'</span><img class="icon" src="'+article.source_icon+'"><span class="country">'+article.country+', '+article.source_url+'</span><div class="card-body"> <h5 class="card-title">' + article.title + '</h5> <p class="card-text">' + article.description + '</p><p class="date mb-lg-5">'+article.pubDate+'</p><div style="margin-top: 5vh"><a href="' + article.link + '" target="blank" class="position-absolute bottom-0 translate-middle article-btn btn btn-primary">Czytaj dalej</a></div> </div></div></div>`;
                // Dodanie wygenerowanego elementu do kontenera
                console.log("i: " + i);
              }
            } catch (error) {
              console.error("Błąd podczas pobierania lub przetwarzania danych:", error);
              container.innerHTML = "<p>Nie udało się załadować artykułów. Spróbuj ponownie później.</p>";
            }
            container.innerHTML = str;
            found.innerHTML = "Znaleziono " + i + " artykułów"; 
            draw_news_animation();
          }
      
          // Wywołanie funkcji