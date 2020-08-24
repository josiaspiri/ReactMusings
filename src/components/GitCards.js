import React, { useState, useEffect } from 'react';
import './GitCards.css';

export default function GitCards(props) {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch(props.url)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            setLoading(false);
          },
          (error) => {
            setItems([{id: 0, html_url: "/", full_name: "No Internet! (Probably)"}]);
            setLoading(false);
          }
        )
    }, [props.url])
  
    let content = null;
    if (loading) {
      content = (<div className="git-card">
        <h2 className="git-name">
          Loading the Gits!
      </h2>
        <p>Good things come with time!</p>
      </div>);
    } else {
      content = (<>
        {items.map((item) =>
          <div key={item.id} className="git-card">
            <h2 className="git-name">
              <a
                className="App-link"
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.full_name}
              </a>
            </h2>
            <p>{item.description ?? "No description :("}</p>
          </div>
        )}
      </>)
    }
    return (
      <div className="git-cards">
        {content}
      </div>
    );
  }