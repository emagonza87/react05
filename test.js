let qunit = require('qunit-cli');
let reducer = require('./src/reducer');

qunit.test('voy a testear el acumular', function() {
    let estadoAnterior = {
        arr : [0,0,0,0,0,0,0,0,0,0]
    }
    let res = reducer(estadoAnterior, {idx: 5, type: 'acumular'});
    qunit.equal(res.arr[5], 1);
});


qunit.test('testeo perdedor', function() {
    let estado1 = {
        arr : [0,0,0,0,0,0,0,0,0,0]
    }
    let estado2 = reducer(estado1, {type: 'acumular' , idx: 5});
    let estado3 = reducer(estado2, {type: 'evaluarJugada', ganador : 3 });
    
    qunit.equal(estado3.total, -1);
});

qunit.test('testeo ganador', function() {
    let estado1 = {
        arr : [0,0,0,0,0,0,0,0,0,0]
    }
    let estado2 = reducer(estado1, {type: 'acumular' , idx: 5});
    let estado3 = reducer(estado2, {type: 'evaluarJugada', ganador : 5 });
    
    qunit.equal(estado3.total, 35);
});


