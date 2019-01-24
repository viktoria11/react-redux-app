import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form, Row, Col } from 'antd';

import { addTodo } from '../actions';

class AddTodo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // first validate fields
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // if no errors dispatch add todo action
        this.props.dispatch(addTodo(values.todo))
        // reset form field values
        this.props.form.resetFields();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item style={{ margin: 0 }} help={null}>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('todo', {
                rules: [{ required: true }],
              })(
                <Input placeholder="Add to your list..." />
              )}
            </Col>
            <Col span={12}>
              <Button type="primary" htmlType="submit">Add Todo</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedAddTodo = Form.create({ name: 'add_todo_form' })(AddTodo);

export default connect()(WrappedAddTodo);

