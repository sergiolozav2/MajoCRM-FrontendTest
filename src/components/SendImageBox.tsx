import { useSendImage } from "../hooks/useSendImage";

const sesionID = "holas";
export function SendImageBox() {
  const { fetchData: send } = useSendImage();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mensaje = formData.get("mensaje")?.toString() ?? "";
    send({ sesionID, mensaje, telefono: "59165312944" });
  }
  return (
    <div className="mt-8">
      <form className="gap-2 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="px-2 py-1 outline-none border border-stone-400"
          name="mensaje"
          type="text"
        />
        <button className="px-2 py-1 rounded-md bg-stone-900 text-stone-50">
          Envíar imagen
        </button>
      </form>
    </div>
  );
}
