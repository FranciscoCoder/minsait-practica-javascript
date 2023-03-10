import {loading, fetchMovies} from "./utils.js";

export default function detail (index){
    loading(true);
    fetchMovies(`https://api.themoviedb.org/3/movie/${index}?api_key=1ba7ea659179a983f1e67b878f95e152&language=es-ES`, "GET")
    .then((data) => {
        let detail = ``;
        if(index!=''){
            console.log(data.results[index].imagen);
            // detail= `
            // <div>
            //     <h1 class="titleSection">${data.results[index].nombre}</h1>
            //     <div class="contentDetails">
            //         <div><img src="${data.results[index].imagen}" /></div>
            //         <div><p>${data.results[index].descripcion}</p></div>
            //     </div>
            // </div>
            // `;
        }
        else{
            alert('Error');
            detail=`
            <div>
                <h1>Error, no existe el sabor</h1>
                <a href="javascript:list();">Atrás</a>
            </div>
            `;
        }
        content.innerHTML=detail;
        content.removeAttribute('class');
        content.classList.add("details");
        setTimeout(()=>{loading(false)}, 2000);
    })
    .catch((error) => console.error(error));

    let content =document.querySelector('#content');
    
}