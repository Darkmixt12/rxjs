import { concatMap, exhaustMap, fromEvent, interval, subscribeOn, take } from "rxjs";

// es UTIL PARA EVITAR SPAMERS

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
	exhaustMap( () => interval$ )

).subscribe( console.log)