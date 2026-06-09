/* Custom Cursor Effect */
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 991) return;

    const cursor = document.querySelector('.custom-cursor__cursor');
    const cursorTwo = document.querySelector('.custom-cursor__cursor-two');
    if (!cursor || !cursorTwo) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let cursorTwoX = 0, cursorTwoY = 0;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursorTwoX += (mouseX - cursorTwoX) * 0.1;
        cursorTwoY += (mouseY - cursorTwoY) * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorTwo.style.left = cursorTwoX + 'px';
        cursorTwo.style.top = cursorTwoY + 'px';

        requestAnimationFrame(animate);
    }
    animate();

    const hoverElements = document.querySelectorAll('a, button, .thm-btn, .service-card, .project-card, .team-card, .blog-card');
    hoverElements.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            cursor.classList.add('hover');
            cursorTwo.classList.add('hover');
        });
        el.addEventListener('mouseleave', function () {
            cursor.classList.remove('hover');
            cursorTwo.classList.remove('hover');
        });
    });
});
