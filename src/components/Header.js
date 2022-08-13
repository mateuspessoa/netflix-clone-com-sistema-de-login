import React from 'react';
import { useNavigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import './Header.css';
import logo from '../assets/logonet.png'
import user from '../assets/usernet.png'
import Button from './button';

const Header = ({black}) => {

  const { signout } = useAuth();
  const navigate = useNavigate();


  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
                <img src={logo} alt="netflix" />
        </div>

        <div className="header--user">
                <img src={user} alt="usuário" />
                <div className="botao">
                  <Button text="Sair" onClick={() => [signout(), navigate("/")]} />
                </div>
        </div>
    </header>
  )
}

export default Header