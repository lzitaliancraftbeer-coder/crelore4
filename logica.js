document.addEventListener('DOMContentLoaded', () => {
    
    // --- Gestione Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Impedisce lo scroll quando il menu è aperto
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    };

    hamburger.addEventListener('click', toggleMenu);

    // Chiude il menu quando si clicca su un link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- Animazioni allo Scroll (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Progress Bar e Effetto Navbar al Scroll ---
    const scrollBar = document.getElementById('scroll-bar');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const widthPercent = (scrollTop / docHeight) * 100;
        
        scrollBar.style.width = widthPercent + "%";

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Simulazione Invio Form ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const originalText = btn.innerText;

            btn.innerText = "Invio in corso...";
            btn.disabled = true;

            // Simulazione ritardo di rete
            setTimeout(() => {
                btn.innerText = "Richiesta Inviata!";
                btn.style.background = "var(--accent)";
                this.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.background = "var(--primary)";
                }, 3000);
            }, 1500);
        });
    }
});
