import { useState } from "react";
import { AuthService, MensajesService } from "../../client";

export function BaseAppPage() {
  const [data, setData] = useState({ email: "", password: "" });
  const [result, setResult] = useState(undefined);
  async function handleLogin() {
    const response = await AuthService.postAuthLogin(data);
    setResult(response);
  }

  async function handleCargarMensajes() {
    const messages = await MensajesService.getMensajes("hola");
    console.log(messages);
  }
  return (
    <div className="py-8 flex flex-col w-full bg-yellow-300">
      <div className="mx-auto border border-stone-700 gap-1 flex flex-col max-w-96">
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
      </div>

      <div className="mx-auto border border-stone-700 gap-1 flex flex-col max-w-96">
        <p>Obtener mensajes</p>
        <button
          className="bg-black text-stone-50"
          onClick={handleCargarMensajes}
        >
          Obtener mensajes
        </button>
      </div>
    </div>
  );
}
