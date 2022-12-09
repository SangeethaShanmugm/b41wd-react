import { Counter } from "./Counter";

//Import & Export  - 2 types
// 1. named - Import & Export - Prefered
// 2. default  - Import & Export - only one can be imported

//Profile pic and name
export default function Msg({ name, pic }) {
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>{name}</h1>
      <Counter />
    </div>
  );
}

const double = (n) => n * 2;

// export { Msg, double }; // named -  Export
