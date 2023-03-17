import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userSlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9001" }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),

    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userSlice;
