/*javascript dropdown menu functionallity*/

/* get the dropdown button*/
var dropdownbtn = document.querySelector(".dropdown  .dropdownbtn");

/* get the dropdown menu*/
var dropdownmenu = document.getElementById("servicedropdown");

/*toggle the dropdown visibility the button is clicked*/
dropdownbtn.addEventListener("click", function () {
  dropdownbtn.classList.toggle("show");
});

/*close the dropdown window if cilck outside of it*/
window.addEventListener("click", function (event) {

   if(!event.target.matches(.dropdownbtn)){
    var dropdown=this.document.getElementsByClassName('dropdown-menu');

   }
   for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');



});
