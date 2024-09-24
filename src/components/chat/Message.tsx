const Message = ({
  userQuery,
  reply,
}: {
  userQuery: string;
  reply: string;
}) => {
  return (
    <div className="flex-1 space-y-5 overflow-y-auto p-4">
      {/* User's query */}
      <div className="bg-slate-100 rounded-md w-3/4 ml-auto p-2">
        <p>{userQuery}</p>
      </div>
      {/* AI reply */}
      <div className="bg-slate-100 rounded-md p-2">
        <p>{reply}</p>
      </div>
    </div>
  );
};

export default Message;
