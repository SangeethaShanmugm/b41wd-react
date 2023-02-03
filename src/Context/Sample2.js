import { useContext } from "react";
import { useGlobalContext } from "./example";
export function Sample2() {
  const name = useGlobalContext();

  return (
    <div>
      <h1> Hi,{name}🥳🥳🎆🎇</h1>
    </div>
  );
}
