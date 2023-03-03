const list = () => {
    let content =document.querySelector('#content');
    if(verifySection("list")){
        alert ("Ya estamos aquí");
    }
    else{
        loading();
        content.innerHTML=`
        <div>
            <h1>Lista de sabores</h1>
        </div>`;
    
        content.removeAttribute('class');
        content.classList.add("list");
        setTimeout(noLoading, 2000);
    }
};