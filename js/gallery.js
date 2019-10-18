let input = document.querySelector('input[type=file]');

input.addEventListener("change", (e)=>{
    let files = e.target.files;
    let imageElement = document.querySelectorAll('.image img');
    
    if(files.length>imageElement.length) {
    let cc = document.querySelector('.card-container');
    for(i=0; i<files.length-imageElement.length; i++) {
        cc.insertAdjacentHTML("beforeend",("<div class=\"card\"><div class=\"image\"><a href=\"#\"><img class=\"image\" src=\"#\"/></a></div></div>"))
    }
    }

    imageElement = document.querySelectorAll('img');

    for(let i=0; i<files.length; i++) {
    let reader = new FileReader();
    reader.onload = ()=> {
        let dataURL = reader.result;
        imageElement[i].src=dataURL;
        imageElement[i].parentNode.parentNode.parentNode.style.width = `${imageElement[i].width}px`;
    };
    reader.readAsDataURL(files[i]);     }
});  
