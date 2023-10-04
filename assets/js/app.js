const baseEndpoint = 'https://api.github.com'; //API DE GITHUB
const usersEndpoint = `${baseEndpoint}/users`; // USERS ES PARA 
const n = document.querySelector('.name'); 
const b = document.querySelector('.blog'); //SE CAMBIO EL 3 POR NUMERO POR QUE ES UNA CLASE NO UN ID 
const l = document.querySelector('.location'); //ESTA CLASE SE CREO EN HTML


async function displayUser(username) { //SE AGREGA async AL INICIO POR QUE EL AWAIT INIDICA QUE ES AINCRONA
  n.textContent = 'cargando...'; 
  const response = await fetch (`${usersEndpoint}/${username}`); //SE SOLICITA INFORMACION DEL USUARIO
  const data = await response.json (); //SE UTILIZA PARA GUARDAR LA INFORMACION Y CONVERTIRLA A JSON

  console.log(data); 
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) { 
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}` //SE CAMBIAN COMILLAS POR BACKTICKS
}

displayUser('stolinski').catch(handleError); 





//LA FUNCION DEL CODIGO ES SOLICITAR INFORMACION DE UN USUARIO DE GITHUB POR MEDIO D EUNA API, SI NO ES EXITOSA LA OBTENSION DE INFORMACION SE DESPLIEGAN ERRORES PARA PODER RESOLVER LO QUE TENGAMOS MAL.


