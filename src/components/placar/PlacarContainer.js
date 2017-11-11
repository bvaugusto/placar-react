import React, { Component } from 'react';
import Time from '../time/Time'
import Partida from '../partida/Partida'
import '../../css/Placar.css'
import PropTypes from 'prop-types';

export default class PlacarContainer extends Component {

    constructor(){
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante:  0
        };
    }

    marcarGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa + 1
        });
    }

    marcarGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante + 1
        });
    }

    render(){

        // Press operator, extração de dados
        const {partida, casa, visitante} = this.props;

        return (
            <div className="container">
                <div className="placar-inner flex-container">
                    <div className="time">
                        <h3>Casa</h3>
                        <Time
                            nome={casa.nome}
                            gols={this.state.gols_casa}
                            marcarGol={this.marcarGolCasa.bind(this)}
                        />
                    </div>
                    <div className="partida">
                        <Partida {...partida}/>
                        <div className="">{this.props.clima}</div>
                        <div>{this.props.tempo}</div>
                    </div>
                    <div className="time">
                        <h3>Visitante</h3>
                        <Time
                            nome={visitante.nome}
                            gols={this.state.gols_visitante}
                            marcarGol={this.marcarGolVisitante.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

//Prop Types
PlacarContainer.propTypes = {
    clima: PropTypes.string,
    tempo: PropTypes.number.isRequired
};

PlacarContainer.defaultProps = {
  clima: 'Ensolarado'
};