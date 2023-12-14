import { filter, from, range } from 'rxjs'

// range(1,10).pipe(
// 	filter( val => val % 2 === 1)
// )
// .subscribe( console.log)


range(1,10).pipe(
	filter( ( val, i) => {
		console.log('index', i)
		return val % 2 === 1})
)
//.subscribe( console.log)
interface Personaje {
	tipo : string;
	nombre: string;
}

const personajes: Personaje[] = [
	{
	  tipo: 'heroe',
	  nombre: 'batman'
	},
	{ 
	  tipo: 'villano',
	  nombre: 'joker'
	},
	{ 
	  tipo: 'heroe',
	  nombre: 'superman'
	},
	{ 
		tipo: 'villano',
		nombre: 'avcel'
	  },
]

from(personajes).pipe(
	filter( ({tipo}) => {
		
		return tipo != 'heroe' 
		
	})
).subscribe( console.log)