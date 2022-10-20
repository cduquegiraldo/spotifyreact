import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

export function Home(){

    let descripcionBanda="Metallica es un grupo estadounidense de thrash metal originado de Los Ángeles, pero con base en San Francisco desde febrero de 1983. Fue fundada en 1981 en Los Ángeles por Lars Ulrich y James Hetfield, a los que se les unirían Dave Mustaine y Ron McGovney. Estos dos músicos fueron después sustituidos por el guitarrista Kirk Hammett y el bajista Cliff Burton respectivamente, Dave Mustaine fue despedido un año después de ingresar en la banda debido a su excesiva adicción al alcohol y su actitud violenta, siendo sustituido por Kirk Hammett (exguitarrista de Exodus). Ron renuncia a la banda debido al mal comportamiento de Dave Mustaine, el cual era violento y problemático cuando estaba bajo el efecto del alcohol. Es entonces, tras contactar con Cliff Burton que la banda se traslada a San Francisco. Por otra parte, el 27 de septiembre de 1986, fue la muerte de Cliff Burton en un accidente de autobús en Suecia, durante una de sus giras, esto provocó la entrada al grupo de Jason Newsted, quien, tras su abandono quince años más tarde, sería sustituido por el bajista actual, Robert Trujillo."

    return(
        <>
            <div className="banner">

            </div>

            <div className=''>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">METALLICA</h1>
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SubMenu></SubMenu>
            </div>

            <div>
                <Footer></Footer>
            </div>



        </>
    )

}