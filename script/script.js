// https://dummyjson.com/quotes/random

function getRandomQuote(createNewQuote) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://dummyjson.com/quotes/random`, true);
  xhr.send();
  xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
      const quote = JSON.parse(xhr.responseText);
      createNewQuote(quote);
    } else {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  });
}

document
  .querySelector("#button-container-btn")
  .addEventListener("click", function () {
    getRandomQuote(function (quote) {
      const quoteText = document.querySelector("#quote-text");
      quoteText.innerText = quote.quote;
      const author = document.querySelector("#author");
      author.innerText = quote.author;
    });
  });
