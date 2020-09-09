import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo" />
      <form>
        <h1>Faça seu LogIn</h1>
        <Input name="email" icon={FiMail} placeholder="e-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="senha"
          type="password"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="forgot">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
