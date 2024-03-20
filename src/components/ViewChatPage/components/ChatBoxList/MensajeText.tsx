import { MensajeType } from "../../types/chatTypes";

type MensajeText = {
  mensaje: MensajeType;
};

export function MensajeText(props: MensajeText) {
  return (
    <p className="bg-green-200 px-2 py-1">{props.mensaje.wa_contenido}</p>
  );
}
