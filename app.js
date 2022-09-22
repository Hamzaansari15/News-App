let getDataBitcoin = () => {
    let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=1e7e1d81c0c04b4f837e22b6e3f73046"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        for (let i = 0; i < 20; i++) {
            let hamza =  `<div id="bitcoin_card1">
           <img src=${data.articles[i].urlToImage}>
           <div id="bitcoin_card1_text">
              <p id="bitcoin_card_title">${data.articles[i].title}</p>
              <p id="bitcoin_card_des">${data.articles[i].description}</p>
              <p id="bitcoin_card_publish">Published At: ${data.articles[i].publishedAt.slice(0,10)}</p>
              <a href="${data.articles[i].url}" target="_blank"><button>Read more</button></a>
           </div>
           </div>`
           let card = document.getElementById("bitcoin_body");
           card.innerHTML += hamza;
 
        }
    }).catch((Error) => {
        console.log(Error);
    })
}
getDataBitcoin();
// bitcoin Completed


let getDataArticles = () => {
    let url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=1e7e1d81c0c04b4f837e22b6e3f73046"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        for (let i = 0; i < 20; i++) {
            let hamza =  `<div id="article_card1">
           <img src=${data.articles[i].urlToImage}>
           <div id="article_card1_text">
              <p id="article_card_title">${data.articles[i].title}</p>
              <p id="article_card_des">${data.articles[i].description}</p>
              <p id="article_card_publish">Published At: ${data.articles[i].publishedAt}</p>
              <a href="${data.articles[i].url}" target="_blank"><button>Read more</button></a>
           </div>
           </div>`
           let card = document.getElementById("article_body");
           card.innerHTML += hamza;
 
        }
    }).catch((Error) => {
        console.log(Error);
    })
}
getDataArticles();


