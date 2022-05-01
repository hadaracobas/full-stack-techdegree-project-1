/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    source: "Nelson Mandela",
    citation: "The greatest glory book",
    year: "1994",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    citation: "Stanford University",
    year: "2005",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    tags: ["actress", "positive attitude", "personal development"],
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa",
    tags: ["love", "happiness", "positive attitude"],
  },
];
/***
 * `colors` array
 ***/
const backgroundColors = [
  "#2364AA",
  "#3DA5D9",
  "#73BFB8",
  "#FEC601",
  "#EA7317",
];

/***
 * `changeBackgroundColor` function
 ***/
const changeBackgroundColor = (colorsArr, num) => {
  document.getElementsByTagName("body")[0].style.backgroundColor =
    colorsArr[num];
};

/***
 * `getRandomQuote` function
 ***/
// define random number var (global scope)
let randomNum;
const getRandomQuote = (quotesArr) => {
  // generate random number between 0 and quotes array length
  randomNum = Math.floor(Math.random() * quotesArr.length);

  // return random quote object
  return quotesArr[randomNum];
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
  // get random quote
  randomQuote = getRandomQuote(quotes);

  // create html string
  let string = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} 
  `;

  // check if quote object has the property 'citation' and add to the string if true
  if (randomQuote.hasOwnProperty("citation")) {
    string += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // check if quote object has the property 'year' and add to the string if true
  if (randomQuote.hasOwnProperty("year")) {
    string += `<span class="year">${randomQuote.year}</span>`;
  }

  // check if quote object has the property 'tags' and add to the string if true
  if (randomQuote.hasOwnProperty("tags")) {
    // loop through the tags array and add to the string if true
    let QuoteTags = randomQuote.tags;
    for (let i = 0; i < QuoteTags.length; i++) {
      string += `<span class="tag">"${QuoteTags[i]}
      "</span>`;
    }
  }
  // close html string with </p> and display on the page
  string += "</p>";
  document.getElementById("quote-box").innerHTML = string;

  // change background color
  changeBackgroundColor(backgroundColors, randomNum);
};
// print quote immediately
printQuote();
// print quote every 10 sec
let printQuoteInterval = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
