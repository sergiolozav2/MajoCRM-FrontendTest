import { useEffect, useState } from "react";
import { useServerEvents } from "./useServerEvents";

export function useCreateSessionWA(url: string) {
  const [qr, setQr] = useState<string | undefined>(undefined);

  const { event, isOpen, startSSE } = useServerEvents(url);

  useEffect(() => {
    if (event.name === "qr") {
      setQr(event.data as string);
    }
  }, [event, event.data, event.name]);

  return { qr, isOpen, startSSE };
}
