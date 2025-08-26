import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../api/PostAPI";

function PostDetail() {
  const { id } = useParams(); // URL에서 /posts/:id 값 가져옴
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getPost(id) // 단일 게시글 조회
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    deletePost(id).then(() => {
      alert("게시글이 삭제되었습니다.");
      navigate("/"); // 삭제 후 홈으로 이동
    });
  };

  if (!post) return <p>로딩 중...</p>;

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
          <br/>
          <h1 className="text-xl font-bold">{post.title}</h1>
          <br/>
          <p className="text-l whitespace-pre-line">{post.content}</p>
          
          <br/>
          <button className="mx-2 px-4 py-1 border-slate-700 border-2" onClick={() => navigate(`/edit/${id}`)}>수정</button>
          <button className="mx-2 px-4 py-1 border-slate-700 border-2" onClick={handleDelete}>삭제</button>
          <button className="mx-2 px-4 py-1 border-slate-700 border-2" onClick={() => navigate("/")}>목록</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        © 2025 QC03. All rights reserved.
      </footer>
    </div>
  );
}

export default PostDetail;
