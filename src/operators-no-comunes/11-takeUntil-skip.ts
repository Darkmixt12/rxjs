import { fromEvent, interval, map, skip, takeUntil } from "rxjs";



const boton = document.createElement('button')
boton.innerHTML = 'Detener Tmer';

document.querySelector('body').append( boton );


const counter$ = interval(1000)
const clickBtn$ = fromEvent( boton, 'click').pipe(
	map( () => console.log(' antes del skip ')),
	skip(1),
	map( () => console.log(' despues del skip '))
)

counter$.pipe(
	takeUntil( clickBtn$ ),

).subscribe( {
	next: val => console.log('next', val),
	complete: () => console.log('complete')
});