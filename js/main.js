// DOM ELEMENTS
const wrapper = document.querySelector(".first-nav");
const navBarA = document.querySelector(".a");
const navBarB = document.querySelector(".b");
const navBarC = document.querySelector(".c");
const harmburger = document.querySelector('.harmburger');

harmburger.addEventListener('click', () => {
  wrapper.style.display = 'block';
})

// FUNCTIONS
function navFunctionality(event) {
  const element = event.target;

  // if (element.nodeName !== 'A' || !element.classList.contains('first-name')) {
  //     return;
  // }
  const targetButton = element.dataset.input;

  openNavBar(targetButton);

}

function openNavBar(input) {
  if (input === "0") {
    navBarA.classList.remove('hide');
    navBarC.classList.add('hide');
    navBarB.classList.add('hide');
  } else if (input === "1") {
    navBarB.classList.remove('hide');
    navBarA.classList.add('hide');
    navBarC.classList.add('hide');
  } else if (input === "2") {
    navBarC.classList.remove('hide');
    navBarA.classList.add('hide');
    navBarB.classList.add('hide');
  }
}

function closeNavBar() {

  navBarA.classList.add('hide');
  navBarC.classList.add('hide');
  navBarB.classList.add('hide');
}

window.addEventListener('click', () => {
  closeNavBar();
})

// EVENTS
wrapper.addEventListener("mouseover", navFunctionality);
wrapper.addEventListener('mouseout', closeNavBar);
