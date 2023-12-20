import { catchError, of, pluck } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax'

//! MANERA ANTIGUA DE MANEJAR LAS PETICIONES MUCHO CODIGO 

const url = 'https://api.github.com/users?per_page=5';

const fetchPromise = fetch( url );

// const manejaErrores = ( response: Response) => {

// 	if( !response.ok){
// 		throw new Error(response.statusText)
// 	}
// 	return response
// }


// fetchPromise
// 	.then( manejaErrores )
// 	.then( resp => resp.json())
// 	.then( data => console.log('data:', data))
// 	.catch( err => console.warn('error en usuarios', err));



//? modo rxjs

const atrapaError = (err: AjaxError) => {
	console.warn('error en:', err.message)
	return of({})
}

ajax (url).pipe(

	pluck('response'),
	catchError( atrapaError )
).subscribe( users => console.log('usuarios:', users))