import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderAPI = createApi({
  reducerPath: "jsonPlaceholderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  refetchOnFocus: true, //refetches data everytime the tab is changed and again that tab is clicked, in search of new data.
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => "users" }), //Query to fetch posts
    getComments: builder.query({ query: () => "comments" }), //Query to get all the comments
  }),
});

export const {
  useGetUsersQuery,
  useGetCommentsQuery,
} = jsonPlaceholderAPI;
