import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getMyPostsAPI = createApi({
    reducerPath: "getMyPostsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    // refetchOnFocus: true,//refetching when browser tab or window is changed.
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getPosts: builder.query({query: () => "posts",
            providesTags: ['Post'],
        }),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: "posts",
                method: "POST",
                body: newPost,
            }),
            // async onQueryStarted(newPost, {dispatch, queryFullfilled}) {
            //     try {
            //         const {data: createPost} = await queryFullfilled;
    
            //         dispatch(
            //             getMyPostsAPI.util.updateQueryData('getPosts', undefined, (draft) => {
            //                 draft.push(createPost);
            //             })
            //         );
            //     } catch (error) {
            //         console.log("Error updating cache", error);
            //     }
            // },
            // invalidatesTags: ['Post'],
        }),
       
        updatePost: builder.mutation({
            query: ({id, ...updatedPost}) => ({
                url: `posts/${id}`,
                method: "PATCH",
                body: updatedPost,
            }),
            invalidatesTags: ['Post'],
        }), 
        
        deletePost: builder.mutation({
            query: (id) => ({
                url : `posts/${id}`,
                method: "DELETE",
            })
        })  
    }),
});

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = getMyPostsAPI;