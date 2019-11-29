// This is stubbed form component to show of examples of Cypress tests
// It is not an example here, never write components like this.

import React from 'react';

import { Row, Col, Form, Icon, Input, Button, Select, InputNumber } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class ProductsCreate extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render = () => (
    <Row>
      <Col span={12} offset={6}>
        <h1>
           Create form
        </h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item label="Product Name">
            {this.props.form.getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input product name' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Product Name"
              />,
            )}
          </Form.Item>
          <Form.Item label="Category">
            {this.props.form.getFieldDecorator('type', {
              initialValue: 'hats',
              rules: [{ required: true, message: 'Please select type' }],
            })(
              <Select>
                <Option value="hats">Hats</Option>
                <Option value="jackets">Jackets</Option>
                <Option value="pants">Pants</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Quantity">
            {this.props.form.getFieldDecorator('input-number', { initialValue: 1 })(
              <InputNumber min={1} max={100} />
            )}
          </Form.Item>
          <Form.Item>
            <Button data-cy="product-form-submit" type="primary" htmlType="submit" className="login-form-button">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Form.create({ name: 'product-form' })(ProductsCreate);
