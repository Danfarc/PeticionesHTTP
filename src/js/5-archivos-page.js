import {subirImagen} from './1-http-provider'

const body = document.body;
let inputFile, imgFoto;


const crearInputFileHtml = ()=>{

    const html = `
    <h1 class="mt-5"> Subir archivo </h1>
    <hr>
    <label> Selecciona una Foto </label>
    <input type="file" accept="image/png" />

    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');


}

const eventos =()=>{
    inputFile.addEventListener('change',(event)=>{
        const file = event.target.files[0];
        subirImagen(file).then(url =>{
            imgFoto.src = url
            // console.log(url);
        });
        console.log(file);
    })
}


export const init = ()=>{
    crearInputFileHtml();
    eventos();

}