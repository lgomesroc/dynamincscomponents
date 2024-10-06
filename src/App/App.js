import React, { useState, useEffect } from 'react';
import FormComponent from '../components/FormComponent/FormComponent';
import ListComponent from '../components/ListComponent/ListComponent';
import ListItemComponent from '../components/ListItemComponent/ListItemComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import AnotherComponent from '../components/AnotherComponent/AnotherComponent';
import ApiComponent from '../components/ApiComponent/ApiComponent'; // Importando o ApiComponent
import './App.css'; // Importando um arquivo CSS para melhorar a estrutura

const App = () => {
  const [items, setItems] = useState([]);

  // Função para adicionar um item
  const addItem = (newItem) => {
    if (newItem) {
      setItems((prevItems) => [...prevItems, { title: newItem }]); // Adiciona um objeto com 'title' à lista
    }
  };

  // Função para buscar dados da API
  const fetchItemsFromAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // API de exemplo
      const data = await response.json();
      setItems(data.slice(0, 10)); // Atualiza o estado com os itens
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  // Chama a função para buscar itens da API ao montar o componente
  useEffect(() => {
    fetchItemsFromAPI();
  }, []);

  return (
    <div className="app-container">
      <HeaderComponent title="Dynamics Components" />
      
      <div className="main-content">
        <FormComponent addItem={addItem} />

        <section className="list-section">
          <h3>Lista de Itens:</h3>
          <ListComponent items={items}>
            {items.map((item, index) => (
              <ListItemComponent key={item.id || index} item={item} /> // Passa o item inteiro
            ))}
          </ListComponent>
        </section>

        <section className="api-section">
          <ApiComponent /> {/* Adicionando o ApiComponent */}
        </section>

        <section className="additional-content">
          <AnotherComponent>
            <p>Este é um conteúdo dinâmico dentro do AnotherComponent!</p>
          </AnotherComponent>
        </section>
      </div>

      <FooterComponent />
    </div>
  );
};

export default App;
