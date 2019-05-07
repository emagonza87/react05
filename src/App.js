import React from 'react';
import ReactDom from 'react-dom';
import { combineReducers, createStore} from 'redux';
import './clases.css';
import Numero from './Numero';
import reducer from './reducer';
import MiStore from './MiStore';
import Tirar from './Tirar';
import A from './A';

window.MiStore = MiStore;

// alert(JSON.stringify(MiStore.getState()));

MiStore.subscribe(function() {
    // alert(JSON.stringify(MiStore.getState()));
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: MiStore.getState().arr
        }
    }

    componentDidMount() {
        MiStore.subscribe(() => {
             let arr = MiStore.getState().arr;
             this.setState({arr:arr});
        });
    }

    render() {
        return (
                <div>
                        <h1>Ruleta</h1>
                        <h1 />
                        <div class="container">
                            <div class="row">
                                <Numero clase="numeroVerde col" idx={0} valor={this.state.arr[0]} />
                            </div>
                            <div class="row">
                                <Numero clase="numeroRojo col" idx={3} valor={this.state.arr[3]} />
                                <Numero clase="numeroNegro col" idx={6} valor={this.state.arr[6]} />
                                <Numero clase="numeroRojo col" idx={9} valor={this.state.arr[9]} />
                                <Numero clase="numeroRojo col" idx={12} valor={this.state.arr[12]} />

                                <Numero clase="numeroNegro col" idx={15} valor={this.state.arr[15]} />
                                <Numero clase="numeroRojo col" idx={18} valor={this.state.arr[18]} />
                                <Numero clase="numeroRojo col" idx={21} valor={this.state.arr[21]} />
                                <Numero clase="numeroNegro col" idx={24} valor={this.state.arr[24]} />

                                <Numero clase="numeroRojo col" idx={27} valor={this.state.arr[27]} />
                                <Numero clase="numeroRojo col" idx={30} valor={this.state.arr[30]} />
                                <Numero clase="numeroNegro col" idx={33} valor={this.state.arr[33]} />
                                <Numero clase="numeroRojo col" idx={36} valor={this.state.arr[36]} />
                            </div>
                            <div class="row">
                                <Numero clase="numeroNegro col" idx={2} valor={this.state.arr[2]} />
                                <Numero clase="numeroRojo col" idx={5} valor={this.state.arr[5]} />
                                <Numero clase="numeroNegro col" idx={8} valor={this.state.arr[8]} />
                                <Numero clase="numeroNegro col" idx={11} valor={this.state.arr[11]} />
                                
                                <Numero clase="numeroRojo col" idx={14} valor={this.state.arr[14]} />
                                <Numero clase="numeroNegro col" idx={17} valor={this.state.arr[17]} />
                                <Numero clase="numeroNegro col" idx={20} valor={this.state.arr[20]} />
                                <Numero clase="numeroRojo col" idx={23} valor={this.state.arr[23]} />

                                <Numero clase="numeroNegro col" idx={26} valor={this.state.arr[26]} />
                                <Numero clase="numeroNegro col" idx={29} valor={this.state.arr[29]} />
                                <Numero clase="numeroRojo col" idx={32} valor={this.state.arr[32]} />
                                <Numero clase="numeroNegro col" idx={35} valor={this.state.arr[35]} />
                                
                            </div>
                            <div class="row">
                                <Numero clase="numeroRojo col" idx={1} valor={this.state.arr[1]} />
                                <Numero clase="numeroNegro col" idx={4} valor={this.state.arr[4]} />
                                <Numero clase="numeroRojo col" idx={7} valor={this.state.arr[7]} />
                                <Numero clase="numeroNegro col" idx={10} valor={this.state.arr[10]} />

                                <Numero clase="numeroRojo col" idx={13} valor={this.state.arr[13]} />
                                <Numero clase="numeroRojo col" idx={16} valor={this.state.arr[16]} />
                                <Numero clase="numeroNegro col" idx={19} valor={this.state.arr[19]} />
                                <Numero clase="numeroRojo col" idx={22} valor={this.state.arr[22]} />

                                <Numero clase="numeroRojo col" idx={25} valor={this.state.arr[25]} />
                                <Numero clase="numeroNegro col" idx={28} valor={this.state.arr[28]} />
                                <Numero clase="numeroNegro col" idx={31} valor={this.state.arr[31]} />
                                <Numero clase="numeroRojo col" idx={34} valor={this.state.arr[34]} />

                            </div>
                        </div>
                        <hr />
                        <Tirar />
                </div>
        );
    }
}

export default App;