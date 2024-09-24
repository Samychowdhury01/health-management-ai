import ChatSideBar from "@/components/chat/ChatSideBar";
import Message from "@/components/chat/Message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getHealthKeywords } from "@/utils/getHealthKeywords";
import { TConversation } from "@/types";

const Chat = () => {
  // Google Generative AI setup
  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT as string
  );
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
  });

  // to show the messages of a specific conversation
  const { id } = useParams();
  
  const [query, setQuery] = useState<string>("");
  const [conversation, setConversation] = useState<TConversation[]>([]);
  const healthKeywords = getHealthKeywords();

  // Handle send button
  const handleSend = async () => {
    if (!query.trim()) return; // Prevent sending empty query

    // Add the user's query to the conversation and set loading to true for the latest query
    setConversation((prev) => [
      ...prev,
      { userQuery: query, reply: "", loading: true },
    ]);

    const filterQuery = healthKeywords.some((keyword) =>
      new RegExp(keyword, "i").test(query)
    );

    if (!filterQuery) {
      // Update conversation with the error message
      setConversation((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? {
                ...msg,
                reply:
                  "Ahh! I can only help you with your health-related issues. Sorry!",
                loading: false,
              }
            : msg
        )
      );
      setQuery(""); // Clear the input field after sending
    } else {
      const result = await model.generateContent(query);
      const response = await result.response;
      const text = response.text();

      // Update the conversation with the AI response
      setConversation((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { ...msg, reply: text, loading: false }
            : msg
        )
      );
    }

    setQuery(""); // Clear the input field after sending
  };

  return (
    <div className="flex gap-3">
      {/* Side bar */}
      <div className="w-1/4 bg-blue-100 p-4">
        <ChatSideBar />
      </div>
      {/* Conversation part */}
      <div className="flex flex-col space-y-5 w-full">
        {/* Chats */}
        {conversation.map((conv, index) => (
          <Message
            key={index}
            userQuery={conv.userQuery}
            reply={conv.reply}
            loading={conv.loading}
          />
        ))}

        {/* Input and button for chat */}
        <div className="p-4 w-full">
          <div className="flex items-center gap-3">
            <Input
              required
              value={query} // Bind input value to the state
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask your assistant"
              className="shadow-xl"
            />
            <Button onClick={handleSend} variant="default">
              <FaLocationArrow size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;