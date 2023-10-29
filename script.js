// ELEMENTS
const sliders = document.querySelectorAll('.slider');
const prev = document.querySelector('.prev-button');
const next = document.querySelector('.next-button');
const berger = document.querySelector('.berger');
const exit = document.querySelector('.exit');
const openBerger = document.querySelector('.open__berger');
const openExit = document.querySelector('.open__exit');
const drawerRight = document.querySelector('.drawer__right');
const drawerLeft = document.querySelector('.drawer__left');


// OPEN AND CLOSE DRAWER MENU
berger.addEventListener('click',()=>{
  berger.style.display = 'none'
  exit.style.display = 'block'
  openBerger.style.display = 'none'
  openExit.style.display = 'block'
  drawerLeft.classList.add('active__drawer__left')
  drawerRight.classList.add('active__drawer__right')
  
})
openExit.addEventListener('click',()=>{
  openBerger.style.display = 'block'
  openExit.style.display = 'none'
  exit.style.display = 'none'
  berger.style.display = 'block'
  drawerRight.classList.remove('active__drawer__right')
  drawerLeft.classList.remove('active__drawer__left')
})
drawerLeft.addEventListener('click',()=>{
  openBerger.style.display = 'block'
  openExit.style.display = 'none'
  exit.style.display = 'none'
  berger.style.display = 'block'
  drawerRight.classList.remove('active__drawer__right')
  drawerLeft.classList.remove('active__drawer__left')
})





// SLIDER 

let count = 0
let arr = []

sliders.forEach((slide)=>{
  arr.push(slide)
})


arr[count].classList.add("active")
// GO TO NEXT AND PREV WHEN CLICK ON BUTTON
prev.addEventListener('click',goToPrev);
next.addEventListener('click',goToNext);


// GO TO PREV FUNCTION
function goToPrev(){
  arr.forEach((arrey)=>{
    arrey.style.display = 'none'
  
  })
  count --
  if(count < 0){
    count = arr.length - 1
  }
  arr[count].style.display = 'block'
}

// GO TO NEXT FUNCTION
function goToNext(){
  arr.forEach((arrey)=>{
    arrey.style.display = 'none'
  })
  count ++
  if(count > arr.length - 1){
    count = 0
  }
  arr[count].style.display = 'block'
}


// CHANGE SLIDE EVERY 5 SECENDS
setInterval(goToNext,5000)
