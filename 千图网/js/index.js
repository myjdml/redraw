let viewHeight =document.documentElement.clientHeight;//获取可视区高度
function inSight(el) {
    return el.getBoundingClientRect().top < viewHeight;
}
function loadImg(el) {
    if (el.src) {
        el.src = el.dataset.original;
    }
}
function checkImgs() {
    const imgs = document.querySelectorAll('.main_foot_ul_img');
    Array.from(imgs).forEach(el => {
        if (inSight(el)) {
            loadImg(el);
        }
    })
}
window.addEventListener('scroll', checkImgs, false);
window.onload = checkImgs;

//回到顶部
let back = document.querySelector('.toTop');
back.addEventListener('click', () => document.documentElement.scrollTop = 0);
