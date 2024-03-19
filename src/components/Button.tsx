type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button
      className="mt-8 px-2 py-1 rounded-md bg-black text-stone-50"
      {...props}
    >
      {props.children}
    </button>
  );
}
