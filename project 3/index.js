console.log("Welcome to the news channel");

// ae90468d87a844e9aa012edfbf6a4166

// Initialize the news api parameters
// let country= "us";
// let key = "ae90468d87a844e9aa012edfbf6a4166";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=us&apiKey=ae90468d87a844e9aa012edfbf6a4166`, true);
xhr.getResponseHeader("content-type", "application/json");

// What do we do when the response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element,index) {
        //   console.log(element,index);  
        
   let news = `<div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                            aria-expanded="true" aria-controls="collapse${index}">
                                            <b>Breaking news ${index+1}: </b> ${element["title"]}
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                    <div class="card-body">${element["description"]}.<a href ="${element["url"]}" target = "_blank" > Readmore here </a></div>
                                </div>
                            </div>`;
                newsHtml += news;
    });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();

