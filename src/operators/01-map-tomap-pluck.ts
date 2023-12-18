import { fromEvent, range } from 'rxjs'
import { map, pluck } from 'rxjs/operators';

//*! MAP 
// range(1,5).pipe(
// 	map<number,string>(val => (val * 10).toString() )
// )
// .subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyup$.pipe(
	map( event => event.code)
)


keyUpCode$.subscribe( val => console.log('map', val));

//! PLUCK e operador pluck es util cuando se ocupa extrar simplemente un valor del objeto que estamos recibiendo 
//! y necesitamos que salga el valor de ese valor del objeto 

const keyUpPlock$ = keyup$.pipe(
	
	pluck('target', 'baseURI')
);

keyup$.subscribe( console.log)
keyUpPlock$.subscribe( val => console.log('pluck', val));


//! EL MAPTOP convierte todo lo que sale del observable a un dato especifico por ejemplo " JOLA "