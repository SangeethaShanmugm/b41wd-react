import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";

export function EditBook() {
  const { bookid } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch(`${API}/book/${bookid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bkdata) => {
        setBook(bkdata);
      });
  }, []);

  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState("cool");
  const [rating, setRating] = useState("Awesome");
  const [summary, setSummary] = useState("1");
  const [trailer, setTrailer] = useState("2");
  const navigate = useNavigate();

  return (
    <div>
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
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            //1.method - POST
            // 2. body - data - JSON
            //Headers - JSON
            fetch(`${API}/book`, {
              method: "POST",
              body: JSON.stringify(newBook),
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
    </div>
  );
}
