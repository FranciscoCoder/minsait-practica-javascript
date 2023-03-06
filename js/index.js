const index = () =>{
    let content =document.querySelector('#content');
    if(verifySection("home")){
        alert ("Ya estamos aquí");
    }
    else{
        loading();
        content.innerHTML= `
            <div class="titleSection"><h1>Bienvenido a la Heladeria Paco</h1></div>
            <div class="contentInitial">
                <p>
                    En esta heladeria encontraras todos tipos de helados y sobre todo de sabores.<br><br>
                    Mira nuestra amplia gama de sabores.<br><br>
                    <a href="javascript:list();">Ver sabores</a>
                </p>
            </div>
        `;
        content.removeAttribute('class');
        content.classList.add("home");
        setTimeout(noLoading, 2000);
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
    window.scrollTo(0,0);
    document.querySelector("html").classList.add("noscroll");
    document.querySelector("#loading").classList.remove('hide');
}

function noLoading()
{
    document.querySelector("html").classList.remove("noscroll");
    document.querySelector("#loading").classList.add('hide');
}