
var input = document.querySelector('input[type=file]');

function closure(file, target) {
  var reader = new FileReader();
  reader.onload = ()=> {
    var dataURL = reader.result;
    target.src=dataURL;
  };
  reader.readAsDataURL(file); 
}

input.addEventListener("change", (e)=>{
  var files = e.target.files;
  var imageElement = document.querySelectorAll('img');
  if(files.length>imageElement.length) {
    var cc = document.querySelector('.card-container');
    for(i=0; i<files.length-imageElement.length; i++) {
      cc.insertAdjacentHTML("beforeend",("<div class=\"card\"><div class=\"image\"><a href=\"#\"><img class=\"image\" src=\"#\"/></a></div></div>"))
    }
  }
  var imageElement = document.querySelectorAll('img');
  for(i=0; i<files.length; i++) {
    closure(files[i],imageElement[i]);
  }
});

  

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var header = document.getElementsByClassName("sidebar")[0];

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky && window.innerWidth <= 900) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


