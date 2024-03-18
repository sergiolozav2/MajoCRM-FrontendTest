import {
  ImageMessageType,
  MessageContextInfoType,
  MessageKeyType,
} from "./messageTypes";

interface CustomMessageBase {
  key: MessageKeyType;
  messageContextInfo: MessageContextInfoType;
  messageTimestamp: number;
  pushName: string;
  status: number;
}

export interface CustomMessageText extends CustomMessageBase {
  type: "Message";
  conversation: string;
}

export interface CustomMessageImage extends CustomMessageBase {
  type: "Image";
  imageMessage: ImageMessageType;
}

export interface CustomMessageViewOnceImage extends CustomMessageBase {
  type: "ViewOnceImage";
  imageMessage: ImageMessageType;
}

export interface CustomMessageReaction extends CustomMessageBase {
  type: "Reaction";
  key: MessageKeyType; // Info de la persona que reacciona
  text: string; // Emoji generalmente
  senderTimestampMs: string;
}

export interface CustomMessageExtended extends CustomMessageBase {
  type: "ExtendedMessage";
  text: string;
  contextInfo: {
    quotedMessage?: {
      jpegThumbnail?: string; // Imagen en base64
    };
  };
}
