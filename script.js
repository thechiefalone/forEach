const squares = document.querySelectorAll('div');
console.log(squares);

let random = Math.floor(Math.random() * 9);
console.log(random);

squares.forEach((square, index) => {

  square.addEventListener('click', click);
  if (index == random) {
    square.addEventListener('click', function() {
      this.style.backgroundColor = 'green';
      alert('Congratulations');
    })
  }
})


let lastClickDiv;

function click() {
  if (lastClickDiv) {
    lastClickDiv.style.backgroundColor = 'red';
  }
  this.style.backgroundColor = 'yellow';
  lastClickDiv = this;
}
