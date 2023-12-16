import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div')
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sodales purus. Sed pellentesque elit a mi egestas, et vulputate metus lobortis. Vestibulum vel orci quis massa pretium efficitur quis non nulla. Ut nec suscipit nunc. Morbi nibh ligula, mollis ut ultrices sed, dictum ut quam. Duis posuere eu purus eget tempor. Duis fringilla id ex eu lobortis. Sed neque ex, fringilla ut volutpat at, rutrum malesuada elit.
<br/><br/>
Nunc ac imperdiet lacus. Ut in orci tortor. Suspendisse viverra tellus vitae nunc venenatis, in feugiat lorem convallis. Phasellus eros leo, fringilla sed accumsan nec, varius et mi. Morbi et est vel dolor mollis auctor. Duis in vehicula lorem, nec pretium diam. Cras scelerisque lacus a lorem maximus sollicitudin. In cursus condimentum diam, suscipit viverra risus mollis sed. Aliquam in leo et purus blandit euismod. Aliquam sodales erat at felis tristique vehicula. Curabitur dictum fermentum nibh nec interdum. Pellentesque vel vulputate tellus. Mauris elementum, velit a bibendum maximus, est quam finibus lectus, nec venenatis mauris nulla vulputate metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sollicitudin, lectus ut luctus aliquam, est nisl condimentum arcu, sed viverra est arcu sed nunc. Nunc vel tempus augue, non ultricies mi.
<br/><br/>
Vivamus aliquam tortor sed finibus rutrum. Duis egestas nisl et risus fringilla semper. Phasellus semper ultrices libero, sollicitudin sodales augue convallis eget. Maecenas varius mauris vitae nunc posuere, eu euismod arcu pulvinar. Aenean condimentum bibendum maximus. Nam ullamcorper dictum purus, at posuere lacus iaculis id. Nullam quis imperdiet tellus. Vivamus ac faucibus magna. Suspendisse eget augue varius, accumsan diam ac, malesuada orci. In ut aliquet mi, eu mattis lorem. Donec vel rhoncus nisl, eget rutrum ipsum. Donec vitae augue ac augue pretium dictum.
<br/><br/>
Mauris lacus arcu, volutpat at enim ac, congue suscipit nibh. Vestibulum nec libero pulvinar justo accumsan pulvinar id ac massa. Vivamus finibus posuere libero non facilisis. Mauris luctus laoreet risus ut egestas. Donec velit libero, efficitur eget ultrices non, accumsan rutrum dui. Sed scelerisque congue pharetra. Phasellus tempor ipsum eget neque finibus, ac consectetur velit euismod. Integer eget neque ac nisi laoreet condimentum. Quisque interdum porta lorem et tincidunt.
<br/><br/>
Ut sit amet turpis lobortis, porttitor mi in, egestas eros. Donec lobortis lobortis enim nec dapibus. In a leo ut arcu suscipit rhoncus. Ut finibus interdum egestas. Maecenas ultrices porta rhoncus. Donec porttitor nibh sed rutrum tempus. Aenean vulputate dui ut elit viverra, vel porttitor massa pulvinar. Pellentesque venenatis ac massa ut iaculis. Donec vel maximus quam, a tincidunt ex. Maecenas mattis ex eget neque luctus pretium ut fringilla nibh. Sed eget elit lorem. Vivamus et magna pretium felis pellentesque tempor a ut tellus.

`;

const body = document.querySelector('body')
body.append(texto)


const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

// funcion que haga el calculo del tamaño de la scroll
const calcularPorcentaje  = ( event ) =>{
	
	const {
		scrollTop,
		scrollHeight,
		clientHeight,
	} = event.target.documentElement;

	console.log({
		scrollTop, scrollHeight, clientHeight
	})

	return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// streams

const scroll$ = fromEvent(document, 'scroll')
const progress$ = scroll$.pipe(
	map ( event => calcularPorcentaje(event)),
	tap	( console.log)

)
progress$.subscribe( procentaje => {

		progressBar.style.width = `${ procentaje}%`
})