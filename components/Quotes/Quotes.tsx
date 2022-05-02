import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  styles from './Quotes.module.css';

interface IQuote {
  text: String;
  author: String;
}

export const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState<IQuote>({text:'',author:''});

  

  const getQuotes = async () => {
    const res = await axios.get('https://type.fit/api/quotes');
    const data = res.data;
    return data;
  };

  useEffect(() => {
    getQuotes().then((data) => data && setQuotes(data));
  }, []);

  useEffect(() => {
    quotes && setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [quotes]);

  return (
    <div className={styles.Quote}>
      {quote && (
        <p>
          {quote.text} ~{' '}
          <strong>{quote.author ? quote.author : 'Unknown'}</strong>
        </p>
      )}
    </div>
  );
};
