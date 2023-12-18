import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";



const click$ = fromEvent( document, 'click')

click$.pipe(
	debounceTime(3000)
); //.subscribe( console.log);



// Ejemplo 2

const input = document.createElement('input')
document.querySelector('body').append( input )


const input$ = fromEvent( input, 'keyup').pipe(
	debounceTime(2000),
	pluck('target', 'value'),
	distinctUntilChanged()
);

input$.subscribe( console.log );
