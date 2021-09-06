import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./css/style.css";

function App() {
  return (
    <div>
      <div
        className="customHeader"
        style={{
          backgroundColor: "black",
          height: 40,
          alignItems: "center",
          justifyContent: "end",
          display: "flex",
        }}
      >
        <button
          className="customButton"
          style={{
            backgroundColor: "transparent",
            borderColor: "cyan",
            borderRadius: 30,
            color: "ehite",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "cyan", fontSize: 16 }}>Contact us</p>
        </button>
      </div>
      <div className="doga1"></div>
      <div className="doga2"></div>
      <div className="doga3"></div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Welcome to Login Page</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h3 className="mb-4 text-center">Have an account?</h3>
                <form action="#" className="signin-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password-field"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50">
                      <label className="checkbox-wrap checkbox-primary">
                        Remember Me
                        <input type="checkbox" checked={true} />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#" style={{ color: "#fff" }}>
                        Forgot Password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
