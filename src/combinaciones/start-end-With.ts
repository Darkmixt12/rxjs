import { endWith, of, startWith } from "rxjs";



const numeros$= of(1,2,3).pipe(
	startWith(0),
	endWith(4)
);


numeros$.subscribe(console.log)