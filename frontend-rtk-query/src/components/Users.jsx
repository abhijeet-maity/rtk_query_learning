import React from "react";
import { useGetUsersQuery } from "../apiSlices/jsonPlaceholderApi";
function Users() {
  const { data, isLoading, error } = useGetUsersQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An Error occurred</p>;
  console.log(data);
  return <section className="users-section">
    <h3>Users list</h3>
    <div className="users-list">
        {
            data.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })
        }
    </div>
  </section>;
}

export default Users;
