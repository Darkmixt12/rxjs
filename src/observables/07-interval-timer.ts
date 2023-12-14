

//*   INTERVAL Y TIMER 
//*   1- SON observables asynchros por naturaleza
//* crea un observable que emite una secuencia de numeros en un tiempo determinado INTERVAL
//* aunque cancelemos la subs el interval va a continuar corriendo

//* TIMER

//* Son parecidos, pero con timer estamos diciendo que se ejecute el subscribe luego del tiempo que se ponga en timer
//* 


import { interval, timer } from 'rxjs';



const observer = {
	next: val => console.log('next:' , val),
	complete: () => console.log('complete'),
}

const hoyEn5 = new Date(); // toma la fecha de hoy
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000,)
const timer$ = timer(hoyEn5)


console.log('Inicio');
timer$.subscribe(observer)
console.log('Final');



