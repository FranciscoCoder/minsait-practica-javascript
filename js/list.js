const list = () => {
    let content =document.querySelector('#content');
    if(verifySection("list")){
        alert ("Ya estamos aquí");
    }
    else{
        content.innerHTML=`
        <div>
            <h1>Lista de sabores</h1>
        </div>`;
    
        content.removeAttribute('class');
        content.classList.add("list")
    }
};