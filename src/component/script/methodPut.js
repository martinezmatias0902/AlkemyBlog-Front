//Realizar un put a la API
//Edit a un post de acuerdo a su ID

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const datos = new FormData(formulario);

    axios({
        method: 'PUT',
        url: `http://127.0.0.1:8080/api/blog/${datos.get('idBlog')}`,
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

