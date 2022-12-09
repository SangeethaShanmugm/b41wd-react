import "./App.css";
import { AddColor } from "./AddColor";
import Msg from "./Msg";
import double from "./Msg";
import { Welcome } from "./Welcome"; // named - Import

console.log(double(100));

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
      {/* <AddColor /> */}
      <Book />
    </div>
  );
  //JSX ends
}

function Book() {
  const book = {
    name: "The Charlotte's Web",
    rating: 8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur  in her web in order to persuade the farmer to let him live",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
  };
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-specs">
        <h2 className="book-name">{book.name}</h2>
        <p className="book-rating">⭐{book.rating}</p>
      </div>
      <p className="book-summary">{book.summary}</p>
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
