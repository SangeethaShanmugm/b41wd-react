import { useEffect, useState } from "react";
import { Book } from "./Book";
import { API } from "./global";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  // console.log(bookList);
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  const getBooks = () => {
    (`${API}/book`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bkl) => {
        setBookList(bkl);
      });
  };

  useEffect(() => getBooks(), []);

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              <IconButton
                color="error"
                aria-label="deleteButton"
                onClick={() => {
                  fetch(`${API}/book/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                color="secondary"
                aria-label="editButton"
                onClick={() => navigate(`/book/edit/${bk.id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
