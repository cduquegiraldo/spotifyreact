import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';


export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center zoom">
                <div className="col-12 col-md-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/JamesHelfield_vocalista.jpg?alt=media&token=cca90d10-a2b5-4369-af0f-8bfc95e15db5" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>James Helfield</h2>
                    <h3>Vocalista</h3>
                </div>
                <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        James Alan Hetfield (Downey, California, 3 de agosto de 1963)es un músico estadounidense conocido por ser el vocalista, guitarrista rítmico y principal compositor de la banda de thrash metal Metallica, además de ser cofundador de la misma junto con Lars Ulrich.
                        </div>
                    </div>
                </div>
            </div>
            </div>
            

            <div className="row my-5 justify-content-center zoom">
            <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>Cliff Burton</h2>
                    <h3>Bajista</h3>
                </div>
                <div className="col-12 col-md-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/cliffBurton_bajista.jpg?alt=media&token=a809db0d-3570-481e-8a17-dc6f7f9c93ae" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        Clifford Lee Burton (Castro Valley, California; 10 de febrero de 1962 - Kronoberg, Suecia; 27 de septiembre de 1986), más conocido como Cliff Burton, fue un músico estadounidense de thrash metal, conocido por haber sido el bajista de Metallica desde el año 1982 hasta su prematura muerte en un accidente de carretera a la edad de veinticuatro años
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="row my-5 justify-content-center zoom">
                <div className="col-12 col-md-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/larsUrich_bateria.jpeg?alt=media&token=2dd941e1-06e1-4773-a1ab-b6e8fa0cb06b" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>Lars Urich</h2>
                    <h3>Baterista</h3>
                </div>
                <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        Lars Urich es un músico danés conocido principalmente por ser el baterista, compositor, fundador y líder de la banda de thrash metal estadounidense Metallica.
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            
            <div className="row my-5 justify-content-center zoom">

            <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>Kirk Hammett</h2>
                    <h3>Guitarrista</h3>
                </div>
                <div className="col-12 col-md-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/kirkHammett_guitarro.jpg?alt=media&token=3f58e51b-32a1-4097-ae1c-83e78b0e7ddf" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        Kirk Lee Hammett (San Francisco, California, 18 de noviembre de 1962) es un guitarrista estadounidense, actualmente miembro de la banda de thrash metal Metallica. Está considerado como el noveno mejor guitarrista del momento según la revista Total Guitar y número 11 según una lista de la revista Rolling Stone seleccionada en 2003 por David Fricke, colaborador de la misma.
                        </div>
                    </div>
                </div>
            </div>
           
            </div>
            
           

            

            
           
            
            
        </>
    )
}