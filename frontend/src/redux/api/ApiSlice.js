import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../contstant";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL});

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});
