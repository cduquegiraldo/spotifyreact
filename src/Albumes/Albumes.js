import {servicioSpotify} from '../services/servicioSpotify.js'

import { useState, useEffect } from 'react'
import { Footer } from '../Footer/Footer.js'

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    useEffect(function(){

        servicioSpotify()
        .then(function(respuesta){
            console.log(respuesta);
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        console.log(canciones)

    },[])

    if(carga==true){

        return(
            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{

        return(

            <>
                <div className="row row-cols-1 row-cols row-cols-md-5 g-3 justify-content-center p-5">
            {
                canciones.map((cancion) => {
                    return (
                       

                            <div className="col">
                                <div className="card h-100 mt-5 bg-dark text-white">
                                    
                                    <h1>{cancion.name}</h1>
                                    <img src={cancion.album.images[0].url} className="img-fluid w-100 h-100" />
                                    <audio className="w-100" src={cancion.preview_url} controls></audio>

                                    
                                </div>
                            </div>

                        
                    )
                })
            }

           
        </div>
        <div><Footer></Footer></div>
            </>
        )

    }


    
      }

    
   
