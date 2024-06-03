import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card';
import axios from 'axios';

const MyProductsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientId = localStorage.getItem('clientId');
        const clienteIdInt = parseInt(clientId);
        const response = await axios.get(`http://localhost:8080/produtos/cliente/${clienteIdInt}`)
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {
        data.length ? (
          <div className="divCards">
            {data.map((produto) => (
              <Card
                key={produto.id}
                divMainCard='divCard'
                img='img'
                divImg='divImg'
                h2={produto.nome}
                text1={`Preco: ${produto.preco}`}
                text2={`Descrição: ${produto.descricao}`}
                text3={`Quantidade: ${produto.quantidade}`}
              />
            ))}
          </div>
        ) : (
          <h3>AINDA NÃO EXISTEM PRODUTOS CADASTRADOS</h3>
        )
      }
    </>
  );
};

export default MyProductsPage;
