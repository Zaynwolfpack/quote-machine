import './App.scss';
import React, {useState, useEffect} from "react";
import Colors_Array from './colorsArray';


function App() {
const [quote, setQuote] = useState("Only he who can see the invisible can do the impossible.")
const [author, setAuthor] = useState("Frank L. Gaines");
const [quotesArray, setQuotesArray] = useState(null)
const [accentColor, setAccentColor] = useState('#FF6633')
const quotesDBURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const fetchQuotes = async (url) => {
  const response = await fetch(url);
  const parsedJSON = await response.json()
  setQuotesArray(parsedJSON.quotes)
  console.log(parsedJSON)
}



useEffect(() => {
  fetchQuotes(quotesDBURL)
}, [quotesDBURL])

const getRandomQuote = () => {
  let randomizer = Math.floor(Math.random() * quotesArray.length)
  setAuthor(quotesArray[randomizer].author)
  setQuote(quotesArray[randomizer].quote)
  setAccentColor(Colors_Array[randomizer])
}


  return (
    <div className="App">
     <header className="App-header" style={{backgroundColor: accentColor}}>
      <div>
        <h1 id="appTitle">QUOTE GENERATOR</h1> 
      </div>
         <div id="quote-box">
        <p id="text" style={{color:accentColor}}>
          '{quote}'
        </p>
        <p id="author" style={{color:accentColor}}>
           - {author}
        </p>
        <div>
          <div>
            <button id="new-quote" onClick={() => getRandomQuote()} className="btn btn-default btn-block" style={{color:accentColor}}>Generate New Quote</button>
          </div>
          <div class="">
            <a id="tweet-quote" target="_top" href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}>Tweet This</a>
          </div>
       </div>
      </div>
     </header>
    
    </div>
  );
}

export default App;
