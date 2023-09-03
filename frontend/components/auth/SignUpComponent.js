import { useState } from "react";
import React from "react";
import { signup } from "../../actions/auth";

const SignUpComponent = () => {
  const [values, setValues] = useState({
    name: "wdf",
    email: "wdf@wdf.com",
    password: "123456",
    age: "19",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, age, error, loading, message, showForm } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password, age };

    signup(user).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          age: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });

    console.log(
      "handle submit",
      console.table({
        name,
        email,
        password,
        age,
        error,
        loading,
        message,
        showForm,
      })
    );
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Type your name"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type your email"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Type your password"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={age}
            onChange={handleChange("age")}
            type="number"
            className="form-control"
            placeholder="Type your age"
          ></input>
        </div>
        <div>
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    );
  };
  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
    </React.Fragment>
  );
};

export default SignUpComponent;
