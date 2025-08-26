import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api/PostAPI";
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
      <h1 className="text-2xl font-bold">게시글 목록</h1>
      <br/>

      {/* 게시글 리스트 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="border-2 border-gray-200 my-4">
              <br/>
              <Link to={`/posts/${post.id}`} className="mx-1 px-2 hover:underline">
                <strong>{post.title}</strong>
                <br/>
                <p className="ml-4 my-2 whitespace-pre-line">{post.content.length > 35 ? post.content.slice(0, 35) + "..." : post.content}</p>
              </Link>
            </div>
            {/*
            <button className="mx-1 px-2 border-2 border-slate-900" onClick={() => navigate(`/edit/${post.id}`)}>수정</button>
            <button className="mx-1 px-2 border-2 border-slate-900" onClick={() => handleDelete(post.id)}>삭제</button>
            */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
