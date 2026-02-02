document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Progress Bar Logic
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });

    // 2. Intersection Observer for Fade-in Animations
    // This makes elements gently float up as you scroll down
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Back to Top Button Logic
    const backToTopBtn = document.getElementById('backToTop');
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
