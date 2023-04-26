import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};
function Chatpage({ params: { id } }: Props) {
  console.log(id);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* main chatOutput */}
      <Chat chatId={id} />
      {/* ChatInput */}
      <ChatInput chatId={id} />
    </div>
  );
}

export default Chatpage;
