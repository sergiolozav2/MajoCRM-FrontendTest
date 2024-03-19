import { useState } from "react";
import { AuthService } from "../../client";
import { ModuleWrapper } from "../ModuleWrapper";

export function LoginPage() {
  const [data, setData] = useState({ email: "", password: "" });
  const [result, setResult] = useState(undefined);
  async function handleLogin() {
    const response = await AuthService.postAuthLogin(data);
    setResult(response);
  }

  return (
    <ModuleWrapper className="bg-yellow-300">
      <p>Iniciar sesión</p>
      <label>Correo</label>
      <input
        type="text"
        onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
      />
      <label>Contraseña</label>
      <input
        type="password"
        onChange={(e) => setData((d) => ({ ...d, password: e.target.value }))}
      />
      <button className="bg-black text-stone-50" onClick={handleLogin}>
        Iniciar sesión
      </button>
      {<pre className="overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
    </ModuleWrapper>
  );
}
