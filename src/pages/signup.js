import React from 'react';
import { useState } from 'react';
import Input from '../components/input';
import Button from '../components/button';
import { Link, useNavigate } from "react-router-dom"
import useAuth from '../hooks/useAuth';
import './signup.css'

const Signup = () => {

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signup } = useAuth();


  const handleSignup = () => {
    if(!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não correspondem");
      return;
    }

    const res = signup(email, senha);

    if(res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };


  return (
    <div className='container'>
      <div className='content'>
        <div className="content-internal">
          <label className='label'>Cadastro</label>
            <Input 
              type="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input 
              type="email"
              placeholder="Confirme o seu e-mail"
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input 
              type="password"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <label className='labelError'>{error}</label>
            <Button text="Registrar" onClick={handleSignup} />
            <label className='labelSignup'>
              Já tem uma conta?
              <strong><Link to="/">&nbsp;Entre</Link></strong>
            </label>
        </div>
      </div>
    </div>
  )
}

export default Signup;