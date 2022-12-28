import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";

export function Book({ book, id }) {
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

  const navigate = useNavigate();

  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-specs">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>
        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>
      <IconButton
        aria-label="toggle-description"
        color="primary"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}
      <IconButton
        aria-label="info"
        color="primary"
        onClick={() => navigate("/book/" + id)}
      >
        <InfoIcon />
      </IconButton>
      {/* <p style={summaryStyles} className="book-summary">
              {book.summary}
            </p> */}
      {show ? <p className="book-summary"> {book.summary} </p> : ""}
      <Counter />
    </div>
  );
}
