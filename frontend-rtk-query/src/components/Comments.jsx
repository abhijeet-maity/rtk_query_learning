import React from "react";
import { useGetCommentsQuery } from "../apiSlices/jsonPlaceholderApi";

function Comments() {
  const { data, isLoading, error } = useGetCommentsQuery();
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>OOPS..., an error occurred</p>
  console.log(data.slice(0,16));
  return <section className="comments-section">
    <h3>Comments</h3>
    <div className="comments-list">
        {
            data.slice(0,16).map((comment) => {
                return (
                    <div className="comments">
                        <p><b>Username: </b> {comment.name}</p>
                        <p><b>comment: </b>{comment.body}</p>
                    </div>
                )
            })
        }
    </div>
  </section>;
}

export default Comments;
