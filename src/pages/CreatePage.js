import { useNavigate } from "react-router-dom";
import PostForm from '../components/PostForm';

export default function CreatePage() {
    const navigate = useNavigate();

    async function createPost(newPost) {
        // newPost.id = "fTs84KRoYw5pRZEWCq2Z";
        const url = "https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/translations.json";
        
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(newPost) 
        });
        const data = await response.json();
        console.log(data);
        navigate("/");
    }

    return (
       <section className="page">
        <h1>Create New Translation</h1>
            <PostForm savePost={createPost} />
       </section>
    );
}
