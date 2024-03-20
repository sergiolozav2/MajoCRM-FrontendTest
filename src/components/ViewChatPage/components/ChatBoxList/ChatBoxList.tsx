import { ChatType } from "../../types/chatTypes";
import { ChatBox } from "./ChatBox";

type ChatBoxProps = {
  chats: ChatType[] | undefined;
};

export function ChatBoxList(props: ChatBoxProps) {
  if (!props.chats) return null;
  return (
    <div className="flex flex-col">
      {props.chats.map((chat) => (
        <ChatBox chat={chat} />
      ))}
    </div>
  );
}
