import React, { useState } from "react";
import {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../apiSlices/getMyPostsAPI";

function Posts() {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  const [editingId, setEditingId] = useState(null);
  //Getting Post list.
  const { data: posts, error, isLoading, refetch } = useGetPostsQuery();
  const [createPosts, { isLoading: newPostLoading }] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There is an Error occurred</p>;
  console.log(posts);
  // console.log(useCreatePostMutation);

  //Creating new Post.
  function handleChange(e) {
    const { name, value } = e.target;
    setNewPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newPost.title || !newPost.body) {
      alert("Please enter all the fields");
      return;
    }

    if (editingId) {
      await updatePost({ id: editingId, ...newPost });
      setEditingId(null);
    } else {
      await createPosts(newPost);
    }
    setNewPost({
      title: "",
      body: "",
    });
    //To refetch posts everytime we create new Post.
    refetch();
  }

  function handleUpdate(post) {
    console.log(post);
    setNewPost({
      title: post.title,
      body: post.body,
    });
    setEditingId(post.id);
  }

  async function handleDelete(id) {
    console.log(id);
    let shouldDelete = confirm("Are you sure you want to delete this post ?");
    // console.log(shouldDelete);
    if(shouldDelete){
      await deletePost(id);
      refetch();
    }
  }

  return (
    // <section>
    //   <div className="post-create">
    //     <h2>Add New Post</h2>
    //     <form action="" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         name="title"
    //         placeholder="Enter Post title"
    //         value={newPost.title}
    //         onChange={handleChange}
    //       />
    //       <textarea
    //         name="body"
    //         placeholder="Enter Post content"
    //         value={newPost.body}
    //         onChange={handleChange}
    //       />
    //       {/* <button>{newPostLoading ? "Creating..." : "Create"}</button> */}
    //       <button>
    //         {editingId ? "Update" : newPostLoading ? "Creating..." : "Create"}
    //       </button>
    //     </form>
    //   </div>
    //   <div className="post-section">
    //     {posts?.map((post) => {
    //       return (
    //         <div key={post.id}>
    //           <p>{post?.title}</p>
    //           <p>{post?.body}</p>
    //           <div>
    //             <button onClick={() => handleUpdate(post)}>Update</button>
    //             <button onClick={() => handleDelete(post.id)}>Delete</button>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>
    <section className="posts-container">
    <div className="post-create">
      <h2>Add New Post</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Post title"
          value={newPost.title}
          onChange={handleChange}
          className="post-input"
        />
        <textarea
          name="body"
          placeholder="Enter Post content"
          value={newPost.body}
          onChange={handleChange}
          className="post-textarea"
        />
        <button className="submit-btn">
          {editingId ? "Update" : newPostLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  
    <div className="post-section">
      {posts?.map((post) => {
        return (
          <div key={post.id} className="post-card">
            <p className="post-title">{post?.title}</p>
            <p className="post-body">{post?.body}</p>
            <div className="post-actions">
              <button className="update-btn" onClick={() => handleUpdate(post)}>
                Update
              </button>
              <button className="delete-btn" onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  );
}

export default Posts;
