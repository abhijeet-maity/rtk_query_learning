import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getMyPostsAPI = createApi({
    reducerPath: "getMyPostsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getPosts: builder.query({query: () => "posts"}),
        createPosts: builder.mutation({
            query: (newPost) => ({
                url: "posts",
                method: "POST",
                body: newPost,
            }),
        }),
        
    }),
});

export const {
    useGetPostsQuery,
    useCreatePostMutation,
} = getMyPostsAPI;