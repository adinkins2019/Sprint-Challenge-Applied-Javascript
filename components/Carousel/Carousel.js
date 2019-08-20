/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let picCounter = 0;
const carouselCont = document.querySelector('.carousel-container');

function Carousel() {
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

    const leftBtn = document.createElement('div')
    leftBtn.textContent = ' < ';
    leftBtn.addEventListener('click', (event)=> {
      picCounter--;
      
      
    })

    const image1 = document.createElement('img');
    image1.src = './assets/carousel/mountains.jpeg';
    const image2 = document.createElement('img');
    image2.src = './assets/carousel/computer.jpeg';
    const image3 = document.createElement('img');
    image3.src = './assets/carousel/trees.jpeg';
    const image4 = document.createElement('img');
    image4.src = './assets/carousel/turntable.jpeg';

    const rightBtn = document.createElement('div')
    rightBtn.textContent = ' > ';
    rightBtn.addEventListener('click', (event)=>{
      picCounter++;
    })

  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(image1);
  carouselDiv.appendChild(image2);
  carouselDiv.appendChild(image3);
  carouselDiv.appendChild(image4);
  carouselDiv.appendChild(rightBtn);
  
  return carouselDiv;
}

const carouselComp = Carousel();
carouselCont.appendChild(carouselComp);