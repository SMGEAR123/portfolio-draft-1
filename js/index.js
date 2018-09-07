$(document).ready(function(){
  console.log('Document is ready');
  const navButton = $('button.navbar-toggle');
  const collapsingDiv = $('div.navbar-collapse');
  const input = $('div.input-group > input, textarea');

 /* When user scrolls, the nav tab disappears */
 navButton.click(function(){

 const changeClass = function(){
   /* Checks if css is set certain class when menu is displaying */
    if(collapsingDiv.hasClass('in')) {
      /*Clicks and returns when criteria is met*/
      navButton.trigger('click');
      return;
    }
 }//function ends
   /*When you scroll the code below runs */
   $(window).scroll(changeClass)

 })

/* Clear placeholder text when user clicks into the textbox and add it when they exit it*/
 input.focus(function(){
   const placeholderText = this.placeholder;
   this.placeholder = "";
    input.blur(function(){
     this.placeholder = placeholderText;
   })

 })

})//document.ready ends
