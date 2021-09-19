import React from "react";
import "./css/style.css";
import "./css/css/hover.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div>
      <div
        className="customHeader"
        style={{
          backgroundColor: "hsl(234, 41%, 23%)",
          height: 40,
          alignItems: "center",
          justifyContent: "end",
          display: "flex",
          padding: 10,
        }}
      >
        <button
          className="customButton hvr-sweep-to-right"
          style={{
            backgroundColor: "transparent",
            borderColor: "cyan",
            borderRadius: 30,
            color: "ehite",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            outline: "none",
          }}
        >
          <FontAwesomeIcon icon={["fab", "apple"]} />
          <FontAwesomeIcon icon={["fab", "microsoft"]} />
          <FontAwesomeIcon icon={["fab", "google"]} />

          <h6 style={{ color: "cyan", fontSize: 14, marginTop: 5 }}>Join us</h6>
        </button>
        <button
          className="hvr-sweep-to-right"
          style={{
            backgroundColor: "transparent",
            borderColor: "cyan",
            borderRadius: 30,
            color: "ehite",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            outline: "none",
          }}
        >
          <h6 style={{ color: "cyan", fontSize: 14, marginTop: 5 }}>
            Contact us
          </h6>
        </button>
      </div>
      <div className="cat1"></div>
      <div className="cat2"></div>
      <div className="cat3"></div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">CBP</h2>
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
