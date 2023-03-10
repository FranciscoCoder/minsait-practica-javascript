import { verifySection, loading, fetchMovies } from "./utils.js";

export default function list() {
  let content = document.querySelector("#content");
  if (verifySection("list")) {
    alert("Ya estamos aquí");
  } else {
    loading(true);

    fetchMovies("https://api.themoviedb.org/3/movie/now_playing?api_key=1ba7ea659179a983f1e67b878f95e152&language=es-ES", "GET")
      .then((data) => {
        console.log(data.results);
        let sizeObject=data.results.length;
        let listProduct = ``;
        if(sizeObject>0){
            for(let i=0; i<sizeObject;i++){
                if(data.results[i].poster_path!=''){
                    listProduct +=`
                    <div class="product">
                        <a href="#" class="detailMovie" data-movie="${data.results[i].id}">
                            <div><img src="https://www.themoviedb.org/t/p/w220_and_h330_face${data.results[i].poster_path}" /></div>
                            <div>${data.results[i].original_title}</div>
                        </a>
                    </div>
                    `
                }
            }
        }
        else{
            listProduct=`<div>No hay peliculas</div>`;
        }
        content.innerHTML=`
        <div>
            <h1 class="titleSection">Lista de peliculas</h1>
            <div class="listProduct">${listProduct}</div>
        </div>`;
        content.removeAttribute('class');
        content.classList.add("list");
        setTimeout(()=>{loading(false)}, 2000);
      })
      .catch((error) => console.error(error));
  }
};