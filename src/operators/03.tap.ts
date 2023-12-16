//* TAP NOS PERMITE DISPARAR EFECTOS secundarios como : imprimir en consola o hacer algo cuando la data pase por el tap
//* Icluso llega a ser super util para depurar poruqe podemos ver como esta fluyendo la informacion
import { range,  } from 'rxjs';
import { map, tap,  } from 'rxjs/operators';


const numeros$ = range(1,5)


numeros$.pipe(
	tap(x => {
		console.log('antes', x);
		return 100 // no va a hacer nada 
	}),
	map(val => val *10),
	tap({
		next: valor => console.log('despues', valor),
		complete: () => console.log('Se termino todo')
	})
)
	.subscribe(val => console.log('subs', val))

