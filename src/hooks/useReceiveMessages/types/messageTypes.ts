export type MessageContextInfoType = {
  deviceListMetadata: {
    senderTimestamp: number;
    recipientTimestamp: number;
  };
};
export type MessageKeyType = {
  remoteJid: string; // 591234234@s.whatsapp.net
  fromMe: boolean;
  id: string;
};

export type ImageMessageType = {
  url: string; // Se borra luego, pero usare el jpegthumbnail
  mimetype: string;
  caption: string; // Texto
  mediaKeyTimestamp: string; // Timestamp pero esta en string
  jpegThumbnail: string;
  viewOnce: boolean | undefined;
};
export type MessageType = {
  key: MessageKeyType;
  message: {
    conversation?: string;
    messageContextInfo: MessageContextInfoType;
    reactionMessage?: {
      key: MessageKeyType; // Info de la persona que reacciona
      text: string; // Emoji 
      senderTimestampMs: string;
    };
    imageMessage: ImageMessageType;
    viewOnceMessageV2?: {
      message: {
        imageMessage: ImageMessageType;
      };
    };
    extendedTextMessage?: {
      text: string;
      contextInfo: {
        quotedMessage?: {
          jpegThumbnail?: string; // Imagen en base64
        };
      };
      messageContextInfo: MessageContextInfoType;
    };
  } | null;
  reactions?: {
    key: MessageKeyType;
    text: string;
  }[];
  messageTimestamp: number;
  pushName: string; // Nombre de contacto u telefono
  status: number;
};
