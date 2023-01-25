
// slider one

let spans = document.querySelectorAll('.slider span')
let divs = document.querySelectorAll('.slider div')
let imagePlace = 1;
divs[imagePlace - 1].style.zIndex = imagePlace;

spans[0].addEventListener('click', () => {
  if (imagePlace <= 1) {
    return;
  } else {
    imagePlace--;
    divs.forEach(div => {
      div.style.zIndex = 0;
    })
    divs[imagePlace - 1].style.zIndex = imagePlace;
  }
})

spans[1].addEventListener('click', () => {
  if (imagePlace >= divs.length) {
    return;
  } else {
    imagePlace++;
    divs.forEach(div => {
      div.style.zIndex = 0;
    })
    divs[imagePlace - 1].style.zIndex = imagePlace;
  }
})



// slider two


let spansTwo = document.querySelectorAll('.slider-two span');
let container = document.querySelector('.slider-two .img-container');
let images = document.querySelectorAll('.slider-two .img-container div');
let position = 0;

container.style.width = `calc(50vw * ${images.length})`;

spansTwo[0].addEventListener('click', (e) => {
  if (position <= images.length - 1 && position > 0) {
    position -= 1;
    container.style.transform = `translate(calc(-${position}* 50vw), 0)`;
  }
})

spansTwo[1].addEventListener('click', (e) => {
  if (position < images.length - 1 && position >= 0) {
    position += 1;
    container.style.transform = `translate(calc(-${position}* 50vw), 0)`;
  }
})