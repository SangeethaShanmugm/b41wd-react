import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

//name - required
//poster - min 4, required
//rating - 0 - 10 - required
// summary - min 20 chars, required
// trailer - min 4 - required

const bookValidationSchema = yup.object({
  name: yup.string().required("Why not fill the name 😉"),
  poster: yup
    .string()
    .min(4, "Need longer poster😉")
    .required("Why not fill this poster"),
  rating: yup
    .number()
    .min(0, "Need a higher rating")
    .max(10, "To much rating")
    .required("Why not fill rating 😉"),
  summary: yup
    .string()
    .min(20, "Need longer Summary")
    .required("Why not fill summary😉"),
  trailer: yup
    .string()
    .min(4, "Need longer Trailer")
    .required("Why not fill trailer"),
});

export function AddBook({ bookList, setBookList }) {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: bookValidationSchema,
    onSubmit: (newBook) => {
      // console.log("onSubmit", newBook);
      createBook(newBook);
    },
  });

  const navigate = useNavigate();
  // console.log(bookList);

  const createBook = (newBook) => {
    console.log("createBook", newBook);
    fetch(`${API}/book`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate("/book"));
    console.log(newBook);
    setBookList([...bookList, newBook]);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="add-book-form">
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error
        helperText={"Nice"}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

      <TextField
        id="poster"
        name="poster"
        label="Poster"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
        error
        helperText={"Nice"}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}

      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating}
        error
        helperText={"Nice"}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        id="summary"
        name="summary"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
        label="Summary"
        error
        helperText={"Nice"}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}
      <TextField
        id="trailer"
        name="trailer"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.trailer}
        label="Trailer"
        error
        helperText={"Nice"}
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""}
      {/* //copy the bookList and add new book to it */}
      <Button
        type="submit"
        variant="contained"
        onClick={createBook}
        // onClick={() => {
        //   const newBook = {
        //     // name: name,
        //     // poster: poster,
        //     // rating: rating,
        //     // summary: summary,
        //     // trailer: trailer,
        //   };
        //   //1.method - POST
        //   // 2. body - data - JSON
        //   //Headers - JSON
        //   fetch(`${API}/book`, {
        //     method: "POST",
        //     body: JSON.stringify(newBook),
        //     headers: { "Content-Type": "application/json" },
        //   })
        //     .then((data) => data.json())
        //     .then(() => navigate("/book"));
        //   // console.log(newBook);
        //   // setBookList([...bookList, newBook]);
        // }}
      >
        Add Book
      </Button>
    </form>
  );
}
