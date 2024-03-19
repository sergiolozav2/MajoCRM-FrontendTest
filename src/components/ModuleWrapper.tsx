type ModuleWrapperProps = {
  className?: string;
  children: React.ReactNode;
};
export function ModuleWrapper(props: ModuleWrapperProps) {
  return (
    <div className={`py-8 flex flex-col w-full ${props.className}`}>
      {props.children}
    </div>
  );
}
