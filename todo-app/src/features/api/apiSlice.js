import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CREATED, DELETED } from "./TaskStatusTypes";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (res) => {
        let sorted = res.sort((a, b) => new Date(b.date) - new Date(a.date));
        let transformed = sorted.filter((t) => t.status !== DELETED);
        return transformed;
        //return sorted;
      },
      providesTags: ["todo"],
    }),

    getDeletedTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (res) => {
        let sorted = res.sort((a, b) => new Date(b.date) - new Date(a.date));
        let transformed = sorted.filter((t) => t.status === DELETED);
        return transformed;
        //return sorted;
      },
      providesTags: ["todo"],
    }),

    getTaskById: builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: ["todo"],
    }),

    getTaskByUserId: builder.query({
      query: (id) => `/tasks/user/${id}`,
      providesTags: ["todo"],
    }),

    grouptasksByStatus: builder.query({
      query: () => "/tasks/groupby/status",
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
          status: CREATED,
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
export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useGetDeletedTasksQuery,
  useGetTaskByIdQuery,
  useGrouptasksByStatusQuery,
  useGetTaskByUserIdQuery,
} = apiSlice;
