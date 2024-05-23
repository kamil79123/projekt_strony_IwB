

async function fetchNews(page, q, titles, language, date, date2, sort) {
    console.log('fetching');
    var url = 'https://newsapi.org/v2/everything?' +
        'q=' + q +
        '&searchIn=' + titles +
        '&language=' + language +
        '&from=' + date +
        '&to=' + date2 +
        '&sortBy=' + sort +
        '&apiKey=ff1f937402fa4dd585592450d6d464e0';
    console.log(url);

    var req = new Request(url);

    let x = await fetch(req);
    let response = await x.json();

    let str = '';
    for (let item of response.articles) {
        str = str + '<div class="col-10 offset-1 offset-lg-0 col-lg-4 anim flex my-3 text-center"> <div class="card"> <img src="' + item.urlToImage + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">' + item.title + '</h5> <p class="card-text">' + item.description + '</p> <div style="margin-top: 10vh"> <a href="' + item.url + '" target="blank" class="position-absolute bottom-0 translate-middle article-btn btn btn-primary">Czytaj dalej</a></div> </div></div></div>';
    }
    console.log(response.totalResults);

    document.querySelector('#row-3').innerHTML = str;
    draw_news_animation();
   
}
