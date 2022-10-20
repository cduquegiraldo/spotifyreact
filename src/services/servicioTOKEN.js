export  async function servicioTOKEN(){

    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1= "grant_type=client_credentials"
    const DATO2= "client_secret=088d3922c2744bfaa36f0463a1c41d0c"
    const DATO3= "client_id=f1cf7e80a6be461d8ef53b45fa9bbca0"

    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }

    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+" "+datos.access_token
    

    return datos

}