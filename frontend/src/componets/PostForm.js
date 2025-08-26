import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
    }
  };

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
        <div className="text-center">

          <form className="" onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
              className="border-2 border-gray-300 p-2 w-[40%] mb-4"
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br/>
            <textarea
              className="border-2 border-gray-300 p-2 w-[40%] h-80 mb-4 resize-none"
              placeholder="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <br/>
            <button className="px-4" type="submit">저장</button>
            {onCancel && (
              <button type="button" onClick={onCancel}>
                취소
              </button>
            )}
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        © 2025 QC03. All rights reserved.
      </footer>
    </div>
  );
}

export default PostForm;
