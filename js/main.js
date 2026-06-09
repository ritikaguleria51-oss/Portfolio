/* Main JavaScript */
document.addEventListener('DOMContentLoaded', function () {

  /* Sticky Header */
  const stickyHeader = document.getElementById('sticky-header');
  if (stickyHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        stickyHeader.classList.add('fixed');
      } else {
        stickyHeader.classList.remove('fixed');
      }
    });
  }

  /* Mobile Menu */
  const mobileToggler = document.querySelector('.mobile-nav-toggler');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBackdrop = document.querySelector('.menu-backdrop');
  const closeBtn = document.querySelector('.mobile-menu .close-btn');

  function openMenu() {
    mobileMenu.classList.add('active');
    menuBackdrop.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    menuBackdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  if (mobileToggler) mobileToggler.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  /* Mobile Submenu Toggle */
  document.querySelectorAll('.mobile-menu .menu-item-has-children > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const subMenu = this.nextElementSibling;
      if (subMenu) {
        subMenu.classList.toggle('active');
      }
    });
  });

  /* Scroll to Top */
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Portfolio Filter */
  const filterBtns = document.querySelectorAll('.portfolio-filter button');
  const projectItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          item.classList.add('fade-in');
          setTimeout(function () { item.classList.add('visible'); }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* Testimonial Slider (Swiper) */
  if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-slider')) {
    new Swiper('.testimonial-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  /* Contact Form */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      setTimeout(function () {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = '#28a745';
        contactForm.reset();
        setTimeout(function () {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  /* Active Nav Link */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navigation a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.parentElement.classList.add('active');
      const parent = link.closest('.sub-menu');
      if (parent) {
        parent.parentElement.classList.add('active');
      }
    }
  });
});











// 3rd party email attach 



document.addEventListener("DOMContentLoaded", function () {

    // EmailJS Initialize
    emailjs.init({
        publicKey: "A-o705r6yrJIbcZhL"
    });

    // Form Submit
    document.getElementById("contact-form").addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_3qri82i",
            "template_m0jx3eh",
            this
        )
        .then(function () {
            alert("Message Sent Successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message!");
        });

    });

});
