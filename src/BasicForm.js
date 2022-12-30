import { useFormik } from "formik";

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: ,
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
        value={formik.values.email}
        type="email"
        placeholder="Email"
      />
      <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
