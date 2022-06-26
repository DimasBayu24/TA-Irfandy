import React, { useState, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
// import Form from "react-validation/build/form";
import FormRegister from "react-validation/build/form";
// import Input from "react-validation/build/input";
import RegInput from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Button, Checkbox, Form, Input } from "antd";

import AuthService from "../../services/auth.service";
import { LoginContainer } from "./login.styles";
const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const formReg = useRef();
  const checkBtn = useRef();
  const checkBtnReg = useRef();
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    AuthService.register(
      values.username,
      values.password,
      values.phone,
      values.fullname
    ).then(
      (response) => {
        history.push("/");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regFullname, setRegFullname] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeRegUsername = (e) => {
    const regUsername = e.target.value;
    setRegUsername(regUsername);
  };
  const onChangeRegPassword = (e) => {
    const regPassword = e.target.value;
    setRegPassword(regPassword);
  };
  const onChangeRegPhone = (e) => {
    const regPhone = e.target.value;
    setRegPhone(regPhone);
  };
  const onChangeRegFullname = (e) => {
    const regFullname = e.target.value;
    setRegFullname(regFullname);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    formReg.current.validateAll();

    if (checkBtnReg.current.context._errors.length === 0) {
      AuthService.register(
        regUsername,
        regPassword,
        regPhone,
        regFullname
      ).then(
        (response) => {
          history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <LoginContainer>
        {/* <FormRegister onSubmit={handleRegister} ref={formReg}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <RegInput
              type="text"
              className="form-control"
              name="regUsername"
              value={regUsername}
              onChange={onChangeRegUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <RegInput
              type="password"
              className="form-control"
              name="regPassword"
              value={regPassword}
              onChange={onChangeRegPassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <RegInput
              type="phone"
              className="form-control"
              name="phone"
              value={regPhone}
              onChange={onChangeRegPhone}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Fullname</label>
            <RegInput
              type="fullname"
              className="form-control"
              name="fullname"
              value={regFullname}
              onChange={onChangeRegFullname}
              validations={[required]}
            />
          </div>

          <div
            className="form-group"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Sign Up</span>
            </button>
            <Link to={"/login"}>
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </Link>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtnReg} />
        </FormRegister> */}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Fullname"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your fullname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <Link to={"/login"}>
            <Button type="secondary">Move to Login</Button>
          </Link>
        </Form>
      </LoginContainer>
    </div>
  );
};

export default Register;
