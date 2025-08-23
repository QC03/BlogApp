import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Blog</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">홈</a>
          <a href="/create" className="text-gray-700 hover:text-blue-600">글쓰기</a>
          <a href="/profile" className="text-gray-700 hover:text-blue-600">내정보</a>
        </nav>
        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-gray-700">☰</button>
      </header>

      {/* Body */}
      <main className="flex-grow p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">최신 글</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 카드 예시 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2">첫 번째 글</h3>
            <p className="text-gray-600">이곳은 글 미리보기 텍스트가 들어갑니다.</p>
            <a href="/post/1" className="text-blue-600 text-sm mt-2 inline-block">자세히 보기 →</a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2">두 번째 글</h3>
            <p className="text-gray-600">이곳은 글 미리보기 텍스트가 들어갑니다.</p>
            <a href="/post/2" className="text-blue-600 text-sm mt-2 inline-block">자세히 보기 →</a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        © 2025 QC03. All rights reserved.
      </footer>
    </div>
  );
}
