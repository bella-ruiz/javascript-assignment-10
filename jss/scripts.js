let textDivs = document.querySelectorAll('.text');
let outerDivs = document.querySelectorAll('.photo');

// hide all the text divs
textDivs.forEach(function(el) {
  el.classList.add('disappear');
});

// when any animal div is clicked, make its text appear
// or disappear
outerDivs.forEach(function(el) {
  el.addEventListener('click', function() {
    // the div we want is inside the div we clicked
    let textDiv = this.firstElementChild;
    if (textDiv.classList.contains('disappear')) {
      textDiv.classList.remove('disappear');
      textDiv.classList.add('appear');
    } else {
      textDiv.classList.remove('appear');
      textDiv.classList.add('disappear');
    }
  });
});


let divs = document.querySelectorAll('.text')

// equivalent to hover
divs.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    this.style.background = '#f28566';

  });
  el.addEventListener('mouseleave', function() {
    this.style.background = '#f5987d';

  });
});
