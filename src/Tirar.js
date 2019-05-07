import React from 'react';

class Tirar extends React.Component {
    constructor(props) {
        super(props);
        this.tirarBollilla = this.tirarBollilla.bind(this);
        this.state = {
            total: 0
        }
    }

    tirarBollilla() {
        let resultado = Math.floor((Math.random() * 37));
        console.log(resultado);
        MiStore.dispatch({type:'evaluarJugada', ganador: resultado});
        this.setState({
            total: MiStore.getState().total
        });
    }

    render() {
        return (
        <div>
            <input type="button" value="TIRAR" onClick={this.tirarBollilla}></input>
            <hr />
            Info ganador: {this.state.total}
        </div>
        );
    }
}

export default Tirar;