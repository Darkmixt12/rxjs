import { debounceTime, fromEvent, map, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import {GithubUsers, } from './interfaces/user'

const body= document.querySelector('body');
const textInput = document.createElement('input')
const orderList = document.createElement('ol')
body.append(textInput, orderList)

// STRAMS
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
	debounceTime<KeyboardEvent>(500),
	pluck<KeyboardEvent>('target','value'),
	map( texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`))

).subscribe( resp => {
	resp.pipe(
		pluck( 'items')
	).subscribe(console.log)
})