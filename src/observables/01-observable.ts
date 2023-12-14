import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
	next: value => console.log(' siguiente [next[: ', value),
	error: error => console.warn( 'error [obs]:', error),
	complete: () => console.info('completado [obs] ')
}

//const obs$ = Observable.create()

const obs$ = new Observable<string>( subscriber => {

	subscriber.next('hola')
	subscriber.next('mundo')

	subscriber.next('hola')
	subscriber.next('mundo')

	//? FORZAR ERROR 
	// const a = undefined;
	// a.nombre = 'Fernando'

	subscriber.complete()

	subscriber.next('hola')  // gracias al complete esta emision no llega a la salida
	subscriber.next('mundo')
});

//obs$.subscribe( console.log )  // = obs$.subscribe( res => console.log(res) )

//* Formas de ejectutar un observable 

// obs$.subscribe(
// 	valor => console.log('next: ', valor),
// 	error => console.warn('error ', error),
// 	() => console.info('Completado')
//  )

obs$.subscribe(observer)