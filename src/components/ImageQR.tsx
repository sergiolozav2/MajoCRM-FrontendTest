type ImageQRProps = {
  className?: string;
  dataUri: string;
};

export function ImageQR(props: ImageQRProps) {
  return <img className={props.className} src={props.dataUri} />;
}
