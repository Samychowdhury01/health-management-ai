import { baseApi } from "../api";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    storeMessage: builder.mutation({
      query: (payload) => {
        return {
          url: "/messages",
          method: "POST",
          body: payload,
        };
      },
    }),
    createConversation: builder.mutation({
      query: (userId) => {
        console.log("console", { userId });
        console.log(userId, "from query", "line 17");
        return {
          url: "/conversations",
          method: "POST",
          body: {
            userId,
          },
        };
      },
    }),
    storeMessageInConversation: builder.mutation({
      query: (payload) => {
        
        return {
          url: `/conversations/${payload?.id}`,
          method: "PUT",
          body: {
            messageId: payload.messageId,
          },
        };
      },
    }),
  }),
});

export const {
  useStoreMessageInConversationMutation,
  useStoreMessageMutation,
  useCreateConversationMutation,
} = messageApi;
