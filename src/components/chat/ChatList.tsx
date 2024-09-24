const data = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 1,
    name: "John",
  },
  {
    id: 1,
    name: "John",
  },
];
const ChatList = () => {
  return (
    <div>
      {data.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
};

export default ChatList;
