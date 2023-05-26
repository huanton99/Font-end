import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import Login from "../../compoments/Login/Login";
import Register from "../../compoments/Register/Register";
const SignIn = () => {
  const [type, setType] = useState(0);
  useEffect(() => {
    _renderForm();
    console.log(type);
  }, [type]);
  const _renderForm = () => {
    switch (type) {
      case 0:
        return <Login setType={setType} />;
      case 1:
        return <Register setType={setType} />;
    }
  };
  return (
    <section className="main">
      <div className="container">
        <div className="container-form">
          <div className="container-form-nav">
            <p>HAZE.</p>
            <button className="button-languges">
              <div id="flag-container">
                <img id="selected-flag" src="img/en.png" />
              </div>
              &nbsp;
              <select id="language-select">
                <option value="en">EN</option>
                <option value="vn">VN</option>
              </select>
            </button>
          </div>
          <div className="form">{_renderForm()}</div>
        </div>

        <div className="image">
          <div className="image-nav">
            <div></div>
            <div style={{ padding: "29px", display: "flex" }}>
              <a
                style={{
                  color: "white",
                  marginTop: "9px",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
                href="#"
                onClick={() => setType((callback) => (callback ? 0 : 1))}
              >
                {type === 0 ? "Sign Up" : "Log in"}
              </a>
              <button
                clas
                className="defautButton"
                style={{
                  width: "80px",
                  height: "40px",
                }}
              >
                Join Us
              </button>
            </div>
          </div>
          <div className="image-user">
            <div
              style={{
                background: "white",
                borderRadius: "50%",
                marginLeft: "13px",
                width: "30px",
                height: "30px",
              }}
            >
              <img
                src="./img/74577.png"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                color: "white",
                fontSize: "12px",
                marginLeft: "20px",
                marginTop: "-2px",
              }}
            >
              Largest Space
              <br />
              Community
            </div>
          </div>
          <div className="image-content">
            <p>
              “
              <br />
              Go any you want in <br /> Glaxy full of wonders!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div className="strikethrough2">
              <p>01</p>
              <hr />
              <p>06</p>
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "right",
                width: "100%",
                marginRight: "24px",
                justifyContent: "right",
              }}
            >
              <button className="defautButton">&larr;</button>
              <button className="defautButton">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
