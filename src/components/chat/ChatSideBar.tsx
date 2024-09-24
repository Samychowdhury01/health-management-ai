import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ChatList from "./ChatList";

const ChatSideBar = () => {
  return (
    <>
      <div className="text-center">
        <Link to="/chat">
          <Button>Add New Conversation</Button>
        </Link>
      </div>
      <div className="mt-5">
        <ChatList/>
      </div>
    </>
  );
};

export default ChatSideBar;
