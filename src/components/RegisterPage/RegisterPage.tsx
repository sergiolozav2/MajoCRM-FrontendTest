import { useState } from "react";
import { AuthService } from "../../client";
import { Button } from "../Button";
import { ModuleWrapper } from "../ModuleWrapper";
import { BasicInput } from "../BasicInput";
import { ResponseBox } from "../ResponseBox";

export function RegisterPage() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    password: "",
    correo: "",
    telefono: "",
    segundoApellido: "",
  });
  const [empresa, setEmpresa] = useState({
    nombreEmpresa: "",
  });
  const [response, setResponse] = useState();
  async function handleRegisterPage() {
    AuthService.postAuthRegister({
      usuario,
      empresa,
    })
      .then((result) => {
        setResponse(result);
      })
      .catch((error) => {
        setResponse(error);
      });
  }
  return (
    <ModuleWrapper className="bg-blue-300">
      <div className="flex flex-col min-w-64">
        <p>Registrar cuenta nueva</p>
        <BasicInput
          label="Nombre"
          dataName="nombre"
          defaultValue="Pedro"
          setData={setUsuario}
        />
        <BasicInput
          label="Apellido"
          dataName="apellido"
          defaultValue="Marco"
          setData={setUsuario}
        />
        <BasicInput
          label="SegundoApellido"
          dataName="segundoApellido"
          defaultValue="Perez"
          setData={setUsuario}
        />
        <BasicInput
          label="Password"
          dataName="password"
          defaultValue="string"
          setData={setUsuario}
        />
        <BasicInput
          label="Correo"
          dataName="correo"
          defaultValue="user@example.com"
          setData={setUsuario}
        />
        <BasicInput
          label="Telefono"
          defaultValue="+123456"
          dataName="telefono"
          setData={setUsuario}
        />
        <BasicInput
          label="Nombre Empresa"
          defaultValue="Maxcorp"
          dataName="nombreEmpresa"
          setData={setEmpresa}
        />
        <Button onClick={handleRegisterPage}>Crear cuenta</Button>
      </div>
      <ResponseBox result={response} />
    </ModuleWrapper>
  );
}
