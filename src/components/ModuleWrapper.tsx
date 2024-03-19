type ModuleWrapperProps = {
  className?: string;
  children: React.ReactNode;
};
export function ModuleWrapper(props: ModuleWrapperProps) {
  return (
    <div className={`py-8 flex flex-col w-full ${props.className}`}>
      <div className="mx-auto border border-stone-700 gap-1 w-full flex flex-col max-w-md">
        {props.children}
      </div>
    </div>
  );
}
