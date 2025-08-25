import PostDetail from "./componets/PostDetail";
import CreatePost from "./componets/CreatePost";
import EditPost from "./componets/EditPost";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />

          {/* 예외는 메인페이지 */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
