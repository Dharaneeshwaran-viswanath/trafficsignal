const lights = [
  document.getElementById('red'),
  document.getElementById('yellow'),
  document.getElementById('green')
];

const lightOrder = ['red', 'yellow', 'green'];
let current = 0;

function showLight(index) {
  lights.forEach((light, i) => {
    if (i === index) {
      light.classList.add('active');
    } else {
      light.classList.remove('active');
    }
  });
}

function nextLight() {
  showLight(current);
  current = (current + 1) % lights.length;
}

// Start the traffic light cycle
document.addEventListener('DOMContentLoaded', () => {
  showLight(current);
  setInterval(nextLight, 1000); // Change light every 1 second
});
