import React from 'react';
import { Button, Form, Input } from 'antd/lib';
import { useLoginStore } from '@/stores/useLogin.store';

type LoginDataType = {
  username: string;
  password: string;
};

function LoginForm() {
  const { login } = useLoginStore();

  return (
    <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={({ username, password }: LoginDataType) =>
        login(username, password)
      }
      autoComplete="off"
    >
      <Form.Item<LoginDataType>
        label="Usuário"
        name="username"
        rules={[{ required: true, message: 'Informe um usuário' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<LoginDataType>
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Informe a senha!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
