console.log('works');

$(document).ready(function(){
 $('#item1 > a > h2 > div').on('click', hello)
  // $('#item2 > a > h2 > div').on('click', hello2)
  // $('#item3 > a > h2 > div').on('click', hello3)
  // $('#item4 > a > h2 > div').on('click', hello4)
  $('body > div > header > label:nth-child(3)').on('click', showSkills);
  $('body > div > header > label:nth-child(4)').on('click', showFuture);
   $('body > div > header > label:nth-child(4)').on('click', showCONTACT);

})

function hello(){
  $('#item1 > h3 > div > div > p').toggle()
}
function hello2(){
  $('#item2 > p:nth-child(3)').toggle()
}
function hello3(){
  $('#item3 > p').toggle()
}


// function showSkills(){
//   $('#item1 > h3 > div > div > p').hide()
//   $('#item3 > p').hide()
// }
// function showFuture(){
//   $('#item1 > h3 > div > div > p').hide()
//   $('#item2 > p:nth-child(3)').hide()
// }
// function showFuture(){
//   $('#item2 > p:nth-child(3)').hide()
//   $('#item1 > h3 > div > div > p').hide()
// }
function pgClock() {
 var sTime=(new Date()).toString();
 document.getElementById('clockid').innerHTML =
   sTime.substring(0,3+sTime.lastIndexOf(':'));
 setTimeout('pgClock()',333);
}
pgClock();

//
// var opts = {
// arrowRight:'.arrow-right',
// arrowLeft: '.arrow-right',
// speed:700,
// slideDuration: 3000
//
//
//
//div > header > label:nth-child(4)
//
// }
// $('.carousel').BannerSlide(opts);
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });
//
//
// var opts = {
// arrowRight:'.arrow-right',
// arrowLeft: '.arrow-left',
// speed: 700,
// slideDuration: 3000
//
//
//
// }
// $('.carousel').BannerSlide(opts);
