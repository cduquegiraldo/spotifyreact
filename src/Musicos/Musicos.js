import { Footer } from '../Footer/Footer'
import './Musicos.css'

export function Musicos(){


    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {
            nombre:"James Helfield",
            rol:"Vocalista",
            url:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/JamesHelfield_vocalista.jpg?alt=media&token=cca90d10-a2b5-4369-af0f-8bfc95e15db5"
        },
        {
            nombre:"Cliff Burton",
            rol:"Bajista",
            url:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/cliffBurton_bajista.jpg?alt=media&token=a809db0d-3570-481e-8a17-dc6f7f9c93ae"
        },
        {
            nombre:"Kirk Hammett",
            rol:"Guitarrista",
            url:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/kirkHammett_guitarro.jpg?alt=media&token=3f58e51b-32a1-4097-ae1c-83e78b0e7ddf"
        },
        {
            nombre:"Lars Urich",
            rol:"Baterista",
            url:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/larsUrich_bateria.jpeg?alt=media&token=2dd941e1-06e1-4773-a1ab-b6e8fa0cb06b"
        }
    ]

    let conciertosMemorables=[
        {
            fecha:"2018",
            pais:"España",
            descripcion:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/concierto_madrid.jpg?alt=media&token=32aa34d8-e579-4dd6-896a-c9b6d5a86739"
        },
        {
            fecha:"2013",
            pais:"Estados Unidos",
            descripcion:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/concierto_usa.jpg?alt=media&token=bf4bfde7-6587-4a43-9b87-d72689e64435"
        },
        {
            fecha:"1999",
            pais:"Canada",
            descripcion:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/concierto_francia.jpg?alt=media&token=70d62319-7310-40ed-8c19-6dd28015dc29"
        },
        {
            fecha:"2005",
            pais:"Francia",
            descripcion:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/concierto_canada.jpg?alt=media&token=d2b6bd7c-b4cf-44a5-927f-af293fad39b5"
        }
    ]

    //mapeando un arreglo para hacer render

    

    return(
        <>
        <div className="row row-cols-1 row-cols-md-4 g-3 mt-5">
            

            {

                
                musicos.map(function(musico){
                    return(
                       <>
                       
                        <div className="col m">
                            <div className="card h-100">
                                <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
                                <h1 className="text-center fuente mt-2">{musico.nombre}</h1>
                                <h2 className='text-center fuente'>{musico.rol}</h2>

                            </div>
                        </div>

                       </>
                    )
                })
            }
           

        </div>
        <div className="row row-cols-1 row-cols-md-4 g-3 mt-5">
            

            {

                
                conciertosMemorables.map(function(concierto){
                    return(
                       <>
                       
                        <div className="col m">
                            <div className="card h-100">
                                <img src={concierto.foto} className="img-fluid w-100 h-100" alt="foto"/>
                                <h1 className="text-center fuente mt-2">{concierto.fecha}</h1>
                                <h2 className='text-center fuente'>{concierto.pais}</h2>

                            </div>
                        </div>

                       </>
                    )
                })
            }
           

        </div>

        <div><Footer></Footer></div>
        </>
        
    )



   
       
    


}