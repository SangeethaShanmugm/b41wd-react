import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddBook({ bookList, setBookList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  console.log(bookList);
  return (
    <div>
      <div className="add-book-form">
        <TextField
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter name"
          value={name} />
        <TextField
          label="Poster"
          variant="outlined"
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Enter poster"
          value={poster} />
        <TextField
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Enter rating"
          value={rating} />
        <TextField
          label="Summary"
          variant="outlined"
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Enter summary"
          value={summary} />
        <TextField
          label="Trailer"
          variant="outlined"
          onChange={(event) => setTrailer(event.target.value)}
          type="text"
          placeholder="Enter trailer"
          value={trailer} />
        {/* //copy the bookList and add new book to it */}
        <Button
          variant="contained"
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            console.log(newBook);
            setBookList([...bookList, newBook]);
            navigate("/book");
          }}
        >
          Add Book
        </Button>
      </div>
    </div>
  );
}
