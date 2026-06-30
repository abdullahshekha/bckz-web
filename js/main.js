/* =============================================
   BAHRIA COLLEGE KARSAZ — MAIN JS
   ============================================= */

const TOUR_VIDEO_ID = 'bFrxx4GZCA0';

// News data for popup modals
const NEWS_DATA = [
    {
        tag:   'Achievement',
        title: 'Top 7 Positions in Science Group — Karachi Board 2025',
        date:  'January 2026',
        body:  `<p>Bahria College Karsaz students achieved outstanding results in the Karachi Board annual examinations, securing 7 top positions in the Science Group.</p>
                <p>This remarkable achievement is a testament to the dedication of our students and the unwavering commitment of our faculty. BCKz continues its proud tradition of academic excellence with consistent board-level results year after year.</p>
                <p>We congratulate all the achievers and their families on this milestone.</p>`
    },
    {
        tag:   'Academics',
        title: 'Annual Examination Results — HSC II Pre-Medical',
        date:  'January 2026',
        body:  `<p>The annual examination results for HSC II Pre-Medical have been announced. BCKz students have once again demonstrated exceptional performance across the board.</p>
                <p>Students may collect their detailed result sheets from the respective wing administration offices during office hours. For any queries regarding results, please contact the examination department.</p>
                <p>Congratulations to all students and the faculty of the Pre-Medical stream.</p>`
    },
    {
        tag:   'Admissions',
        title: 'Admissions Open — HSSC, O-Level & A-Level Session 2026',
        date:  'April 2026',
        body:  `<p>Admissions are now open for the academic session 2026 across all higher secondary programmes including HSSC (Pre-Medical, Pre-Engineering, Computer Science, Commerce, Humanities) as well as O-Level and A-Level under the Cambridge International curriculum.</p>
                <p><strong>Eligibility:</strong> Minimum 65% marks in Matric / 70% aggregate for O-Level stream.</p>
                <p><strong>Selection Criteria:</strong> 60% weightage for Class IX percentage + 40% for entrance test performance.</p>
                <p>Admissions are announced through national newspapers and our official social media channels. Limited seats are available — apply early to secure your place.</p>
                <p>Visit the Admissions page or contact the college reception for further information and application forms.</p>`
    },
    {
        tag:   'Achievement',
        title: 'Congratulations to our Board Position Holders 2025',
        date:  'January 2026',
        body:  `<p>Bahria College Karsaz proudly congratulates all students who secured board positions in the 2025 annual examinations across Federal Board and Karachi Board.</p>
                <p>This year's position holders have brought great honour to the institution, their families, and the Pakistan Navy. BCKz has been recognised as the Best Bahria College for 12 years — a legacy our students continue to uphold.</p>
                <p>We wish all our position holders continued success in their academic and professional journeys.</p>`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLightbox();
    initNewsModal();
    initScrollAnimations();
    initDropdownMobile();
});

/* ---------- NAVBAR ---------- */
function initNavbar() {
    const header = document.getElementById('header');
    const toggle = document.getElementById('navToggle');
    const menu   = document.getElementById('navMenu');
    if (!header || !toggle || !menu) return;

    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 10
            ? '0 4px 30px rgba(0,0,128,0.18)'
            : '';
    }, { passive: true });

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && menu.classList.contains('open')) closeMobileMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMobileMenu();
            toggle.focus();
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
    document.querySelectorAll('.has-dropdown').forEach(item => {
        item.querySelector('.navbar__link').addEventListener('click', (e) => {
            if (window.innerWidth > 860) return;
            e.preventDefault();
            const isOpen = item.classList.toggle('open');
            item.closest('ul').querySelectorAll('.has-dropdown').forEach(sib => {
                if (sib !== item) sib.classList.remove('open');
            });
        });
    });
}

/* ---------- NEWS MODAL ---------- */
function initNewsModal() {
    const modal    = document.getElementById('newsModal');
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalClose');
    const tagEl    = document.getElementById('modalTag');
    const titleEl  = document.getElementById('modalTitle');
    const dateEl   = document.getElementById('modalDate');
    const bodyEl   = document.getElementById('modalBody');

    if (!modal) return;

    function openModal(index) {
        const item = NEWS_DATA[index];
        if (!item) return;
        tagEl.textContent   = item.tag;
        titleEl.textContent = item.title;
        dateEl.textContent  = item.date;
        bodyEl.innerHTML    = item.body;
        modal.hidden        = false;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = '';
    }

    // Ticker buttons on hero
    document.querySelectorAll('.hero__ticker-item').forEach(btn => {
        btn.addEventListener('click', () => openModal(Number(btn.dataset.news)));
    });

    // News card "Read More" buttons
    document.querySelectorAll('.news-card__link[data-news]').forEach(btn => {
        btn.addEventListener('click', () => openModal(Number(btn.dataset.news)));
    });

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
}

/* ---------- VIDEO LIGHTBOX ---------- */
function initLightbox() {
    const tourBtn  = document.getElementById('tourBtn');
    const lightbox = document.getElementById('lightbox');
    const backdrop = document.getElementById('lightboxBackdrop');
    const closeBtn = document.getElementById('lightboxClose');
    const iframe   = document.getElementById('lightboxIframe');
    if (!tourBtn || !lightbox) return;

    const src = `https://www.youtube.com/embed/${TOUR_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

    tourBtn.addEventListener('click', () => {
        iframe.src = src;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    });

    function close() {
        lightbox.hidden = true;
        iframe.src = '';
        document.body.style.overflow = '';
        tourBtn.focus();
    }

    backdrop.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.hidden) close();
    });
}

/* ---------- SCROLL ANIMATIONS ---------- */
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    elements.forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(22px)';
        el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const siblings = [...entry.target.parentElement.querySelectorAll('[data-aos]')];
            const delay    = Math.min(siblings.indexOf(entry.target) * 80, 480);
            setTimeout(() => {
                entry.target.style.opacity   = '1';
                entry.target.style.transform = 'translateY(0)';
            }, delay);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}
