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
    // single file and tools
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
    // service section
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
  }),
});

export const {
  useGetAllFilesQuery,
  useAddFileMutation,
  useGetServicesQuery,
  useAddServiceMutation,
  useGetBlogsQuery,
  useAddBlogsMutation,
} = baseApi;
