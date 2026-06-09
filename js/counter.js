/* Counter Animation */
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-count'));
                const suffix = counter.getAttribute('data-suffix') || '';
                const isDecimal = target % 1 !== 0;
                const duration = 2000;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = eased * target;

                    counter.textContent = isDecimal
                        ? current.toFixed(1)
                        : Math.floor(current);

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = isDecimal ? target.toFixed(1) : target;
                    }
                }

                requestAnimationFrame(update);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
        observer.observe(counter);
    });
});
