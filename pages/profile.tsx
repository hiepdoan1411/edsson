import FormInput from "../components/FormInput";
import { FormEvent } from "react";

export default function Profile() {
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "Pretending to send form data...",
      Object.fromEntries(new FormData(e.currentTarget).entries())
    );
  };

  return (
    <form
      className="max-w-screen-sm mx-auto m-6 p-3 space-y-3 border"
      onSubmit={submitForm}
    >
      <FormInput id="name" label="Name" />
      <FormInput id="email" label="Email" />
      <FormInput id="address" label="Address" />
      <FormInput id="country" label="Country" />
      <FormInput id="bio" label="About me" />
      <div className="text-center pt-4">
        <button type="submit" className="ml-auto border p-3">
          Save
        </button>
      </div>
    </form>
  );
}
