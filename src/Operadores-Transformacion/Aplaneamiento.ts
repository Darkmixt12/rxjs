

import { catchError, fromEvent, map, mergeMap, of, pluck, tap } from "rxjs"
import { ajax } from 'rxjs/ajax';

// HELPER 

const peticionHttpLogin = ( userPass ) => ajax.post('https://reqres.in/api/login?delay-1', userPass).pipe(
	pluck('response', 'token'),
	catchError( err => of('Error con la peticion'))
)


// FORMULARIO
const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const btnSubmit = document.createElement('button')


// Configuraciones
inputEmail.type = 'email'
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka'

btnSubmit.innerHTML = 'Ingresar'

form.append( inputEmail, inputPass, btnSubmit)
document.querySelector('body').append(form)


// STREAMS

const submitForm$ = fromEvent(form, 'submit').pipe(
	tap( ev => ev.preventDefault()),
	map( ev => ({ 
		email: ev.target[0].value,
		password: ev.target[1].value
	})),
	mergeMap( peticionHttpLogin )
)


submitForm$.subscribe( token => {console.log(token)})