/*
This document generates the translation cards. The cards
receives the data (post) from the homepage.js and displays
the cards in a flexbox. 
*/
import { useNavigate } from "react-router-dom";

export default function PostCard({post}) {
  const navigate = useNavigate();

  function handleClick() {
    // Look at the app.js page to understand this
    navigate(`posts/${post.id}`); // -> like "posts/-NDxg_qx1eWfdkNlZ6oj" 
  }

  // CSS class card_container styles the card
  // with translation information.
  // CSS card is a flexbox that separates the
  // english and danish terms.

  return (
      <div className="card_container" onClick={handleClick}>
      <span className="ident">{post.tid}</span>
      <section className="card">
        <div className="english">
          <p>[Eng]</p>
          <p>{post.en}</p>
        </div>
        <div>&rarr;</div>
        <div className="danish">
          <p>[Dk]</p>
          <p>{post.dk}</p>
        </div>
      </section>
    </div>
  );
}
