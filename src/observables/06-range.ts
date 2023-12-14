import { asyncScheduler, of, range } from 'rxjs';

//! RANGE 
//! Emiten una secuencia de numeros en base a un rango por defecto son synchro pero pueden convertirse en desynchro
//! utilizando el SCHEDULER


const src$ = of(1,2,3,4,5);
src$.subscribe( console.log )  // en consola podemos ver toda la lista de los numeros gracias al off pero que pasa
								// si queremos ver del 1 al 100? tendriamos que escribir todos ? los valores ??

console.log('Inicio')
const src2$ = range(1,5, asyncScheduler); // ahora en vez de salir inicio, range, final ahora paasa , inicio,final,range
src2$.subscribe(console.log)
console.log('FINAL')