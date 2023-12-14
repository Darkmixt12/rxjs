import { of, from } from "rxjs";



/**
*? of = toma argumentos y genera una secuencia
*! from = array, promise, iterable, observable
**/

const observer = {
	next: val => console.log('next:', val),
	complete: () => console.log('complete')

}

const source$ = from( fetch('https://api.github.com/Klerith'))

// source$.subscribe( async(resp) => {
// 	console.log(resp);

// 	const dataResp = await resp.json();
// 	console.log(dataResp)
// });

//* FUNCION GENERADORA */
const miGenerador =  function*() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
}

const miIterable = miGenerador();

from( miIterable).subscribe( observer );