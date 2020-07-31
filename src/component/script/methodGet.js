//Code by Martinez Matias
// Get all posts
const getAllPosts = document.querySelector('#getData');
const listOfLastPosts = document.querySelector(".lastPostsData");
const postSection = document.querySelector(".postSection");


//get all posts DOM manipulation
getAllPosts.addEventListener('click', (event) => {
    event.preventDefault();
    axios({
        method: 'GET',
        url: 'http://127.0.0.1:8080/api/blog'
    })
    .then(res => {
        for (const post of res.data) {
            //ASIDE section
            const crearLi = document.createElement('li');
            crearLi.textContent = `${post.id} - ${post.timestamp}`;
            listOfLastPosts.appendChild(crearLi); 
            
            //MAIN section
            //General container
            const contenedor = document.createElement('div');
            contenedor.setAttribute('class', 'post');
            postSection.appendChild(contenedor);

            //Manipular ID - Titulo
            const contenedorIdyTitulo = document.createElement('div');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            p.setAttribute('id', 'idDeUnPost')
            contenedorIdyTitulo.setAttribute('class', 'postIdyFecha');

            h3.textContent = `${post.title}`;
            p.textContent = `${post.id}`;

            contenedor.appendChild(contenedorIdyTitulo);
            contenedorIdyTitulo.appendChild(h3);
            contenedorIdyTitulo.appendChild(p);
            
            //Manipular Texto del post
            const textContainer = document.createElement('div');
            textContainer.setAttribute('class', 'postText');
            textContainer.textContent = `${post.text}`;
            contenedor.appendChild(textContainer)

            //Fecha
            const fechaContainer = document.createElement('span');
            fechaContainer.textContent = `Fecha: ${post.timestamp}`
            contenedor.appendChild(fechaContainer);

            //Botones EDIT - DELETE
            const contenedorBotones = document.createElement('div');
            contenedorBotones.setAttribute('class', 'actOnPost');
            const toedit = document.createElement('a');
            const todelete = document.createElement('a');
            toedit.setAttribute('id', 'editoTexto');
            todelete.setAttribute('class', 'eliminoPost');
            toedit.textContent = `EDIT`;
            todelete.textContent = `DELETE`;
            contenedor.appendChild(contenedorBotones);
            contenedorBotones.appendChild(toedit);
            contenedorBotones.appendChild(todelete);

        }
    })
    .catch(error => {
        // handle error
        console.log(error);
      })
});

//Get Posts by ID

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const datos = new FormData(formulario);

    axios({
        method: 'GET',
        url: `http://127.0.0.1:8080/api/blog/${datos.get('idBlog')}`
    })
    .then(res => {
        //handle response
        for (const post of res.data) {
            //ASIDE section
            const crearLi = document.createElement('li');
            crearLi.textContent = `${post.id} - ${post.timestamp}`;
            listOfLastPosts.appendChild(crearLi); 
            
            //MAIN section
            //General container
            const contenedor = document.createElement('div');
            contenedor.setAttribute('class', 'post');
            postSection.appendChild(contenedor);

            //Manipular ID - Titulo
            const contenedorIdyTitulo = document.createElement('div');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            p.setAttribute('id', 'idDeUnPost')
            contenedorIdyTitulo.setAttribute('class', 'postIdyFecha');

            h3.textContent = `${post.title}`;
            p.textContent = `${post.id}`;

            contenedor.appendChild(contenedorIdyTitulo);
            contenedorIdyTitulo.appendChild(h3);
            contenedorIdyTitulo.appendChild(p);
            
            //Manipular Texto del post
            const textContainer = document.createElement('div');
            textContainer.setAttribute('class', 'postText');
            textContainer.textContent = `${post.text}`;
            contenedor.appendChild(textContainer)

            //Fecha
            const fechaContainer = document.createElement('span');
            fechaContainer.textContent = `Fecha: ${post.timestamp}`
            contenedor.appendChild(fechaContainer);

            //Botones EDIT - DELETE
            const contenedorBotones = document.createElement('div');
            contenedorBotones.setAttribute('class', 'actOnPost');
            const toedit = document.createElement('a');
            const todelete = document.createElement('a');
            toedit.setAttribute('id', 'editoTexto');
            todelete.setAttribute('class', 'eliminoPost');
            toedit.textContent = `EDIT`;
            todelete.textContent = `DELETE`;
            contenedor.appendChild(contenedorBotones);
            contenedorBotones.appendChild(toedit);
            contenedorBotones.appendChild(todelete);

        }
    })
    .catch(error => {
        // handle error
        console.log(error);
      })
});