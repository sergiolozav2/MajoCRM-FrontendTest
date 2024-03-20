export interface ChatResponseType {
  list: ChatType[];
}

export interface ChatType {
  chatID:    number;
  jid:       string;
  creadoEn:  Date;
  clienteID: null;
  cliente:   null;
  mensajes:  MensajeType[];
}

export interface MensajeType {
  mensajeID:    number;
  creadoEn:     Date;
  wa_id:        string;
  wa_contenido: string;
  tipoMensaje:  string;
  chatID:       number;
}
