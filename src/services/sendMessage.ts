import { backend } from "./backend";

export type sendMessageType = {
  sesionID: string;
  mensaje: string;
  telefono: string;
};
export async function sendMessageService(data: sendMessageType) {
  const response = await backend.post("/whatsapp/enviar-mensaje", data);
  return response.data;
}

export async function sendImageService(data: sendMessageType) {
  const response = await backend.post("/whatsapp/enviar-imagen", data);
  return response.data;
}
