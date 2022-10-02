import { useEffect, useState } from "react";

export default function PostForm({ savePost, post }){
    const [english, setEnglish] = useState("");
    const [danish, setDanish] = useState("");
    const [tid, setTId] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
    if (post) {
        setEnglish(post.en);
        setDanish(post.dk);
        setTId(post.tid);
    } 
}, [post]);

async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        en: english,
        dk: danish,
        tid: parseInt(tid)
    }

   const validForm = formData.en && formData.dk && formData.tid;
   if (validForm) {
    savePost(formData);
   } else {
    setErrorMessage("Please, fill in all fields.");
   }
}

return (
    <form onSubmit={handleSubmit}>
         {post ? (
         <input type="hidden" name="tid" value={tid} />
        )
         : 
        (
       <label>
        ID    
         <input type="number" name="tid" placeholder="Type in unique id number" onChange={e => setTId(e.target.value)} />
        </label>
        )}
     <label>
         English<input type="text" name="english" value={english} placeholder="Type in english statement" onChange={e => setEnglish(e.target.value)} />
     </label>
     <label>
         Danish<input type="text" name="danish" value={danish} placeholder="Type in the danish version" onChange={e => setDanish(e.target.value)} />
     </label>
    
     <p className="text-error">{errorMessage}</p>
     <button type="submit">Save</button>
     </form>
 );

}
