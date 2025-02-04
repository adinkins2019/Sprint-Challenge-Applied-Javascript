// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsCont = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    //console.log(response.data.articles);
    const articles = response.data.articles;
    for (let topic in articles){
        //console.log(topic)
        articles[topic].forEach(article => {
            const nArticle = articleCreator(article);
            cardsCont.appendChild(nArticle);
        })
    }
})
.catch(error => {
    console.log('An error occurred: ');
    console.log(error);
})

function articleCreator(artObj)
{
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

        const headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = artObj.headline;
    
        const author = document.createElement('div');
        author.classList.add('author');
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');
                const authorImg = document.createElement('img');
                authorImg.src = artObj.authorPhoto;
            imgContainer.appendChild(authorImg);
            const authorName = document.createElement('span');
            authorName.textContent = "By " + artObj.authorName;
        author.appendChild(imgContainer);
        author.appendChild(authorName);

    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);

    return cardDiv;

}

