const detail = (index)=>{
    loading();
    let content =document.querySelector('#content');
    let detail = ``;
    if(index!=''){
        console.log(helados[index].imagen);
        detail= `
        <div>
            <h1 class="titleSection">${helados[index].nombre}</h1>
            <div class="contentDetails">
                <div><img src="assets/images/${helados[index].imagen}" /></div>
                <div><p>${helados[index].descripcion}</p></div>
            </div>
        </div>
        `;
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
    setTimeout(noLoading, 2000);
}