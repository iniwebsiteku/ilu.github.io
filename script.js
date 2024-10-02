const images = document.querySelectorAll('.p1');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 2000);

let counterElement = document.getElementById('counter');
let targetCount = 43;
let duration = 43000;
let interval = 100;
let increment = targetCount / (duration / interval);

function startCounter() {
    let currentCount = 0;
    let counterInterval = setInterval(() => {
        currentCount += increment;
        counterElement.innerText = Math.floor(currentCount);

        if (currentCount >= targetCount) {
            clearInterval(counterInterval);
            counterElement.innerText = targetCount;
            setTimeout(startCounter, 100);
        }
    }, interval);
}

startCounter();