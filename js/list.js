const list = () => {
    let content =document.querySelector('#content');
    if(verifySection("list")){
        alert ("Ya estamos aquí");
    }
    else{
        loading();
        let sizeObject=Object.keys(helados).length;
        let listProduct = ``;
        if(sizeObject>0){
            for(i=0; i<sizeObject;i++){
                if(helados[i].imagen!=''){
                    listProduct +=`
                    <div class="product">
                        <div><a href="javascript:detail(${i})"><img src="assets/images/${helados[i].imagen}" /></a></div>
                        <div><a href="javascript:detail(${i})">${helados[i].nombre}</a></div>
                    </div>
                    `
                }
                
            }
        }
        else{
            listProduct=`<div>No hay sabores</div>`;
        }

        content.innerHTML=`
        <div>
            <h1 class="titleSection">Lista de sabores</h1>
            <div class="listProduct">${listProduct}</div>
        </div>`;
    
        content.removeAttribute('class');
        content.classList.add("list");
        setTimeout(noLoading, 2000);
    }
};