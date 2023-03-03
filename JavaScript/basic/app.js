const title1 = document.getElementById('title');
title.innerh2 = 'Got you!';

const hello = document.getElementsByClassName('hello');
const mainTitle = document.getElementsByTagName('h1');

// query
const title2 = document.querySelector('.hello h1')
const title3 = document.querySelector('.hello h1:last-child')
const titles = document.querySelectorAll('.hello h1')

// event
function handleTitleClick() {
    title1.style.color = 'blue';
}

function handleMouseEnter() {
    title2.style.color = 'pink'
}

function handleMouseLeave() {
    title2.innerh2 = 'bye'
}

// title1.addEventListener('click', handleTitleClick);
// title2.addEventListener('mouseenter', handleMouseEnter);
// title2.addEventListener('mouseleave', handleMouseLeave);
title1.onclick = handleTitleClick;
title2.onmouseenter = handleMouseEnter;
title2.addEventListener('mouseleave', handleMouseLeave);

// window
function handleWindowResize() {
    document.body.style.backgroundColor = 'skyblue';
}

function handleWindowCopy() {
    alert('copier!')
}

function handleWindowOffline() {
    alert('SOS no WIFI')
}
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);

// CSS in JS
const h1 = document.querySelector('div.hi h1');

function handleH1Click() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === 'blue') newColor = 'tomato';
    else newColor = 'blue';
    h1.style.color = newColor;
}

h1.addEventListener('click', handleH1Click);

// separate CSS - JS
const h2 = document.querySelector('div.new:first-child h2');

function handleH2Click() {
    /*
    const clickedClass = 'clicked';
    if (h2.classList.contains(clickedClass)) {
        // h2.className = '';
        h2.classList.remove(clickedClass);
    }
    else {
        // h2.className = clickedClass;
        h2.classList.add(clickedClass);
    }
    */
    h2.classList.toggle('clicked');
}

h2.addEventListener('click', handleH2Click);