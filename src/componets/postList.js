import React, { useEffect, useState } from "react";
import { getPosts, createPost, updatePost, deletePost } from "../api/postAPI";
import PostForm from "./postForm";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = () => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = (data) => {
    createPost(data).then(() => fetchPosts());
  };

  const handleUpdate = (data) => {
    if (!editingPost) return;
    updatePost(editingPost.id, data).then(() => {
      setEditingPost(null);
      fetchPosts();
    });
  };

  const handleDelete = (id) => {
    deletePost(id).then(() => fetchPosts());
  };

  return (
    <div>
      <h1>게시글 목록</h1>

      {/* 글 작성 폼 */}
      {editingPost ? (
        <PostForm
          onSubmit={handleUpdate}
          initialData={editingPost}
          onCancel={() => setEditingPost(null)}
        />
      ) : (
        <PostForm onSubmit={handleCreate} />
      )}

      {/* 게시글 리스트 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.content}
            <button onClick={() => setEditingPost(post)}>수정</button>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
