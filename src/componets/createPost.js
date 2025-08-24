import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import { createPost } from "../api/PostAPI";

function CreatePost() {
  const navigate = useNavigate();

  const handleCreatePost = (data) => {
    createPost(data)
      .then(() => {
        alert("게시글이 작성되었습니다.");
        navigate("/"); // 작성 후 목록으로 이동
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>새 게시글 작성</h1>
      <PostForm 
        onSubmit={handleCreatePost} 
        onCancel={() => navigate("/")} 
      />
    </div>
  );
}

export default CreatePost;
