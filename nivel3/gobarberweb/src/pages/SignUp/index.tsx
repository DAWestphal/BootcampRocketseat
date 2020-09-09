import React from 'react';
import { FiArrowLeft, FiLock, FiUser, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="logo" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="nome" icon={FiUser} placeholder="nome" />
          <Input name="email" icon={FiMail} placeholder="e-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <a href="forgot">
          <FiArrowLeft />
          Voltar para LogOn
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
