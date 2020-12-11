console.log('loaded keypress.js');

$(document).ready(function(){
  $(document).keydown((e)=> {
    console.log(e.which)
  })
});