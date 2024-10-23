import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/app/types/User";

type GetRandomUsersResponse = {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};

export const randomUserApi = createApi({
  reducerPath: "randomUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getRandomUsers: builder.query<GetRandomUsersResponse, void>({
      query: () => "?results=20&seed=abc&nat=gb",
    }),
  }),
});

export const useGetRandomUserQuery = (userId: string) => {
  return randomUserApi.useGetRandomUsersQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      data: data?.results.find((user) => user.id.value === userId),
      ...rest,
    }),
  });
};

export const { useGetRandomUsersQuery } = randomUserApi;
