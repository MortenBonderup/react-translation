// This document creates the form that handles the creation 
// of a translation and the update of a translation.
import { useEffect, useState } from "react";

// Component receives callback method "savepost" and translation
// information (post) if any.
export default function PostForm({ savePost, post }){
    // Defines initial states of data values
    const [english, setEnglish] = useState("");
    const [danish, setDanish] = useState("");
    const [tid, setTId] = useState(0); // tid = transaction id
    const [errorMessage, setErrorMessage] = useState("");


useEffect(() => {
    // If translation information is present, change states
    // of variables to the values from post (translation information).
    // This will update the form.
    if (post) {
        setEnglish(post.en);
        setDanish(post.dk);
        setTId(post.tid);
    } 
}, [post]);

// When the form is submitted, an object is created (formData)...
async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        en: english,
        dk: danish,
        tid: parseInt(tid)
    }

// Check to see if all fields were filled. If not, show an 
// error message. If everything is ok - call callback method 
// defined by "savePost"
   const validForm = formData.en && formData.dk && formData.tid;
   if (validForm) {
    savePost(formData);
   } else {
    setErrorMessage("Please, fill in all fields.");
   }
}

// The html form. The form fields have values that is equal to
// their variabel counterparts values. When the user types in
// values, the relevant states are updated.
// If the form is used for updating an existing translation, 
// the tid (transaction id) field is hidden: it cannot be updated.
// Mortens decision. 
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
