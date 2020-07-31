//Realizar un post a la API

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const datos = new FormData(formulario);

    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8080/api/blog',
        data: {
            "title": `${datos.get('title')}`,
            "text": `${datos.get('text')}`,
            "timestamp": `${datos.get('fecha')}`
        }
    })
    .then(res => {
        //handle response
        console.log(res.data);
    })
    .catch(error => {
        // handle error
        console.log(error);
      })
});

