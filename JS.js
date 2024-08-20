const quoteText = document.querySelector("#text");
const authorText = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote");
const tweetButton = document.querySelector("#tweet-quote");

async function getRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return null;
    }
}

async function updateQuote() {
    const quote = await getRandomQuote();

    if (quote) {

        quoteText.textContent = '"' + quote.content + '"';
        authorText.textContent = "- " + quote.author;
        tweetButton.class = 'twitter-share-button'
        tweetButton.href = `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`;
    }
    else {
        quoteText.textContent = '"Failed to fetch quote"'
        authorText.textContent = "- The developer"
        console.log("Failed to connect to the api")
    }
}

updateQuote();

newQuoteButton.addEventListener("click", updateQuote);