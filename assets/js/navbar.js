

const elem = document.querySelector('#nav-bg'),
toggleBtn = document.querySelector('#toggle-btn-nav'),
elemH = elem.getBoundingClientRect().height,
elemW = elem.getBoundingClientRect().width,
toggles =  document.querySelectorAll('.wrapper #link');


let open = false;
let scale, offsetX, offsetY;

const calculateValues = (() => {
const w = window.innerWidth;
const h = window.innerHeight;
//const cssStyles = getComputedStyle(elem);
//const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
const offsetValue = Number(getComputedStyle(elem).getPropertyValue('--offset-value'));

//  Offsets to center the circle
offsetX = (w/2) - (elemW/2) - offsetValue;
offsetY = (h/2) - (elemH/2) - offsetValue;

// Good old pythagoras
const radius = Math.sqrt((h ** 2)+(w ** 2));
scale = radius/(elemW/2)/2 + .1; // Add '.1' to compensate for Safari sub pixel blur issue
return scale;
})


const openMenu = () => {
elem.style.setProperty("--translate-x", `${offsetX*2}px`);
elem.style.setProperty("--translate-y", `-${offsetY*2}px`);
elem.style.setProperty("--scale", scale*2);
elem.style.setProperty("background", "white");
}
const closeMenu = () => {
elem.style.setProperty("--scale", scale*0.1);
elem.style.setProperty("--translate-x", `${offsetX}px`);
elem.style.setProperty("--translate-y", `-${offsetX}px`);
elem.style.setProperty("background", "white");
}
const animateMenu = () => {
open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
open = !open;
animateMenu();
toggleBtn.classList.toggle('shown');
}

const resizeHandler = () => { 
window.requestAnimationFrame(() => {
calculateValues();
animateMenu();
});
}

calculateValues();
function handleClick(i){
if( toggles[i].getAttribute('href') != '#0')
toggleMenu();
}

// toggleBtn.onclick = toggleMenu;
toggleBtn.addEventListener('click', toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);
for(let i  = 0 ; i<toggles.length ; i++){
toggles[i].onclick = ()=>{ handleClick(i)}
}


if(window.innerWidth>776)
document.querySelector('.navbar-1').style.display = "none";
else
document.querySelector('.navbar-23').style.display = "none";
