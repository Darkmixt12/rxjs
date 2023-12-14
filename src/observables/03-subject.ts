import { Observable, Observer, Subject } from 'rxjs';

const observer:Observer<any> = {
	next: value => console.log('next:', value),
	error: error => console.warn( 'error:', error),
	complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subs => {

	const intervalID = setInterval( () =>
		subs.next( Math.random()), 1000
	)

	return () => {
		clearInterval( intervalID)
		console.log('set intervalo destruido')
	};
		

});


//! 3- El subject es un casteo multiple lo que mucha subscriciones pueden estar suscritas a el
//! 2- Tambien es un observer 
//! 3- Next, eror y complete tambien pueden usarse en el
//! 4- va a emitir siempre el mismo valor asi que si muchso estan subscritos a el van a emitir el mismo valor


const subject$ = new Subject();
const subjectsubs = intervalo$.subscribe( subject$ );

// const subs1 = intervalo$.subscribe( console.log)
// const subs2 = intervalo$.subscribe( console.log)

 const subs1 = subject$.subscribe( observer);
const subs2 = subject$.subscribe( observer)



setTimeout( () => {
	subject$.next(10)
	subject$.complete()
	subjectsubs.unsubscribe();
},3500)