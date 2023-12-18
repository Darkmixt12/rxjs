import { fromEvent, map, takeWhile } from "rxjs";



const click$= fromEvent<MouseEvent>(  document, 'click');

click$.pipe(
	map(   ({x,y}) => ({x,y}) ),
	takeWhile(  ({ y }) => y <= 150, true )  //! ESTE TRUE REPRESENTA EL INCLUSE lo que hace que tambine se envie el valor que rompe la condicion
)

.subscribe({
	next: val => console.log('next:', val),
	complete: () => console.log('completado')
});