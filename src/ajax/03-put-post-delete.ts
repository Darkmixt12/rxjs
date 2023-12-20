
import { ajax } from 'rxjs/ajax'

const url = 'https://httpbin.org/delay/1'

// ajax.put( url, {
// 	id: 1,
// 		nombre: 'Steven'
// 	}, {
// 		'mi-token': 'ABC1234'
// }).subscribe(console.log)


ajax({
	url: url,
	method: 'POST',
	headers: {
		'mi-token': 'ABC123'
	},
	body: {
		id: 1,
		nombre: 'Steven'
	}
}).subscribe(console.log)