import { useEffect, useState } from "react";
import { Book } from "./Book";
import { API } from "./global";
export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  // console.log(bookList);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(`${API}/book`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bkl) => {
        setBookList(bkl);
      });
  }, []);

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={bk.id} book={bk} id={bk.id} />
        ))}
      </div>
    </div>
  );
}
