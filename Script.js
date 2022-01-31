//Get the button:
mybutton = document.getElementById("myBtn");
Project = document.getElementById("PROJ")

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//When user clicks on btn1goes to about
function Toabout(){

  document.body.scrollTop = 300;
  document.documentElement.scrollTop = 300;

}

function ToProject(){

  document.body.scrollTop = 1000;
  document.documentElement.scrollTop = 1000;
  

}