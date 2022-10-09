import { useEffect, useState } from "react";
import PostCard from "../components/Postcard";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true);
  
  useEffect(() => {
    async function getPosts() {
      const url =
        "https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/translations.json";
      const response = await fetch(url);
      const data = await response.json();
      if (data !== null) {
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsArray); // Update "posts" object array list
      } else {
        setIsPosts(false);
      }
    }
    getPosts();
  }, []);

  return (
    <article className="page">
      <h1>Translations</h1>
      {isPosts ? (
        <div className="flexbox">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </article>
  );
}
