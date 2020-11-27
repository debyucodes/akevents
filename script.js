// Namespace object
const app = {};

// Init app
app.init = () => {
  app.dropDown();
  app.faq();
  app.overlay();
  app.closeOverlay();
}

// burger drop down
app.dropDown = () => {
  $('.burger').click(function() {
    $(this).next('.answer').toggle(800, "swing");
  })
}

// FAQ 
app.faq = () => {
  $('.question').click(function(){
    $(this).find('p').slideToggle(300);
    $('i', this).toggleClass("fas fa-minus fas fa-plus")
  })
}

// open overlay
app.overlay = () => {
  $('.eventDetails').find('h5').click(function(){
    $(this.parentElement).next('div').fadeIn();
    $('body').addClass('noScroll');
  })
}

// close overlay
app.closeOverlay = () => {
  $('.hiddenOverlay').click(function(){
    $(this).hide();
    $('body').removeClass('noScroll')
  })
}



// doc ready
$(document).ready(function(){
  app.init();
})