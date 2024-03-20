import "./App.css";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { CreateChatPage } from "./components/CreateChatPage/CreateChatPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { WaSesionesPage } from "./components/WaSesionesPage/WaSesionesPage";
import { ViewChatPage } from "./components/ViewChatPage/ViewChatPage";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-slate-100">
      <RegisterPage />
      <LoginPage />
      <CreateChatPage />
      <WaSesionesPage />
      <ViewChatPage />
    </div>
  );
}

export default App;
