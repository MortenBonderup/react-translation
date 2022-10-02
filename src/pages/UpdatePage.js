import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function UpdatePage() {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const params = useParams();

  console.log(`params ${params.postId}`);

  const url = `https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/translations/${params.postId}.json`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const data = await response.json();
      setPost(data);
    }
    getPost();
  }, [url]);

  async function savePost(postToUpdate) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate)
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
  }

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
