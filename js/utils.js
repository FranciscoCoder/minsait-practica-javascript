export function verifySection(nameSection){
    let isSection = false;
    let content=document.querySelector('#content');
    if(((content.classList.value!=""))&&(content.attributes.class.value==nameSection)){
        isSection = true;
    }
    return isSection;
}

export function loading(isLoading)
{
    if(isLoading){window.scrollTo(0,0);}
    document.querySelector("html").classList.toggle("noscroll");
    document.querySelector("#loading").classList.toggle("hide");
}

export async function fetchMovies(url, method) {
    const response = await fetch(url,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }