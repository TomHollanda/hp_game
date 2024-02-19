const harryfly = document.querySelector('.harryfly');

const fly = () => {

    harryfly.classList.add(fly)

    setTimeout(() => {

        harryfly.classList.remove('fly');
    }, 500);
}

document.addEventListener('keydown', fly);