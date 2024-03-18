import "./App.css";
import { ImageQR } from "./components/ImageQR";
import { ReceiveMessagesBox } from "./components/ReceiveMessagesBox/ReceiveMessagesBox";
import { SendImageBox } from "./components/SendImageBox";
import { SendMessageBox } from "./components/SendMessageBox";
import { useCreateSessionWA } from "./hooks/useCreateSessionWA";
import { apiURL } from "./services/constants";

const url = "whatsapp/sesion?sesionID=";
const sesionID = "holas";
function App() {
  const { qr, startSSE } = useCreateSessionWA(`${apiURL}${url}${sesionID}`);

  function handleStartSSE() {
    startSSE();
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-slate-100">
      <div className="">
        <button
          className="mt-32 px-2 py-1 rounded-md bg-stone-900 text-stone-100"
          onClick={handleStartSSE}
        >
          Obtener QR de Whatsapp
        </button>
        {qr && <ImageQR className="mt-4 h-80 aspect-square" dataUri={qr} />}
      </div>
      <div>
        <SendMessageBox />
      </div>
      <div>
        <SendImageBox />
      </div>
      <div>
        <ReceiveMessagesBox />
      </div>
    </div>
  );
}

export default App;
