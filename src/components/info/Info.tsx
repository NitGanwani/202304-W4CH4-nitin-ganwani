import { useContext } from "react";
import { Context } from "../../context/context";

export function Info() {
  const {
    phoneContext: { handleChange },
  } = useContext(Context);

  return (
    <>
      <span className={handleChange()}>Calling...</span>
    </>
  );
}
