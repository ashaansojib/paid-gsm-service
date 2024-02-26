import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://o-gsmservice-server.vercel.app/" }),
  endpoints: (builder) => ({

    // tools and driver section--------------------------------
    getTools: builder.query({
      query: () => "all-tools"
    }),
    addTool: builder.mutation({
      query: (data) => ({
        url: "add-tool",
        method: "POST",
        body: data,
      }),
    }),
    getToolAndDriver: builder.query({
      query: () => "unique-tools",
    }),
    removeTool: builder.mutation({
      query: (id) => ({
        url: `remove-tool/${id}`,
        method: "DELETE",
      }),
    }),

    // flashfile section and section------------------------------------
    getAllFiles: builder.query({
      query: () => "all-files",
    }),
    addFile: builder.mutation({
      query: (data) => ({
        url: "add-file",
        method: "POST",
        body: data,
      }),
    }),
    getUniquePost: builder.query({
      query: () => "unique-posts",
    }),
    removeFile: builder.mutation({
      query: (id) => ({
        url: `remove-post/${id}`,
        method: 'DELETE',
      }),
    }),

    // online service section------------------------------------
    getServices: builder.query({
      query: () => "o-services",
    }),
    addService: builder.mutation({
      query: (data) => ({
        url: "add-service",
        method: "POST",
        body: data,
      }),
    }),

    // posts for blog
    // getBlogs: builder.query({
    //   query: () => "blogs",
    // }),
    // addBlogs: builder.mutation({
    //   query: (data) => ({
    //     url: "add-blog",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),


    // agents apis
    // getAgent: builder.query({
    //   query: () => "agents",
    // }),
    // addAgent: builder.mutation({
    //   query: (data) => ({
    //     url: "add-agent",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useGetToolsQuery,
  useGetToolAndDriverQuery,
  useAddToolMutation,
  useRemoveToolMutation,
  useGetAllFilesQuery,
  useGetUniquePostQuery,
  useAddFileMutation,
  useRemoveFileMutation,
  useGetServicesQuery,
  useAddServiceMutation,
  useGetBlogsQuery,
  useAddBlogsMutation,
  useGetAgentQuery,
  useAddAgentMutation
} = baseApi;
