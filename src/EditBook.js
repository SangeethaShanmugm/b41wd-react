import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";

export function EditBook() {
  const { bookid } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetch(`${API}/book/${bookid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bkdata) => {
        setBook(bkdata);
      });
  }, []);

  return book ? <EditBookForm book={book} /> : "Loading.....";
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);
  const navigate = useNavigate();

  return (
    <div className="add-book-form">
      <TextField
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Enter name"
        value={name}
      />
      <TextField
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder="Enter poster"
        value={poster}
      />
      <TextField
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
        type="text"
        placeholder="Enter rating"
        value={rating}
      />
      <TextField
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="Enter summary"
        value={summary}
      />
      <TextField
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
        type="text"
        placeholder="Enter trailer"
        value={trailer}
      />
      {/* //copy the bookList and add new book to it */}
      <Button
        color="success"
        variant="contained"
        onClick={() => {
          const updatedBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          //1.method - PUT
          // 2. body - data - JSON
          //Headers - JSON
          fetch(`${API}/book/${book.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedBook),
            headers: { "Content-Type": "application/json" },
          })
            .then((data) => data.json())
            .then(() => navigate("/book"));
          // console.log(newBook);
          // setBookList([...bookList, newBook]);
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
