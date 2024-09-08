import React from 'react';
import type { FormProps } from 'antd/lib';
import { Button, Checkbox, Form, Input } from 'antd/lib';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function LoginForm() {
  return (
    <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Usuário"
        name="username"
        rules={[{ required: true, message: 'Informe um usuário' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Informe a senha!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
