// const jokeURL = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeURL).then( response =>{

//     // response.json().then( data => {
//     //     console.log(data);
//     //     console.log(data.id);
//     //     console.log(data.value);
//     // });

//     // Des estructuracion
//     response.json().then( ({id, value})  => {

//         console.log(id);
//         console.log(value);
//     });
    
// })

// Pro Tip

// fetch(jokeURL)
//     .then( resp => resp.json())
//     .then( console.log );


// // Des estructuracion
// fetch(jokeURL)
//     .then( resp => resp.json())
//     .then( ({id, value}) =>{
//         console.log(id,value);
//     } );

// import {obtenerChiste} from './js/http-provider'

// obtenerChiste().then(console.log);

// import {init} from './js/2-chistes-page'
// import { obtenerUsuarios } from './js/http-provider';

// init();

// obtenerUsuarios().then(console.log);

// import {init} from './js/3-usuarios-page'
// init();

// import * as CRUD from './js/4-crud-provider'

// // CRUD.getUser(1).then(console.log);

// // CRUD.createUser({
// //     name: 'morpheus',
// //     job: 'leader'
// // }).then(console.log);

// // CRUD.updateUser(2,{
// //     name: 'morpheus',
// //     job: 'leader'
// // }).then(console.log);

// CRUD.deleteUser(1).then(console.log);

import {init} from './js/5-archivos-page'

init();