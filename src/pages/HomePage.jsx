import React from "react";

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Blog</h1>
        {/* 프로필 아이콘 */}
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </header>

      {/* PC 레이아웃 */}
      <div className="hidden md:flex gap-4">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-4 rounded-lg shadow">
          <ul>
            <li className="mb-2">홈</li>
            <li className="mb-2">내 글</li>
            <li>설정</li>
          </ul>
        </aside>

        {/* Posts List */}
        <main className="w-3/4 grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">게시글 1</div>
          <div className="p-4 bg-white rounded-lg shadow">게시글 2</div>
          <div className="p-4 bg-white rounded-lg shadow">게시글 3</div>
        </main>
      </div>

      {/* 모바일 레이아웃 */}
      <div className="md:hidden">
        <main className="flex flex-col gap-4">
          <div className="p-4 bg-white rounded-lg shadow">게시글 1</div>
          <div className="p-4 bg-white rounded-lg shadow">게시글 2</div>
          <div className="p-4 bg-white rounded-lg shadow">게시글 3</div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
