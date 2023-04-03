let counter = 0;
const counterElement = document.querySelector('.compteur');
const interval = setInterval(() => {
    counterElement.textContent = counter++;
    if (counter > 76) {
        clearInterval(interval);
    }
}, 30);



const numbers = [80, 92, 61, 72];
let counters = Array.from(document.querySelectorAll('.digit'));

counters.forEach((counter, index) => {
    let start = 0;
    const end = numbers[index];
    const interval = setInterval(() => {
        counter.textContent = start++;
        if (start > end) {
            clearInterval(interval);
        }
    }, 30);
});