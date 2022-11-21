import React, { useState } from "react";
import Axios from "axios";

import "../../assets/css/AppStyle.css";
import { Form } from "react-router-dom";

Axios.post(`https://api-ri7.herokuapp.com/api/users/login`, {
  email: "loremipsum@test.com",
  password: "wasd",
  firstname: "lorem",
  lastname: "ispum",
  city: "Aubagne",
  cap: "13400",
});

function Login() {
  return (
    <div className="app">
      <Form name="basic" initialValue={{ remember: true }} autoComplete="off">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ reauired: true, message: "Please enter your username" }]}
        >
          <input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ reauired: true, message: "Please enter your password" }]}
        >
          <input />
        </Form.Item>
        <Form.Item>
          <button>Connection</button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
