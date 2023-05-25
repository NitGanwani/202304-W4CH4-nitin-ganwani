export type PropsType = {
  number: string;
};

export function Key({ number }: PropsType) {
  return (
    <>
      <li>
        <button className="key">{number}</button>
      </li>
    </>
  );
}
