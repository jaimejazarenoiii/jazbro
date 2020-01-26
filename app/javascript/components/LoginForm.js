import React from "react"
import { Row, Col } from 'antd'
import PropTypes from "prop-types"
import { blue } from '@ant-design/colors'
import { Layout, Menu, Form, Icon, Input, Button, Checkbox } from 'antd';
const { Header, Content, Footer } = Layout;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <Layout className="layout">
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                  })(
                    <Input
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Email"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Form.create()(LoginForm);
