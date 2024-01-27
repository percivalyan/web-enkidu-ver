let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.addEventListener('click', function() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
});

prev.addEventListener('click', function() {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
});

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
