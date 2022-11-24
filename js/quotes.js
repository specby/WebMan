const quotes = [
    {
        quote: "happy!! happy!! happy!!",
        author: "jiWon",
    },
    {
        quote: "fun!! fun!! fun!!",
        author: "jiWon",
    },
    {
        quote: "enjoy!! enjoy!! enjoy!!",
        author: "jiWon",
    },
    {
        quote: "like!! like!! like!!",
        author: "jiWon",
    },
    {
        quote: "explore!! explore!! explore!!",
        author: "jiWon",
    },
    {
        quote: "laugh!! laugh!! laugh!!",
        author: "jiWon",
    },
    {
        quote: "smile smile smile",
        author: "jiWon",
    },
    {
        quote: "Think positive!! Think positive!! Think positive!!",
        author: "jiWon",
    },
    {
        quote: "love!! love!! love!!",
        author: "jiWon",
    },
    {
        quote: "success!! success!! success!!",
        author: "jiWon",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 