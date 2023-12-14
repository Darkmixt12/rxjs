import { Observable, Observer, Subject, of} from 'rxjs';

//!  OF es una funcion que nos permite crear observables a un estado de elementos, 
//!va a emitir los elementos en secuencia de manera synchrona

//const obs$ = of(1,2,3,4,5,6)
//const obs$ = of([1,2,3,4,5,6])
//const obs$ = of(...[1,2,3,4,5,6],5,7,2,7,8)

const obs$ = of(1,2) // tengo problemas al ponerle el tipo de dato que fluye
obs$.subscribe(
	next => console.log('next', next),
	null,
	() => console.log('END')
)
