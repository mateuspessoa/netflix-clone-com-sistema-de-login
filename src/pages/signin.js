import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Input from "../components/input"
import Button from "../components/button"
import './signin.css'
import useAuth from '../hooks/useAuth'

const Signin = () => {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if(res) {
      setError(res);
      return;
    }

    navigate("/home");
  }

  return (

    <div className='container'>
      <div className='content'>
        <div className="content-internal">
          <label className='label'>Login</label>
            <Input 
              type="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input 
              type="password"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <label className='labelError'>{error}</label>
            <Button text="Entrar" onClick={handleLogin} />
            <label className='labelSignup'>
              Não tem uma conta?
              <strong><Link to="/signup">&nbsp;Registre-se</Link></strong>
            </label>
        </div>
      </div>
    </div>


    /*<C.container>
      <C.label>SISTEMA DE LOGIN</C.label>
      <C.content>
        <Input 
          type="email"
          placeholder="Digite o seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
          type="password"
          placeholder="Digite a sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.labelSignup>
          Não tem uma conta?
          <C.strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.strong>
        </C.labelSignup>
      </C.content>
    </C.container>*/
  );
};

export default Signin;