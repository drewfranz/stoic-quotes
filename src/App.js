import { useState, useEffect } from 'react';
import * as quotedJson from "./data/quotes.json";

import './App.css';

const Quote = (props) => {
  return (
    <div className="quote-container">
      <div className="quote-body">{props.quote.text}</div>
      <div className="quote-author">{props.quote.author}</div>
    </div>
  );
}

export default function App() {
  const [quotes, setQuotes] = useState([{}]);

  useEffect(() => {
    document.title = "Stoic Quotes";
    setQuotes(quotedJson.quotes);
  }, [setQuotes])

  return (
    <div className="App">
      <Quote quote={quotes[Math.floor(Math.random() * quotes.length)]} />
    </div>
  );
};
