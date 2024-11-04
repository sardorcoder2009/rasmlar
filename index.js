const imgContainer = document.querySelector('.imgs');
const imgs = imgContainer.querySelectorAll('.img');

imgContainer.addEventListener('click', (event) => {
    const targetImg = event.target.closest('img');
    if (targetImg) {
        imgs.forEach((img) => {
            if (img === targetImg) {
                img.classList.add('imgHover');
                img.classList.remove('nock');
            } else {
                img.classList.remove('imgHover');
                img.classList.add('nock');
            }
        });
    }
});
