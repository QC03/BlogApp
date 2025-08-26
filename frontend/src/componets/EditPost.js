import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import { getPost, updatePost } from "../api/PostAPI";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

  // 기존 글 불러오기
  useEffect(() => {
    getPost(id)
      .then((res) => setInitialData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdatePost = (data) => {
    updatePost(id, data)
      .then(() => {
        alert("게시글이 수정되었습니다.");
        navigate(`/posts/${id}`);
      })
      .catch((err) => console.error(err));
  };

  if (!initialData) return <p>로딩 중...</p>;

  return (

    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600"><Link to={`/`}>My Blog</Link></h1>

        {/* PC 메뉴 */}
        <nav className="hidden md:flex space-x-6">
          <Link to={`/`} className="text-gray-700 hover:text-blue-600">홈</Link>
          <Link to={`/create`} className="text-gray-700 hover:text-blue-600">글쓰기</Link>
          <Link to={`/profile`} className="text-gray-700 hover:text-blue-600">내정보</Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >☰</button>

      </header>

      {/* 모바일 메뉴 (토글) */}
        {menuOpen && (
            <nav className="md:hidden bg-gray-100 px-6 py-2 flex flex-col space-y-2">
              <Link to={`/`} className="text-gray-700 hover:text-blue-600">홈</Link>
              <Link to={`/create`} className="text-gray-700 hover:text-blue-600">글쓰기</Link>
              <Link to={`/profile`} className="text-gray-700 hover:text-blue-600">내정보</Link>
            </nav>
        )}

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-50">
        <div>
          <PostForm 
            onSubmit={handleUpdatePost} 
            initialData={initialData} 
            onCancel={() => navigate(`/`)}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        © 2025 QC03. All rights reserved.
      </footer>
    </div>
  );
}

export default EditPost;
