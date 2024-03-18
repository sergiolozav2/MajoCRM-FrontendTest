import { useReceiveMessages } from "../../hooks/useReceiveMessages/useReceiveMessages";
import { MessageWrapper } from "./MessageWrapper";

export function ReceiveMessagesBox() {
  const { messages, startSSE } = useReceiveMessages("holas");
  return (
    <div className="mt-8">
      <button
        className="min-w-52 px-2 py-1 rounded-md bg-stone-900 text-stone-50"
        onClick={startSSE}
      >
        Recibir mensajes
      </button>
      <div className="flex flex-col">
        {messages?.map((message) => (
          <MessageWrapper key={message.key.id} rawMessage={message} />
        ))}
      </div>
    </div>
  );
}
