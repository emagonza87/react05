import React from 'react';

class A extends React.Component {
    constructor(props) {
        console.log('constructor:' + props.idx);
        super(props);
        this.state = {
            soyIdx : props.idx,
            valor : props.valor
        };
        this.enClick = this.enClick.bind(this);
    }
    
    enClick() {
        MiStore.dispatch({type:'acumular', idx: this.props.idx});
    }
    componentWillUpdate(props) {
        console.log(props);
        this.state.valor = props.valor;
    }
    
    render() {
        console.log('renderizado' + this.props.idx);
        return (
            <input type="button" value={this.state.valor} onClick={this.enClick}></input>
        );
    }
}

export default A;