type ModuleWrapperProps = {
  className?: string;
  children: React.ReactNode;
};
export function ModuleWrapper(props: ModuleWrapperProps) {
  return (
    <div className={`py-8 flex flex-col w-full ${props.className}`}>
      <div className="flex flex-col sm:flex-row px-4 border border-stone-700 gap-1 w-full">
        {props.children}
      </div>
    </div>
  );
}
