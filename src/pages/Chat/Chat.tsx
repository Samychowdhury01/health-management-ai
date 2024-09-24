import ChatSideBar from "@/components/chat/ChatSideBar";
import Message from "@/components/chat/Message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useParams } from "react-router-dom";
const Chat = () => {
  const { id } = useParams();
  const [userQuery, setUserQuery] = useState("");
  const [query, setQuery] = useState("");
  const [reply, setReply] = useState("");
  const data = [1, 2, 3, 4];
  // handle send button
  const handleSend = () => {
    setUserQuery(query);
    setReply("hey! how can I assist you?");
  };
  return (
    <div className="flex gap-3">
      {/* side bar */}
      <div className="w-1/4 bg-blue-100 p-4">
        <ChatSideBar />
      </div>
      {/* conversation part */}
      <div className="flex flex-col h-screen space-y-5 w-full">
        {/* Chats */}
        {!id ? (
          <Message userQuery={userQuery} reply={reply} />
        ) : (
          data.map((item) => (
            <Message key={item} userQuery={userQuery} reply={reply} />
          ))
        )}
        {/* Input and button for chat */}
        <div className="p-4 w-full">
          <div className="flex items-center gap-3">
            <Input
              required
              onChange={(e) => setQuery(e?.target.value)}
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
