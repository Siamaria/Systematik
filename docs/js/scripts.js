// JavaScript Document
//Menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Lightbox
 $('a').nivoLightbox();

//Formular
/*Ajax contact form*/
$("#kontaktmig").submit(function(event) {
           // cancels the form submission
           event.preventDefault();
           submitForm();
       });

       function submitForm() {
           // Initiate Variables With Form Content
           var navn = $("#navn").val();
           var email = $("#email").val();
           var henvendelse = $("#henvendelse").val();
           var besked = $("#besked").val();

           $.ajax({
               type: "POST",
               url: "formhandler.php",
               data: "navn=" + navn + "&email=" + email + "&henvendelse=" + henvendelse + "&besked=" + besked,
               success: function(text) {
                   if (text == "success") {
                       formSuccess();
                   } else{
                       formFailure(text);
                   }
               }
           });
       }

       function formSuccess() {
           $("#formfeedback").removeClass("hidden");
           $("#kontaktmig").addClass("hidden");
           $("#formfailure").addClass("hidden");
       }
       function formFailure(text) {
           $("#formfailure").removeClass("hidden");
           $("#formfailure").html(text);
       }

//TweenMax
window.addEventListener("load", altErLoadet);

function altErLoadet(){

  TweenMax.staggerFrom(".column_and_name_container p", 1, {opacity:"0",onComplete:hverAnimationSlut},-.1,del2);
  TweenMax.staggerFrom(".column_and_name_container svg", 1, {width:"0"},.1);
}
function del2(){
  console.log("Hele stagger animationen slut");


}
function hverAnimationSlut(){
  console.log("Hver animation slut")
}
