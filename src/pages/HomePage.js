import { useEffect, useState } from "react";
import PostCard from "../components/Postcard";

export default function HomePage() {
  // "posts" and "isposts" have hooks. Posts holds the
  // data from the fetch GET. isPosts is used to check
  // if translations exists in the database. If not, an
  // appropriate information is shown to the user.
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  
  useEffect(() => {
    async function getPosts() {
      const url =
        "https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/translations.json";
      const response = await fetch(url);
      const data = await response.json();
      if (data !== null) {
        // This code makes a new array (postsArray) with all the 
        // data (translations) from the database. "id" becomes equal to
        // the unique database key, each post have - like "-NDxg_qx1eWfdkNlZ6oj"
        // and the rest of the data is kept as they are: eng = english, dk = danish,
        // tid = transaction id.
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsArray); // Update "posts" object array list. Set posts equal to postsArray
      } else {
        setIsPosts(false); // If no data is found, set isPosts to "false". "Noting to show" message is shown.
      }
    }
    getPosts();
  }, []);

  // PostCard is implemented. It receives the data (translations)
  // retrieved above.
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
