import { sendImageService, sendMessageType } from "../services/sendMessage";
import { useService } from "./useService";

export function useSendImage() {
  const { data, error, fetchData, loading } = useService<sendMessageType>({
    fn: sendImageService,
  });

  return { data, error, fetchData, loading };
}
