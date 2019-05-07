import React from 'react';
import MiStore from './MiStore';

class Numero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoDeClase : props.clase,
            numero : props.idx
        };
        this.enClick = this.enClick.bind(this);
    }

    enClick() {
        MiStore.dispatch({type:'acumular', idx: this.props.idx});
    }

    componentWillUpdate(props) {
        console.log("Numero::componentWillUpdate" + props);
        this.state.valor = props.valor;
    }

    render() {
        return (
            <div className={this.state.tipoDeClase} onClick={this.enClick}>
                {this.state.numero}<span className="apuesta">[{this.props.valor}]</span>
            </div>
        );
    }
}

export default Numero;