import { useCreateSessionWA } from "../../hooks/useCreateSessionWA";
import { apiURL } from "../../services/constants";
import { Button } from "../Button";
import { ImageQR } from "../ImageQR";
import { ModuleWrapper } from "../ModuleWrapper";

const url = "whatsapp/sesion";
export function CreateChatPage() {
  const { qr, startSSE } = useCreateSessionWA(`${apiURL}${url}`);

  function handleStartSSE() {
    startSSE();
  }
  return (
    <ModuleWrapper className="bg-green-300">
      <p>Crear chat de whatsapp</p>
      <Button onClick={handleStartSSE}>Obtener QR de Whatsapp</Button>
      {qr && <ImageQR className="mt-4 h-80 aspect-square" dataUri={qr} />}
    </ModuleWrapper>
  );
}
