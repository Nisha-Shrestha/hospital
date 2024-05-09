import { Link } from "react-router-dom";
import { Form , Input, Layout, Checkbox , Button} from "antd";
import "./Register.css"

export const Register = () => {
  return (
    <main className="body">
        <div>
            <Form labelCol={{span : 10}}layout="vertical"> 
                <div className="header">
                    <h2 style={{color :"#997f7f",fontWeight : "500"}}>Register</h2>
                    <div>
                    <span style={{marginRight: "4px" , color: "#997f7f"}}>Already have an acoount</span>
                    <Link to= "/login">Login to your account</Link>
                    </div>
                  </div>
                <h3>Hospital Information</h3>
                <div className="input-container">
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" , whiteSpace: "nowrap" , width:"auto"}}>Hospital Name<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter Your hospital name',
                                    },
                                    {
                                        whitespace : true,
                                    },
                                    {
                                        min : 4,
                                    },
                                    
                                ]}
                                hasFeedback
                                >
                                    <div className="input-container">
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" , width:"500px" }}>Prefix(Hospital File Format)<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter file format',
                                    },
                                    {
                                        whitespace : true,
                                    },
                                    {
                                        min : 4,
                                    },
                                    
                                ]}
                            
                                hasFeedback
                                >
                                    <div className="input-container">
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                </div>
                <div className="input-container">
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" , width:"500px"}}>Hospital Address<span className="required-symbol">*</span></span>} 
                                name="Hospital address"                        
                                rules={[
                                    { 
                                    message : 'Enter Address',
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
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                </div>
                <h3>User Information</h3>
                <div className="input-container">
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" }}>First Name<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter Your hospital name',
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
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" }}>Last Name<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter file format',
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
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                </div>
                <div className="input-container">
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" }}>Email<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter Your hospital name',
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
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" }}>Phone Number<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter file format',
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
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                </div>
                <div className="input-container">
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" }}>Username<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter Your hospital name',
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
                                    <Input style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                    <Form.Item 
                                autoComplete="off"
                                label={<span className="custom-label" style={{ paddingBottom: "0px" }}>Password<span className="required-symbol">*</span></span>} 
                                name="Hospital Name"                        
                                rules={[
                                    { 
                                    message : 'Enter file format',
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
                                    <Input.Password style={{backgroundColor:"#F1F1F1",border:"none",padding:"7px 7px"}} />
                                    </div>
                                
                    </Form.Item>
                </div>
                <div className="footer-div">
                    <Form.Item name="agreement" >
                        <Checkbox>I have read and agree to the terms of <span style={{color: "cornflowerblue"}}>sudoEMR</span></Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="big" style={{width : "200px"}}>
                            Register
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    </main>
  )
}
