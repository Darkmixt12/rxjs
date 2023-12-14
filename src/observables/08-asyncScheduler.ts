import { asyncScheduler } from "rxjs";


//? con el asyncScheduler podemos hacer ambas 
//* setTimeout(() => {}, 3000 )
//* setInterval(() => {}, 3000 )

//? TIMEOUT
const saludar = () => console.log('Hola mundo')
const saludar2 = ({name, apellido}) => console.log(`Hola mundo, ${name} ${apellido}`)

//asyncScheduler.schedule( saludar2, 2000, {name: 'Steven', apellido: 'Muñoz'})

//? INTERVAL

const subs = asyncScheduler.schedule( function(state){

	console.log('state', state)
	
	this.schedule( state! + 1, 1000)
},3000, 0 )

// setTimeout( () => {
// 	subs.unsubscribe();
// }, 6000)

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )