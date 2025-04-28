document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const progressBar = document.querySelector('.progress');
    let progress = 0;

    // Simulate loading progress
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            // Wait a bit after full progress before hiding loader
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 300);
        }
    }, 100); // Adjust interval timing as needed

    // Fallback in case the interval doesn't finish or takes too long
    window.addEventListener('load', () => {
        clearInterval(interval); // Clear interval if load event fires first
        progressBar.style.width = '100%'; // Ensure progress is full
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 300); // Ensure loader hides even if interval was cleared early
    });

    // Smooth scroll for anchor links (if any added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            try {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            } catch (error) {
                console.error('Error scrolling to element:', error);
            }
        });
    });

    // Add actual links (replace # with real URLs)
    const socialLinks = {
        whatsapp: 'https://wa.me/SEUNUMERO', // Substitua SEUNUMERO pelo número de WhatsApp
        quote: 'https://wa.me/SEUNUMERO?text=Olá,%20gostaria%20de%20um%20orçamento.', // Link para orçamento rápido
        instagram: 'https://www.instagram.com/SEUINSTAGRAM', // Substitua SEUINSTAGRAM pelo perfil
        tiktok: 'https://www.tiktok.com/@SEUTIKTOK' // Substitua SEUTIKTOK pelo perfil
    };

    document.querySelector('.social-link.whatsapp').href = socialLinks.whatsapp;
    document.querySelector('.social-link.quote').href = socialLinks.quote;
    document.querySelector('.social-link.instagram').href = socialLinks.instagram;
    document.querySelector('.social-link.tiktok').href = socialLinks.tiktok;

});

