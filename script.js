window.addEventListener('load', () => {
    const fadeInSections = document.querySelectorAll('.fade-in');
    fadeInSections.forEach(section => {
        section.style.animationDelay = `${Array.from(fadeInSections).indexOf(section) * 0.3}s`;
    });
});

const form = document.getElementById('iletisim-formu');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi!');
    form.reset();
});
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Linkin normal davranışını engelle
        
        const targetId = this.getAttribute('href').substring(1); // Hedef id'yi al
        const targetElement = document.getElementById(targetId); // Hedef elementi bul

        window.scrollTo({
            top: targetElement.offsetTop, // Hedefin üst kısmına kaydır
            behavior: 'smooth' // Yumuşak kaydırma
        });
    });
});
let currentSlide = 0;

const slides = document.querySelectorAll('.projeler-slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.projeler-slides');
    const offset = -index * 100; // Her slaytı tamamen sağa kaydırmak için
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Slaytları 3 saniyede bir otomatik olarak geçiş yapmak için
setInterval(nextSlide, 3000); // 3000ms = 3 saniye

// Sayfa yüklendiğinde ilk slaytı göster
window.addEventListener('load', () => {
    showSlide(currentSlide);
});

