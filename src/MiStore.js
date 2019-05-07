import { createStore} from 'redux';
import reducer from './reducer';

let MiStore = createStore(reducer, {
    arr : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
});
window.MiStore = MiStore;

export default MiStore;