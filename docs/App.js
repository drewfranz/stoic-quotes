import { useState, useEffect } from 'react';
import * as quotedJson from "./data/quotes.json";
import { IconContext } from "react-icons";
import { AiOutlineReload } from 'react-icons/ai';


import './App.css';

const Quote = (props) => {
  return (
    <div className="quote-container" onClick={() => props.handler()}>
      <div className="quote-body">{props.quote.text}</div>
      <div className="quote-author">{props.quote.author}</div>
    </div>
  );
}

const Refresh = (props) => {
  return (
    <>
      <button className="btn button-refresh" onClick={() => props.handler()}>
        <IconContext.Provider value={{
          color: "#666",
          size: "2rem",
          className: "button-refresh-icon" }}>
          <AiOutlineReload />
        </IconContext.Provider>
      </button>
    </>
  );
}

export default function App() {
  const [selected, setSelected] = useState({})

  useEffect(() => {
    document.title = "Stoic Quotes";
    setSelected(quotedJson.quotes[Math.floor(Math.random() * quotedJson.quotes.length)]);
  }, [setSelected]);

  const handleRefresh = () => {
    setSelected(quotedJson.quotes[Math.floor(Math.random() * quotedJson.quotes.length)]);
  }

  return (
    <div className="App">
      <Quote quote={selected} handler={handleRefresh} />
      <Refresh handler={handleRefresh} />
    </div>
  );
};
