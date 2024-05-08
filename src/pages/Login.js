import { Form, Input, Button, message} from "antd";
import "./Login.css";
import Logo from "../assets/icon.ico"

export const Login = () => {
    const onFinish = (values) => {
        if(!values.Username || !values.Username.trim()){
            message.error('enter you username');
            return;
        }
        if(!values.Password || !values.Password.trim()){
            message.error('enter you password');
            return;
        }
        console.log('Form Values', values);
        message.success('Login successful');
    }
  return (
    <main>
      <div className="body">
            <div className="header">
                <img src={Logo} className="logo" alt="Hospital logo" />
                <span className="heading">sudo<span style={{fontSize:"20px",fontWeight:800}}>EMR</span></span>
            </div>
            <Form labelCol={{span : 5}} layout="vertical" onFinish={onFinish}>
                        <h3>Login here</h3>
                        <div className="input-box">
                            <Form.Item 
                            autoComplete="off"
                            label={<span className="custom-label" style={{ paddingBottom: "0px" }}>Username<span className="required-symbol">*</span></span>} 
                            name="Username"                        
                            rules={[
                                { 
                                message : 'Enter Your Username',
                                },
                                {
                                    whitespace : true,
                                },
                                {
                                    min : 4,
                                },
                            ]}
                            >
                                <div className="input-container">
                                <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}}  placeholder="Username" />
                                </div>
                            
                            </Form.Item>
                        </div>
                    <div className="input-box">
                            <Form.Item autoComplete='off'
                            label={<span className="custom-label">Password<span className="required-symbol">*</span></span>} 
                            name="Password" 
                            rules={[
                                {
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
                                    <Input.Password style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} placeholder="Password"  />
                                </div>
                                
                            </Form.Item>
                    </div>
                    
                    <div className="register">
                        <div className="register-mid">
                            <span style={{marginRight: "4px"}}>Don't have an account?</span>
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