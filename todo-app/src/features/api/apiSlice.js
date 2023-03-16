import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (res) => res.sort((a, b) => b.date - a.date),
      providesTags: ["todo"],
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: {
          ...task,
          id: nanoid(),
          date: new Date(),
          status: "CREATED",
        },
      }),
      invalidatesTags: ["todo"],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: {
          ...task,
          date: new Date(),
        },
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});
export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation } =
  apiSlice;
