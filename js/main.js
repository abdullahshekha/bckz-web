/* =============================================
   BAHRIA COLLEGE KARSAZ — MAIN JS
   ============================================= */

const TOUR_VIDEO_ID = 'bFrxx4GZCA0';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLightbox();
    initScrollAnimations();
    initDropdownMobile();
});

/* ---------- NAVBAR ---------- */
function initNavbar() {
    const header    = document.getElementById('header');
    const toggle    = document.getElementById('navToggle');
    const menu      = document.getElementById('navMenu');

    if (!header || !toggle || !menu) return;

    // Sticky shadow on scroll (already sticky via CSS, just enhance shadow)
    const onScroll = () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,128,0.18)';
        } else {
            header.style.boxShadow = '';
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && menu.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMobileMenu();
            toggle.focus();
        }
    });

    // Active link highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    menu.querySelectorAll('.navbar__link').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    function closeMobileMenu() {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

/* ---------- MOBILE DROPDOWNS ---------- */
function initDropdownMobile() {
    const isMobile = () => window.innerWidth <= 860;

    document.querySelectorAll('.has-dropdown').forEach(item => {
        const link = item.querySelector('.navbar__link');

        link.addEventListener('click', (e) => {
            if (!isMobile()) return;
            e.preventDefault();
            const isOpen = item.classList.toggle('open');
            // Close siblings
            item.closest('ul').querySelectorAll('.has-dropdown').forEach(sibling => {
                if (sibling !== item) sibling.classList.remove('open');
            });
        });
    });
}

/* ---------- LIGHTBOX (Virtual Campus Tour) ---------- */
function initLightbox() {
    const tourBtn   = document.getElementById('tourBtn');
    const lightbox  = document.getElementById('lightbox');
    const backdrop  = document.getElementById('lightboxBackdrop');
    const closeBtn  = document.getElementById('lightboxClose');
    const iframe    = document.getElementById('lightboxIframe');

    if (!tourBtn || !lightbox || !iframe) return;

    const tourSrc = `https://www.youtube.com/embed/${TOUR_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

    function openLightbox() {
        iframe.src = tourSrc;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        iframe.src = '';
        document.body.style.overflow = '';
        tourBtn.focus();
    }

    tourBtn.addEventListener('click', openLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
}

/* ---------- SCROLL ANIMATIONS ---------- */
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    // Initial styles
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stagger siblings inside the same grid
                const siblings = entry.target.parentElement.querySelectorAll('[data-aos]');
                const idx = Array.from(siblings).indexOf(entry.target);
                const delay = Math.min(idx * 80, 480);

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}
