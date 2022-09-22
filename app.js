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
              <p id="article_card_publish">Published At: ${data.articles[i].publishedAt.slice(0,10)}</p>
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

// Artlcles Completed

let getDataBusiness = () => {
    let url = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1e7e1d81c0c04b4f837e22b6e3f73046"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        for (let i = 0; i < 20; i++) {
            let hamza =  `<div id="business_card1">
           <img src=${data.articles[i].urlToImage} alt="Image Not Available">
           <div id="business_card1_text">
              <p id="business_card_title">${data.articles[i].title}</p>
              <p id="business_card_des">${data.articles[i].description}</p>
              <p id="business_card_publish">Published At: ${data.articles[i].publishedAt.slice(0,10)}</p>
              <a href="${data.articles[i].url}" target="_blank"><button>Read more</button></a>
           </div>
           </div>`
           let card = document.getElementById("business_body");
           card.innerHTML += hamza;
 
        }
    }).catch((Error) => {
        console.log(Error);
    })
}
getDataBusiness();


// Business Completed

let getDataHeadline = () => {
    let url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1e7e1d81c0c04b4f837e22b6e3f73046"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        for (let i = 0; i < 20; i++) {
            let hamza =  `<div id="headline_card1">
           <img src=${data.articles[i].urlToImage}>
           <div id="headline_card1_text">
              <p id="headline_card_title">${data.articles[i].title}</p>
              <p id="headline_card_des">${data.articles[i].description}</p>
              <p id="headline_card_publish">Published At: ${data.articles[i].publishedAt.slice(0,10)}</p>
              <a href="${data.articles[i].url}" target="_blank"><button>Read more</button></a>
           </div>
           </div>`
           let card = document.getElementById("headline_body");
           card.innerHTML += hamza;
 
        }
    }).catch((Error) => {
        console.log(Error);
    })
}
getDataHeadline();

// Headline Completed


let getDataPolitics = () => {
    let url = "https://newsapi.org/v2/everything?q=apple&from=2022-09-21&to=2022-09-21&sortBy=popularity&apiKey=1e7e1d81c0c04b4f837e22b6e3f73046"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        for (let i = 0; i < 20; i++) {
            let hamza =  `<div id="politics_card1">
           <img src=${data.articles[i].urlToImage}>
           <div id="politics_card1_text">
              <p id="politics_card_title">${data.articles[i].title}</p>
              <p id="politics_card_des">${data.articles[i].description}</p>
              <p id="politics_card_publish">Published At: ${data.articles[i].publishedAt.slice(0,10)}</p>
              <a href="${data.articles[i].url}" target="_blank"><button>Read more</button></a>
           </div>
           </div>`
           let card = document.getElementById("politics_body");
           card.innerHTML += hamza;
 
        }
    }).catch((Error) => {
        console.log(Error);
    })
}
getDataPolitics();