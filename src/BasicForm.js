import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a longer email😉")
    .required("Why not fill this email"),
  password: yup
    .string()
    .min(8, "Need a longer password😉")
    .max(12, "Too much password 😉")
    .required("Why not fill this password"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type="email"
        placeholder="Email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
        placeholder="Password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
