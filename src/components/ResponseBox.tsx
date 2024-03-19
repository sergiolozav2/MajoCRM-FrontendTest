/* eslint-disable @typescript-eslint/no-explicit-any */
export function ResponseBox({ result }: { result: any }) {
  return (
    result && (
      <pre className="overflow-auto text-sm">{JSON.stringify(result, null, 2)}</pre>
    )
  );
}
