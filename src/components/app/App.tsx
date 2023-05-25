import { Info } from "../info/Info";
import { Keyboard } from "../keyboard/Keyboard";
import { Actions } from "../actions/Actions";

export function App() {
  return (
    <>
      <div className="container">
        <Info></Info>
        <main className="phone">
          <Keyboard></Keyboard>
          <Actions></Actions>
        </main>
      </div>
    </>
  );
}
