var textWrapper = document.querySelector('.ml6 .letters');
textWrapper ? (textWrapper.innerHTML =  textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")) : null;
// anime.timeline({loop: false})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["2em", 0],
//     translateZ: 0,
//     duration: 1500,
//     delay: (el, i) => (90 * i + 2000)
//   });

  anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => ( 45 * i + 3000)
  });
  anime.timeline({loop:false}).add({
    targets: '.line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 1400,
    delay:3000
  })


var textWrapper1 = document.querySelector('.ml12');
textWrapper1 ? (textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>")) : null;
anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1800,
    delay: (el, i) => 3500 + 30 * i
  });





  