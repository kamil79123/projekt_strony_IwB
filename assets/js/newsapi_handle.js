function fetchNews(search, language, sort, published_after, search_fields) {
    let requestOptions = {
        method: 'GET'
    };
    let params = {
        api_token: 'CxtOGu2ABnyrhuxbVNLsj0X1xzFePg4uOnJZXDUs',
        search: search,
        limit: 3, // Niestety tylko taki limit jest w darmowej wersji
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
}