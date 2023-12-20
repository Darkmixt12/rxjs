import { ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, { 
	'Content-Type': 'application/json', // HEAERS
	'mi-token': 'ABC123' // TOKEN
} );


obs$.subscribe( data => console.log('data:', data));

