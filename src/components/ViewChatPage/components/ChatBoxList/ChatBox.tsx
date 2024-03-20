import { ChatType } from "../../types/chatTypes";
import { MensajeText } from "./MensajeText";

type ChatBoxProps = {
  chat: ChatType;
};

export function ChatBox(props: ChatBoxProps) {
  return (
    <div className="flex bg-green-400 flex-col">
      <p className="mb-1">De: {props.chat.jid}</p>

      {props.chat.mensajes.map((mensaje) => (
        <MensajeText mensaje={mensaje} />
      ))}
    </div>
  );
}
