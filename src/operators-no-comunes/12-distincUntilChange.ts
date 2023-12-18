import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5, 6, "7");

numeros$.pipe(distinct()).subscribe(console.log);

interface Personajes {
  nombre: string;
}

const personas: Personajes[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Profesor Wally",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Zero",
  },
  {
    nombre: "Zero",
  },
];


from( personas ).pipe(
	//distinct(p => p.nombre)
	distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
).subscribe( console.log)	