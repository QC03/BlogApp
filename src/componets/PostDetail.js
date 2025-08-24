import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../api/PostAPI";

function PostDetail() {
  const { id } = useParams(); // URL에서 /posts/:id 값 가져옴
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

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
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <button onClick={() => navigate(`/posts/${id}/edit`)}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate("/")}>목록으로</button>
    </div>
  );
}

export default PostDetail;
