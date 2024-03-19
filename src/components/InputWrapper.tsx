type InputWrapperProps = {
  children?: React.ReactNode;
};

export function InputWrapper(props: InputWrapperProps) {
  return <div className="flex flex-col min-w-64">{props.children}</div>;
}
