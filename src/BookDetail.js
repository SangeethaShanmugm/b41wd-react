import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export function BookDetail({ bookList }) {
  const { bookid } = useParams();

  const navigate = useNavigate();
  const book = bookList[bookid];
  console.log(bookList);
  console.log(book);
  return (
    <div>
      <iframe
        width="100%"
        height="500px"
        src={book.trailer}
        title="Youtube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-specs">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
