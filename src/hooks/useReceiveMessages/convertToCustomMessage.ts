import {
  CustomMessageExtended,
  CustomMessageImage,
  CustomMessageReaction,
  CustomMessageText,
  CustomMessageViewOnceImage,
} from "./types/customMessageTypes";
import { MessageType } from "./types/messageTypes";

export function convertToCustomMessage(
  message: MessageType
):
  | CustomMessageText
  | CustomMessageImage
  | CustomMessageViewOnceImage
  | CustomMessageExtended
  | CustomMessageReaction
  | undefined {
  if (!message.message) {
    console.log("NO RECONOCIDO: ", message);
    return;
  }
  const messageContextInfo = message.message?.messageContextInfo;
  const base = {
    key: message.key,
    messageTimestamp: message.messageTimestamp,
    pushName: message.pushName,
    status: message.status,
    messageContextInfo,
  };
  if (message.message?.conversation) {
    return {
      ...base,
      type: "Message",
      conversation: message.message.conversation,
    };
  }

  if (message.message.imageMessage) {
    return {
      ...base,
      type: "Image",
      imageMessage: message.message.imageMessage,
    };
  }

  if (message.message.viewOnceMessageV2) {
    return {
      ...base,
      type: "Image",
      imageMessage: {
        ...message.message.viewOnceMessageV2.message.imageMessage,
        viewOnce: true,
      },
    };
  }

  if (message.message.extendedTextMessage) {
    return {
      ...base,
      ...message.message.extendedTextMessage,
      type: "ExtendedMessage",
    };
  }

  if (message.message.reactionMessage) {
    return {
      ...base,
      ...message.message.reactionMessage,
      type: "Reaction",
    };
  }
  console.log("NO RECONOCIDO: ", message);
}
