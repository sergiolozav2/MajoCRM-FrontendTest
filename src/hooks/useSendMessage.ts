import { sendMessageService, sendMessageType } from "../services/sendMessage";
import { useService } from "./useService";

export function useSendMessage() {
  const { data, error, fetchData, loading } = useService<sendMessageType>({
    fn: sendMessageService,
  });

  return { data, error, fetchData, loading };
}
