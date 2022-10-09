import { useNavigate } from "react-router-dom";
import PostForm from '../components/PostForm';

export default function CreatePage() {
    const navigate = useNavigate();

    // Function that makes the creation(POST) of a
    // new translation. It receives an object "newPost"
    // that is transferred to the server in the
    // fetch body.
    async function createPost(newPost) {
        // newPost.id = "-NDxg_qx1eWfdkNlZ6oj";
        const url = "https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/translations.json";
        
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(newPost) 
        });
        const data = await response.json();
        console.log(data);
        navigate("/");
    }

    // PostForm.js is implemented and 
    // callback "savePost" holds the 
    // name of the method that creates
    // the new translation.
    return (
       <section className="page">
        <h1>Create New Translation</h1>
            <PostForm savePost={createPost} />
       </section>
    );
}
