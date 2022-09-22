let getData = () => {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1e7e1d81c0c04b4f837e22b6e3f73046"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.articles);
        for (let i = 0; i < 20; i++) {
           console.log(data.articles[i].title);
           let hamza = document.getElementById("bitcoin_news");
        //    hamza.innerHTML += data.articles[i].title;
        }



    }).catch((Error) => {
        console.log(Error);
    })
}
getData();

