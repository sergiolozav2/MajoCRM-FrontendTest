import { useState } from "react";
import { WhatsappService } from "../../client";
import { Button } from "../Button";
import { InputWrapper } from "../InputWrapper";
import { ModuleWrapper } from "../ModuleWrapper";
import { ResponseBox } from "../ResponseBox";

export function WaSesionesPage() {
  const [response, setResponse] = useState();
  async function handleObtenerSesiones() {
    const result = await WhatsappService.getWhatsappSesiones();
    setResponse(result);
  }
  return (
    <ModuleWrapper className="bg-purple-200">
      <InputWrapper>
        <p>Obtener sesiones creadas</p>
        <Button onClick={handleObtenerSesiones}>Cargar sesiones</Button>
      </InputWrapper>
      <ResponseBox result={response} />
    </ModuleWrapper>
  );
}
