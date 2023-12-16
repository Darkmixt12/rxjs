import { from, reduce, scan } from "rxjs";

 const numeros = [1,2,3,4,5];

 const totalAcumulador = (acc, cur) => {
	return acc + cur
 }

 // REDCUCE 
 from( numeros).pipe(
	reduce(totalAcumulador,0)
 )
 .subscribe(console.log)

 // SCAN 
 from( numeros).pipe(
	scan(totalAcumulador,0)
 )
 .subscribe(console.log)


 interface Usuario {
	id?: string
	autenticado?: boolean;
	token?: string;
	edad?: number;
}

const user: Usuario[] = [
	{ id: 'fher', autenticado: false, token: undefined},
	{ id: 'fher', autenticado: true, token: 'ABC'},
	{ id: 'fher', autenticado: true, token: 'abc123'},
];

const state$ = from( user ).pipe(
	scan( (acc, cur) => {
		return { ...acc, ...cur }
	}, {edad : 33})
)




.subscribe( console.log)
 