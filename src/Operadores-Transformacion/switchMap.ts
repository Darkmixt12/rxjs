import { debounceTime, fromEvent, map, mergeMap, pluck, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax'


const body= document.querySelector('body');
const textInput = document.createElement('input')
const orderList = document.createElement('ol')
body.append(textInput, orderList)

// STRAMS
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
	debounceTime<KeyboardEvent>(500),
	pluck<KeyboardEvent>('target','value'),
	mergeMap( texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
	pluck('items'))

	const url = 'https://httpbin.org/delay/1?arg=';


	input$.pipe(
		pluck('target','value'),
		switchMap( texto => ajax.getJSON(url + texto)
		)
	).subscribe( console.log)


	// switchMap es perfecto para las peticiones ya que ancela todas las anteriores y solo genera por la ultima