import { useMemo } from "react";
import { convertToCustomMessage } from "../../hooks/useReceiveMessages/convertToCustomMessage";
import { MessageType } from "../../hooks/useReceiveMessages/types/messageTypes";

type MessageWrapperProps = {
  rawMessage: MessageType;
};
export function MessageWrapper(props: MessageWrapperProps) {
  const message = useMemo(() => {
    return convertToCustomMessage(props.rawMessage);
  }, [props.rawMessage]);

  console.log(message?.messageTimestamp);
  if (!message) {
    console.log(message);
    return <div> ERROR AL PROCESAR MENSAJE </div>;
  }
  if (message.type === "Message") {
    return (
      <div className="mt-2 px-2 py-1 rounded-lg bg-green-200 w-fit">
        {message.conversation}
      </div>
    );
  }

  if (message.type === "ExtendedMessage") {
    return <div> {message.text}</div>;
  }

  if (message.type === "Image") {
    return (
      <div>
        {" "}
        <img src={message.imageMessage.jpegThumbnail} />
      </div>
    );
  }
}
