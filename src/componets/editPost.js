import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import { getPost, updatePost } from "../api/PostAPI";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

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
    <div>
      <h1>게시글 수정</h1>
      <PostForm 
        onSubmit={handleUpdatePost} 
        initialData={initialData} 
        onCancel={() => navigate(`/`)}
      />
    </div>
  );
}

export default EditPost;
