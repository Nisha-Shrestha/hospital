import { Link } from "react-router-dom";
import { Form, Input, Checkbox, Button, message } from "antd";
import "./Register.css";
import { useState } from "react";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    console.log("Form Values:", values); // Log the form values

    try {
      const response = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      message.success("Registration successful");
    } catch (error) {
      console.error("Error registering:", error);
      message.error("Registration failed");
    }

    setLoading(false);
  };

  return (
    <main className="bodyreg">
      <div>
        <Form
          form={form}
          labelCol={{ span: 10 }}
          layout="vertical"
          onFinish={onFinish}
        >
          <div className="header">
            <h2 style={{ color: "#997f7f", fontWeight: "500" }}>Register</h2>
            <div>
              <span style={{ marginRight: "4px", color: "#997f7f" }}>
                Already have an account?
              </span>
              <Link to="/login">Login to your account</Link>
            </div>
          </div>
          <h3>Hospital Information</h3>
          <div className="input-container">
            <Form.Item
              autoComplete="off"
              label={
                <span
                  className="custom-label"
                  style={{ paddingBottom: "0px", whiteSpace: "nowrap", width: "auto" }}
                >
                  Hospital Name<span className="required-symbol">*</span>
                </span>
              }
              name="hosname"
              rules={[
                {
                  required: true,
                  message: "Enter Your hospital name",
                },
                {
                  whitespace: true,
                },
                {
                  min: 4,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="text"
              />
            </Form.Item>
            <Form.Item
              autoComplete="off"
              label={
                <span
                  className="custom-label"
                  style={{ paddingBottom: "0px", width: "500px" }}
                >
                  Prefix (Hospital File Format)<span className="required-symbol">*</span>
                </span>
              }
              name="format"
              rules={[
                {
                  required: true,
                  message: "Enter file format",
                },
                {
                  whitespace: true,
                },
                {
                  max: 4,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="text"
              />
            </Form.Item>
          </div>
          <div className="input-container">
            <Form.Item
              autoComplete="off"
              label={
                <span
                  className="custom-label"
                  style={{ paddingBottom: "0px", width: "500px" }}
                >
                  Hospital Address<span className="required-symbol">*</span>
                </span>
              }
              name="address"
              rules={[
                {
                  required: true,
                  message: "Enter Address",
                },
                {
                  whitespace: true,
                },
                {
                  min: 4,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="text"
              />
            </Form.Item>
          </div>
          <h3>User Information</h3>
          <div className="input-container">
            <Form.Item
              autoComplete="off"
              label={
                <span className="custom-label" style={{ paddingBottom: "0px" }}>
                  First Name<span className="required-symbol">*</span>
                </span>
              }
              name="fname"
              rules={[
                {
                  required: true,
                  message: "Enter Your First name",
                },
                {
                  whitespace: true,
                },
                {
                  min: 4,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="text"
              />
            </Form.Item>
            <Form.Item
              autoComplete="off"
              label={
                <span className="custom-label" style={{ paddingBottom: "0px" }}>
                  Last Name<span className="required-symbol">*</span>
                </span>
              }
              name="lname"
              rules={[
                {
                  required: true,
                  message: "Enter your last name",
                },
                {
                  whitespace: true,
                },
                {
                  min: 4,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="text"
              />
            </Form.Item>
          </div>
          <div className="input-container">
            <Form.Item
              autoComplete="off"
              label={
                <span className="custom-label" style={{ paddingBottom: "0px" }}>
                  Email<span className="required-symbol">*</span>
                </span>
              }
              name="email"
              rules={[
                {
                  required: true,
                  message: "Enter Your Email",
                },
                {
                  whitespace: true,
                },
                {
                  min: 4,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="email"
              />
            </Form.Item>
            <Form.Item
              autoComplete="off"
              label={
                <span className="custom-label" style={{ paddingBottom: "0px" }}>
                  Phone Number<span className="required-symbol">*</span>
                </span>
              }
              name="pnumb"
              rules={[
                {
                  required: true,
                  message: "Enter your Number",
                },
                {
                  whitespace: true,
                },
                {
                  min: 10,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="number"
              />
            </Form.Item>
          </div>
          <div className="input-container">
            <Form.Item
              autoComplete="off"
              label={
                <span className="custom-label" style={{ paddingBottom: "0px" }}>
                  Username<span className="required-symbol">*</span>
                </span>
              }
              name="uname"
              rules={[
                {
                  required: true,
                  message: "Enter Your Username",
                },
                {
                  whitespace: true,
                },
                {
                  min: 4,
                },
              ]}
              hasFeedback
            >
              <Input
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="text"
              />
            </Form.Item>
            <Form.Item
              autoComplete="off"
              label={
                <span className="custom-label" style={{ paddingBottom: "0px" }}>
                  Password<span className="required-symbol">*</span>
                </span>
              }
              name="password"
              rules={[
                {
                  required: true,
                  message: "Enter your password",
                },
                {
                  whitespace: true,
                },
                {
                  min: 4,
                },
              ]}
              hasFeedback
            >
              <Input.Password
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "none",
                  padding: "7px 7px",
                }}
                type="password"
              />
            </Form.Item>
          </div>
          <div className="footer-div">
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject('You must agree to the terms'),
                },
              ]}
            >
              <Checkbox>
                I have read and agree to the terms of{" "}
                <span style={{ color: "cornflowerblue" }}>sudoEMR</span>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ width: "200px" }}
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </main>
  );
};
