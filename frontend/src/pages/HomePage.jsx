import React from "react";
import PostList from "../componets/PostList";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

  const [menuOpen, setMenuOpen] = useState(false);

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
        <PostList />
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        © 2025 QC03. All rights reserved.
      </footer>
    </div>
  );
}
