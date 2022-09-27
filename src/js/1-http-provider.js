const jokeURL     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=1';
const urlCloudinary    = 'https://api.cloudinary.com/v1_1/dxgxrorzd/upload';
const presetCloudinary = 'qv9dblyd';

const obtenerChiste = async()=>{

    try {

        const resp =  await fetch(jokeURL);                    //----> fetch peticiones http
        if(!resp.ok)  throw'No se pudo realizar la peticion';
        // const chiste = await resp.json();

        const { id,icon_url,value } = await resp.json();

        // return chiste;

         return {id,icon_url,value};
        
    } catch (error) {
        
        throw error;
    } 
}

const obtenerUsuarios = async()=>{

    try {
        
        const resp = await fetch(urlUsuarios);
        if(!resp.ok) throw 'No se pudo realizar la peticion'
        const {data:usuarios} = await resp.json();   // Se creo alias

        // console.log(data);

        return usuarios;

    } catch (error) {
        throw error;
    }
}


const subirImagen = async (archivoSubir)=>{

    const formData = new FormData();
    formData.append('upload_preset', presetCloudinary);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch(urlCloudinary,{
            method:'POST',
            body: formData
        });

        if(resp.ok){
            const respCloudinary = await resp.json();
            // console.log(respCloudinary);
            return respCloudinary.secure_url;
        }else{
            throw await resp.json();
        }

        
    } catch (error) {
        throw error;
    }
}


export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}