import { useState } from "react";
import { AuthService } from "../../client";
import { ModuleWrapper } from "../ModuleWrapper";
import { ResponseBox } from "../ResponseBox";
import { BasicInput } from "../BasicInput";
import { Button } from "../Button";
import { InputWrapper } from "../InputWrapper";

export function LoginPage() {
  const [data, setData] = useState({ email: "", password: "" });
  const [response, setResponse] = useState(undefined);
  async function handleLogin() {
    AuthService.postAuthLogin(data)
      .then((result) => {
        setResponse(result);
      })
      .catch((error) => {
        setResponse(error);
      });
  }

  return (
    <ModuleWrapper className="bg-yellow-300">
      <InputWrapper>
        <p>Iniciar sesión</p>
        <BasicInput
          label="Correo"
          dataName="email"
          defaultValue="user@example.com"
          setData={setData}
        />
        <BasicInput
          label="Contraseña"
          dataName="password"
          defaultValue="string"
          setData={setData}
        />
        <Button onClick={handleLogin}>Iniciar sesión</Button>
      </InputWrapper>
      <ResponseBox result={response} />
    </ModuleWrapper>
  );
}
