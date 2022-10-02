import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UpdatePage from "./pages/UpdatePage"
import Nav from "./components/Nav";
import CreatePage from "./pages/CreatePage";

function App() {
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
