/* Preloader */
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader-wrap');
    if (!loader) return;

    window.addEventListener('load', function () {
        setTimeout(function () {
            loader.classList.add('loaded');
            document.body.classList.remove('no-scroll');
        }, 1500);
    });
});
