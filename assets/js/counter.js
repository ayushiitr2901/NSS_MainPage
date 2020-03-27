// $(window).scroll(function(event){
//     if ($(window).scrollTop() >  $("#figures").offset().top - 20) {
//         $('.count-number').each(function () {
//             $(this).prop('Counter',0).animate({
//               Counter: $(this).text()
//             }, {
//               duration: 2000,
//               easing: 'swing',
//               step: function (now) {
//                 $(this).text(Math.ceil(now));
//               }
//             });
//         });
//     }
//   })(jQuery);

// console.log(
//   "poijkhgf"
// )

  function putValue (element, value ){
    element.innerHTML = value;

  
  }

  function counterStart(elements){
    for(let i = 0 ; i < elements.length; i++){
      let initialValue = elements[i].innerHTML;
      // console.log(initialValue)

      let valueObj = {
        intial:0,
        current:0
      }
      anime({
        targets: valueObj,
        current:initialValue,
        duration:3000,
        round: 1,
        easing: 'easeInOutExpo',
        
        update: function() {
          putValue(elements[i], valueObj.current);
        }
      });


  }

}
 



const elements = document.querySelectorAll('.count-number');
let isFirstTime = true;

function countOnScroll(){

  let pos = window.scrollY;
  // let navbar =  document.getElementsByClassName('navbar-23')[0];
  // if(pos>40)
  // navbar.style.position = "fixed"
  // else
  // navbar.style.position = "relative"

  if(pos>723&&pos<1300&&isFirstTime){
  isFirstTime = false;
  counterStart(elements);
  }


  if(pos>window.innerHeight-150){
    let navbar =  document.getElementsByClassName('navbar-23')[0];
    navbar.style.backgroundColor = 'red'; 
    let links = navbar.children[0];
    for(let i = 0 ; i<links.children.length; i++){
      links.children[i].style.backgroundColor = "rgba(255,255,255,0)";
      links.children[i].children[0] ? links.children[i].children[0].style.color= "white":null;
    }
  }
  else{
    let navbar =  document.getElementsByClassName('navbar-23')[0];
    navbar.style.backgroundColor = 'rgba(255,255,255,0.08)'; 
    let links = navbar.children[0];
    for(let i = 0 ; i<links.children.length; i++){
      links.children[i].style.backgroundColor = "rgba(255,255,255,0)";
      links.children[i].children[0] ? links.children[i].children[0].style.color= "white" : null;
    }
  }

}



window.onscroll = ()=>{
  countOnScroll();
};





  
