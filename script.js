console.log('hi')

// Namespace object
const app = {};

// Init app
app.init = () => {
  app.dropDown();
}

// burger drop down
app.dropDown = () => {
  $('.burger').click(function() {
    $('.dropDown').toggle(800, "swing");
    console.log('wtf')
  })
}

// doc ready
$(document).ready(function(){
  app.init();
})