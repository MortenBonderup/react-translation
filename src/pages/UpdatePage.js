import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function UpdatePage() {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  // The url contains a parameter which is equal
  // to the id (key) of the translation to be
  // updated.
  const params = useParams();

  // console.log(`params ${params.postId}`);

  // The url must reflect the fact, that only one translation
  // is to be updated. This translation is identified by its
  // id (key).
  const url = `https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/translations/${params.postId}.json`;

  // Fetch (GET) this single translation
  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const data = await response.json();
      setPost(data);
    }
    getPost();
  }, [url]);

  // This function sends the updated translation
  // to the server.
  async function savePost(postToUpdate) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate)
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
  }

  // This function deletes the current translation.
  // It asks the user for permission before the
  // deletion is completed.
  async function deletePost() {
    const confirmDelete = window.confirm(`Do you want to delete translation of "${post.en}"?`)
    
    if (confirmDelete) {
        const response = await fetch(url, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(data);
        navigate("/");
      }

  }

  // PostForm.js is implemented and 
  // callback "savePost" holds the 
  // name of the method that updates
  // the new translation.
  return (
    <section className="page">
      <h1>Update Post</h1>
      <PostForm post={post} savePost={savePost} />
      <button className="btn-delete" onClick={deletePost}>
        Delete Post
      </button>
    </section>
  );
}
