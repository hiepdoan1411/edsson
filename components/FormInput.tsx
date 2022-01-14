import { useEffect, useState } from "react";

type Props = {
  id: string;
  label: string;
};

function wait(milliseconds: number) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {}
}
export default function FormInput({ id, label }: Props) {
  // This component is a bit slow to render...
  wait(25);

  const [errorMessage, setErrorMessage] = useState<string>();

  const onInput = (input: string) => {
    if (input.length > 0 && input.length < 5) {
      setErrorMessage("Minimum input length of 5 characters");
    } else {
      setErrorMessage(undefined);
    }
  };

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex-1">
        {label}
      </label>
      <div className="flex-1">
        <input
          type="text"
          id={id}
          name={id}
          className="w-full border rounded p-2"
          onInput={(e) => onInput(e.currentTarget.value)}
        />
        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
}
