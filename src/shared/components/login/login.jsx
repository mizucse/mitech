import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col , Typography, Image } from 'antd'; 
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; 
import { SignInAction } from '../../../store/action/signInAction';
import { Loader } from "../loader/loader";


export default function Login() {
  const [loader, setLoader] = useState(true);

  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  }); 
  
  const dispatch = useDispatch();

  const loginInfo = (e,dataType) => {
      setloginData({
        ...loginData,[dataType]: e.target.value
      });  
  }

  useEffect(()=>{
    setTimeout(() => { 
      setLoader(false);
    }, 2000); 
  },[]);


  const  authUserInfo = useSelector((store) => store.authUser);

  // console.log(authUserInfo,"authUser info from redux store ");

  const submitLogin = () => {
    dispatch(SignInAction(loginData)); 
  }
    

 
  const onFinish = (values) => {
    // console.log('Received values of form.email: ', values.email);
    // console.log('Received values of form.pass: ', values.password);
 
  };

  const { Title } = Typography;

  return <>
  {
    loader ? (
      <>
      <Loader />
      </>
      )  :  (
        <Row align="middle" style={{height: '100vh'}}>
          <Col span={8} offset={8}>
            
          <div style={{textAlign: 'center'}}>
            <Link to="/"><Image  width={100} src="logo.png" preview={false}/></Link>
          </div>
          <Title style={{textAlign: 'center'}}>Login</Title>
          <Form
          name="normal_login"
          className="login-form" style={{maxWith: '750px',margin: '0 auto'}}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          
          <Form.Item
            name="email"
            onChange={(e) => loginInfo(e,'email')}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password" onChange={(e) => loginInfo(e,'password')}
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
          </Form.Item>

          <Form.Item>
          {/*  */}
            <Button onClick={submitLogin} type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/registration">Register now!</Link>
          </Form.Item>
        </Form>  
          </Col>
        </Row>
      )
    }
    </>
}