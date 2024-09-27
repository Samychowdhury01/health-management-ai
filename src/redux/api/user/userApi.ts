import { baseApi } from "../api";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
    }),
    getUserProfile: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
    }),
    updateUserProfile: builder.mutation({
      query: (payload) => {
        return {
          url: "/users/me",
          method: "PUT",
          body: payload,
        };
      },
    }),
  }),
});
export const {
  useGetAllUsersQuery,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} = userApi;
