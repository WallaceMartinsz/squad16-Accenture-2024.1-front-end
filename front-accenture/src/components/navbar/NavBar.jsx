import './index.css';
import React, { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './../Button';

function Navbar() {
  const location = useLocation();
  const page = location.pathname;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  };


  if (page === '/login' || page === '/cadastroClientes' || page === '/seleCad') {
    return (
      <nav className="navbar">
        <div className="logo">
          <img alt="Logo" />
        </div>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/seleCad">Cadastrar-se</Link>
        </div>
      </nav>
    );
  } else if (page === '/lojas' || page === '/' || page === '/carrinho') {
    return (
      <nav className="navbar">
        <div className="logo">
          <img alt="Logo" />
        </div>
        <div className="links">
          <Link to="/">Produtos</Link>
          <Link to="/lojas">Lojas</Link>
          <Link to="/carrinho">Carrinho</Link>
          <Link to="/meusProdutos">Meus Produtos</Link>
          {isLoggedIn ? (
            <>
              <Link to="/produtos">
                <Button type="button" value="Anunciar"/>
              </Link>
              <Button type="button" value="Deslogar" onClick={handleLogout} />
            </>

          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/seleCad">Cadastrar-se</Link>
            </>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
