import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api/postAPI";
import { Link, useNavigate } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = () => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    deletePost(id).then(() => fetchPosts());
  };

  return (
    <div>
      <h1>게시글 목록</h1>

      {/* 게시글 리스트 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className="mx-1 px-2 hover:underline">
              <strong>{post.title}</strong> - {post.content}
            </Link>
            <button className="mx-1 px-2 border-2 border-slate-900" onClick={() => navigate(`/edit/${post.id}`)}>수정</button>
            <button className="mx-1 px-2 border-2 border-slate-900" onClick={() => handleDelete(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
