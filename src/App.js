import "./App.css";
import { useState } from "react";
export default function App() {
  //JS starts
  // const name = "Deepa";
  // const name1 = "Abdul";
  const people = ["Ibrahim", "Abdul", "Abilash", "Amreesh", "Arun"];

  //Array of objects
  const users = [
    {
      name: "Ibrahim",
      pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
    },
    {
      name: "Abdul",
      pic: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    },
    {
      name: "Abilash",
      pic: "https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg",
    },
    {
      name: "Amreesh",
      pic: "https://i.pinimg.com/736x/5a/e5/98/5ae598ff624217b9a5c008beb8c512d0.jpg",
    },
  ];

  // index-           0        1          2          3
  //Array of   Strings
  //JS ends
  //JSX starts
  return (
    <div className="App">
      {/* {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))} */}

      {/* <Welcome name = "Deepa"/> */}
      {/* <Welcome name={people[0]} />
      <Welcome name={people[3]} /> */}
      {/* {people.map((personName) => (
        <Welcome name={personName} />
      ))} */}

      {/* <Msg
        name="Abilash"
        pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
      />
      <Msg
        name="Amreesh"
        pic="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
      />
      <Msg
        name="Arun"
        pic="https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg"
      /> */}
      {/* <h1>Hello {name}🥳🥳🥳🥳🥳</h1>
      <h1>Hello {name1}🥳🥳🥳🥳🥳</h1> */}
      {/* <Counter />
      <Counter />
      <Counter /> */}
      <AddColor />
    </div>
  );
  //JSX ends
}

function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("plum");

  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        type="text"
      />
    </div>
  );
}

function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* onClick - camelCase */}
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </button>
    </div>
  );
}

function Welcome({ name }) {
  return (
    <div>
      <h1>Hello {name}🥳🥳🥳🥳🥳</h1>
      {/* <h1>Hello {props.name1}🥳🥳🥳🥳🥳</h1> */}
    </div>
  );
}

//Profile pic and name
function Msg({ name, pic }) {
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>{name}</h1>
      <Counter />
    </div>
  );
}

//App - core component
//JSX -JS XML - converted to JS
//JSX - babel will converted to JS

//Custom components
// 1. First letter must be captial
// 2. It return a JSX element

//{} - Template Syntax

//Hooks - function
//useState -
//const [state, setState] = useState(initialValue)
//state - current scenario
// state of the art technology
// state of mind
