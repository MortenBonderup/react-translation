import { useNavigate } from "react-router-dom";

export default function PostCard({post}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`posts/${post.id}`);
  }

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
