import { useState } from "react";
export default function MyForm() {
  const [formInputs, setFromInputs] = useState({ name: "", email: "" });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs.name, formInputs.email);
      }}
    >
      <label>Name :</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFromInputs({ ...formInputs, name: event.target.value });
        }}
      />
      <hr />

      <label>Email :</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          setFromInputs({ ...formInputs, email: event.target.value });
        }}
      />
      <hr />

      <button>Submit</button>
    </form>
  );
}
