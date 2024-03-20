import { useState } from "react";
import { ChatService } from "../../client";
import { Button } from "../Button";
import { InputWrapper } from "../InputWrapper";
import { ModuleWrapper } from "../ModuleWrapper";
import { ResponseBox } from "../ResponseBox";
import { BasicInput } from "../BasicInput";
import { ChatBoxList } from "./components/ChatBoxList/ChatBoxList";
import { ChatResponseType } from "./types/chatTypes";

export function ViewChatPage() {
  const [response, setResponse] = useState<ChatResponseType>();
  const [data, setData] = useState({ wa_sesionID: "" });
  const [panel, setPanel] = useState(0);
  async function handleObtenerSesiones() {
    ChatService.postChat(data)
      .then((result) => {
        setResponse(result);
      })
      .catch((error) => {
        setResponse(error);
      });
  }
  function handleChangePanel() {
    const totalPanels = 2;
    setPanel((panel + 1) % totalPanels);
  }
  return (
    <ModuleWrapper className="bg-red-300">
      <InputWrapper>
        <p>Obtener chats de cuenta de whatsapp</p>
        <BasicInput
          label="Wa_sesionID"
          dataName="wa_sesionID"
          setData={setData}
        />
        <Button onClick={handleObtenerSesiones}>Cargar chats</Button>
        <Button onClick={handleChangePanel}>Cambiar vista</Button>
      </InputWrapper>
      {panel === 0 && <ResponseBox result={response} />}
      {panel === 1 && <ChatBoxList chats={response?.list} />}
    </ModuleWrapper>
  );
}
