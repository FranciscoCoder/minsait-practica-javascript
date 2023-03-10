import {verifySection, loading} from "./utils.js";
import list from "./list.js";
import detail from "./detail.js";

const index = () =>{
    let content =document.querySelector('#content');
    if(verifySection("home")){
        alert ("Ya estamos aquí");
    }
    else{
        loading(true);
        content.innerHTML= `
            <div class="titleSection"><h1>Bienvenido a la Heladeria Paco</h1></div>
            <div class="contentInitial">
                <p>
                    En esta heladeria encontraras todos tipos de helados y sobre todo de sabores.<br><br>
                    Mira nuestra amplia gama de sabores.<br><br>
                    <a id="buttonList" href="#">Ver peliculas</a>
                </p>
            </div>
        `;
        content.removeAttribute('class');
        content.classList.add("home");
        setTimeout(()=>{loading(false)}, 2000);
    }
}

//Index al pulsar en logo y en el menu home 
document.querySelectorAll('#home, #logo').forEach((homeSection)=>{
    homeSection.addEventListener('click',()=>{
        index();
    })
});

//Lista al pulsar en ver mas pelicuas y en el menu list 
document.querySelectorAll('#listMovie, #buttonList').forEach((listSection)=>{
    listSection.addEventListener('click',()=>{
        list();
    })
});

document.querySelectorAll('a.detailMovie').forEach((detailSection)=>{
    detailSection.addEventListener('click',(e)=>{
        detail(detailSection.id);
    })
});

index();
