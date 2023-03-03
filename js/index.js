const index = () =>{
    let content =document.querySelector('#content');
    if(verifySection("home")){
        alert ("Ya estamos aquí");
    }
    else{
        content.innerHTML= `
            <div><h1>Bienvenido a la Heladeria Paco</h1></div>
            <div>
                <p>
                    En esta heladeria encontraras todos tipos de helados y sobre todo de sabores.<br><br>
                    Mira nuestra amplia gama de sabores.
                </p>
            </div>
        `;
        content.removeAttribute('class');
        content.classList.add("home")
    }
}

function verifySection(nameSection){
    let isSection = false;
    let content=document.querySelector('#content');
    if(((content.classList.value!=""))&&(content.attributes.class.value==nameSection)){
        isSection = true;
    }
    return isSection;
}

function loading()
{
    document.querySelector("#loading").classList.remove('hide');
}

function noLoading()
{
    document.querySelector("#loading").classList.add('hide');
}