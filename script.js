const squares = document.querySelectorAll('.container div');
console.log(squares);

let random = Math.floor(Math.random() * 16);
console.log(random);

squares.forEach((square, index) => {

  square.addEventListener('click', click);
  if (index == random) {
    square.addEventListener('click', function() {
      this.style.backgroundImage = 'url("https://source.unsplash.com/random/150x150")';
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
