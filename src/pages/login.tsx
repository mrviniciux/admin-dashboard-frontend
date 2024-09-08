import { Col, Row } from 'antd/lib';
import styles from '@/styles/Login.module.css';
import LoginForm from '@/components/LoginForm';

function Login() {
  return (
    <Row align="middle">
      <Col xs={24} md={12} span={12}>
        <div className={styles['login-img-background']} />
      </Col>
      <Col className={styles['login-form-container']} xs={24} md={12} span={12}>
        <LoginForm />
      </Col>
    </Row>
  );
}

export default Login;
