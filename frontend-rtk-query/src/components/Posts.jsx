import React, { useState } from "react";
import {
  useGetPostsQuery,
  useCreatePostMutation,
  getMyPostsAPI,
} from "../apiSlices/getMyPostsAPI";

function Posts() {
  const [newPost, setNewPost] = useState();
  const { data, error, isLoading } = useGetPostsQuery();
  // const [getPosts ] = useGetPostsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There is an Error occurred</p>;
  console.log(data);
  return (
    <section>
      <div className="post-create"></div>
      <div className="post-section">
        {data?.map((post) => {
          return (
            <div key={post.id}>
              <p>{post?.title}</p>
              <p>{post?.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Posts;
