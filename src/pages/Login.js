import { Form, Input, Button ,Flex} from "antd";
import "./Login.css";
import Logo from "../assets/icon.ico"

export const Login = () => {
  return (
    <main>
      <div className="body">
            <div className="header">
                <img src={Logo} className="logo" alt="Hospital logo" />
                <span>sudoEMR</span>
            </div>
            <Form labelCol={{span : 5}} layout="vertical">
                        <h4>Login Here</h4>
                        <div className="input-box">
                            <Form.Item autoComplete='off' label="Username" 
                            name="Username" 
                            layout = "vertical"
                            rules={[
                                { 
                                required : true,
                                message : 'Enter Your Username',
                                },
                                {
                                    whitespace : true,
                                },
                                {
                                    min : 4,
                                },
                            ]}
                            hasFeedback>
                                <div className="input-container">
                                <Input placeholder="User name" />
                                </div>
                            
                            </Form.Item>
                        </div>
                    <div className="input-box">
                            <Form.Item autoComplete='off'
                            
                            label="Password" 
                            name="Password" 
                            rules={[
                                {
                                    required: true,
                                    message : 'Enter Your Password',
                                },
                                {
                                    whitespace : true,
                                },
                                {
                                    min : 6,
                                },
                            ]}
                            >
                                <div className="input-container">
                                    <Input.Password placeholder="Password"  />
                                </div>
                                
                            </Form.Item>
                    </div>
                    
                    <div className="register">
                        <div className="register-mid">
                            <span>Don't have an account?</span>
                            <a href="#">Register</a>
                        </div>
                        <div className="button">
                        <Form.Item>
                        
                            <Button type="primary" htmlType="submit" size="medium">
                                Login
                            </Button>
                        </Form.Item>
                        </div>
                            
                        
                    </div>
            </Form>
      </div>
    </main>
      
  );
};
