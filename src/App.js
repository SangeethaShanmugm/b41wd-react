import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { Msg } from "./Msg";
import { Routes, Route, Link } from "react-router-dom";
const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
  },
];

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Link change page without refresh */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">BookList</Link>
          </li>
          <li>
            <Link to="/color-game">AddColor</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/somewhere">Somewhere</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif"
        alt="404"
      />
    </div>
  );
}

function UserList() {
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
  return (
    <div>
      {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}

function Home() {
  return <h1>Welcome to Book App 😉😉🥳🥳</h1>;
}

function BookList() {
  const bookList = INITIAL_BOOK_LIST;
  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book key={index} book={bk} />
      ))}
    </div>
  );
}

function Book({ book }) {
  const styles = {
    //terinary operator - react- conditional styling
    color: book.rating >= 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);
  //true - visible
  //false - hide
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-specs">
        <h2 className="book-name">{book.name}</h2>
        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle description</button>
      {/* <p style={summaryStyles} className="book-summary">
        {book.summary}
      </p> */}
      {show ? <p className="book-summary"> {book.summary} </p> : ""}
      <Counter />
    </div>
  );
}
