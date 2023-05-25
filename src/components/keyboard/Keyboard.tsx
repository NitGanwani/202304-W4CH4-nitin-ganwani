import { Key } from "../key/Key";

export function Keyboard() {
  const numbers: string[] = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    "Delete",
  ];
  return (
    <>
      <div className="keyboard-container">
        <ol className="keyboard">
          {numbers.map((item) => (
            <Key number={item} key={item}></Key>
          ))}
        </ol>
      </div>
    </>
  );
}
