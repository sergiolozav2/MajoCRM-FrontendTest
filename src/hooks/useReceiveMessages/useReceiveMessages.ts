import { useEffect, useState } from "react";
import { useServerEvents } from "../useServerEvents";
import { apiURL } from "../../services/constants";
import { MessageType } from "./types/messageTypes";

const url = `${apiURL}whatsapp/recibir-mensajes?sesionID=`;

export function useReceiveMessages(sessionID: string) {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const { event, isOpen, startSSE } = useServerEvents(url + sessionID);

  useEffect(() => {
    if (event.name === "messages") {
      setMessages(event.data as MessageType[]);
    }
  }, [event, event.data, event.name]);

  return { messages, isOpen, startSSE };
}
