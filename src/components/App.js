import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import PlacarContainer from './placar/PlacarContainer';

const dados = {
    partida: {
        estadio: "Mineirão / BH",
        data: "11/10/2017",
        horario: "19h"
    },

    casa: {
        nome: "Atlético Mineiro"
    },

    visitante: {
        nome: "Flamengo"
    }
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Placar React</h1>
        </header>
          <PlacarContainer
              partida={dados.partida}
              casa={dados.casa}
              visitante={dados.visitante}
          />
      </div>
    );
  }
}
//export default App;
