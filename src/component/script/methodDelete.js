//Eliminar un post o todos los POSTS

//Eliminar todos los post:
const deleteAll = document.getElementById('deleteAll');

const eliminoPost = document.getElementById('eliminoPost');

deleteAll.addEventListener('click', (event) => {
    event.preventDefault();
    
    axios({
        method: 'DELETE',
        url: `http://127.0.0.1:8080/api/blog/`
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
