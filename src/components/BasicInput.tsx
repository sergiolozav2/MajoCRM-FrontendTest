import { ChangeEvent, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface BasicInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  dataName: string;
  setData: (data: any) => void;
}

export function BasicInput(props: BasicInputProps) {
  const { defaultValue, dataName, setData, label, ...rest } = props;
  useEffect(() => {
    if (defaultValue) {
      setData((d: any) => ({
        ...d,
        [dataName]: defaultValue,
      }));
    }
  }, [dataName, defaultValue, setData]);
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    props.setData((d: any) => ({
      ...d,
      [props.dataName]: event?.target?.value,
    }));
  }
  return (
    <>
      <label>{label}</label>
      <input onChange={handleOnChange} {...rest} defaultValue={defaultValue} />
    </>
  );
}
