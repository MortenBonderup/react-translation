import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UpdatePage from "./pages/UpdatePage"
import Nav from "./components/Nav";
import CreatePage from "./pages/CreatePage";

function App() {
    // Nav is the visible navigation.
    // Routes defines different routes the app
    // can take - some might not be directly 
    // accessible by users and used by useNavigate.
    // See PostCard.js for an example.
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/posts/:postId" element={<UpdatePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
