import React, { useEffect, useState } from 'react';
import './ApiComponent.css';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Exemplo de API
      const result = await response.json();
      setData(result.slice(0, 5)); // Armazena os primeiros 5 posts
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Chama a função ao montar o componente
  }, []);

  return (
    <div>
      <h3>Dados da API:</h3>
      <ul>
        {data.length > 0 ? (
          data.map((item) => <li key={item.id}>{item.title}</li>) // Exibe o título de cada post
        ) : (
          <li>Nenhum dado encontrado.</li>
        )}
      </ul>
    </div>
  );
};

export default ApiComponent;
