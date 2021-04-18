// https://celke.com.br/artigo/como-consumir-dados-da-api-com-react
import React, { Component } from 'react';
import './App.css';
import api from './api';


class App extends Component {
  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');
    this.setState({ filmes: response.data });
  }

  render() {
    const { filmes } = this.state;
    
    return (
      <div>
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2><strong>Título: </strong>{filme.show.name}</h2>
            <a href={filme.show.url}>{filme.show.url}</a>
            <br/>
            <h3><strong>Sumário: </strong>{filme.show.summary}</h3>
          </li>
        ))}
      </div>
    );
  };
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
