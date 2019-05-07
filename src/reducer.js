function reducer(estadoAnterior, accion) {
    switch(accion.type) {
       case 'acumular':
         estadoAnterior.arr[accion.idx]++;
         break;
       case 'evaluarJugada':
         console.log(accion);
         // lo que hay que hacer es:
         // todo lo que hay en la mesa, se resta
         // se multiplica lo que hay en el casillero 
         // ganador por 36.
         let restar = estadoAnterior.arr.reduce((a,b)=>a+b,0);
         console.log("nro ganador: " + accion.ganador);
         console.log("restar:" + restar);
         let montoObtenido = estadoAnterior.arr[accion.ganador] * 36;
         console.log("MontoObtenido:" + montoObtenido);
         console.log("Diferencia: " + (montoObtenido - restar));
         estadoAnterior.total = montoObtenido - restar;
         break;
    }
    return estadoAnterior;
 }

export default reducer;
// module.exports = reducer;