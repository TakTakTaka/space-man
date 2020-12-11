console.log('loaded keypress.js');

let keys = [];

$(document).ready(function(){
  $(document).keydown((e)=> {
    console.log(e.which)
    keys.push(e.which);
  });
});



