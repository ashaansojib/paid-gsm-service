import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9988" }),
  endpoints: (builder) => ({
    // posts for blog
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    addBlogs: builder.mutation({
      query: (data) => ({
        url: "/add-blog",
        method: "POST",
        body: data,
      }),
    }),
    // single file and section
    getAllFiles: builder.query({
      query: () => "/all-files",
    }),
    addFile: builder.mutation({
      query: (data) => ({
        url: "/add-file",
        method: "POST",
        body: data,
      }),
    }),
    removeFile: builder.mutation({
      query: (id) => ({
        url: `/remove-post/${id}`,
        method: 'DELETE',
      }),
    }),
    getUniquePost: builder.query({
      query: () => ({
        url: '/unique-posts',
      }),
    }),
    // tools and driver section--------------------------------
    getTools: builder.query({
      query: () => ({
        url: "/all-tools",
      }),
    }),
    addTool: builder.mutation({
      query: (data) => ({
        url: "/add-tool",
        method: "POST",
        body: data,
      }),
    }),
    getToolAndDriver: builder.query({
      query: () => "/unique-brands",
    }),
    removeTool: builder.mutation({
      query: (id) => ({
        url: `/remove-tool/${id}`,
        method: "DELETE",
      }),
    }),
    // service section------------------------------------
    getServices: builder.query({
      query: () => "/o-services",
    }),
    addService: builder.mutation({
      query: (data) => ({
        url: "/add-service",
        method: "POST",
        body: data,
      }),
    }),
    // agents apis
    getAgent: builder.query({
      query: () => "/agents",
    }),
    addAgent: builder.mutation({
      query: (data) => ({
        url: "/add-agent",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllFilesQuery,
  useGetUniquePostQuery,
  useAddFileMutation,
  useRemoveFileMutation,
  useGetServicesQuery,
  useAddServiceMutation,
  useGetBlogsQuery,
  useAddBlogsMutation,
  useGetAgentQuery,
  useAddAgentMutation,
  useGetToolsQuery,
  useGetToolAndDriverQuery,
  useAddToolMutation,
  useRemoveToolMutation,
} = baseApi;
