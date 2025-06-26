// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-text, .program-card, .science-feature, .facility-card, .contact-info, .contact-form');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form submission handler
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const program = this.querySelectorAll('select')[0].value;
    const level = this.querySelectorAll('select')[1].value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !phone || !program || !level) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you ${name}!\n\nYour performance assessment has been booked.\n\nProgram: ${program}\nLevel: ${level}\n\nWe'll contact you within 24 hours to schedule your consultation.\n\nYour €150 assessment fee will be credited towards your first month's program.`);
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Event registration handlers
document.querySelectorAll('.event-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const eventCard = this.closest('.event-card');
        const eventTitle = eventCard.querySelector('h3').textContent;
        
        const originalText = this.textContent;
        this.textContent = 'Registering...';
        this.disabled = true;
        
        setTimeout(() => {
            alert(`You've been registered for: ${eventTitle}\n\nYou'll receive a confirmation email shortly.`);
            this.textContent = 'Registered ✓';
            this.style.background = '#22c55e';
            this.style.color = 'white';
        }, 1500);
    });
});

// Program learn more handlers
document.querySelectorAll('.program-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const programCard = this.closest('.program-card');
        const programTitle = programCard.querySelector('h3').textContent;
        const isPremium = programCard.classList.contains('premium');
        
        if (isPremium) {
            alert(`Complete Performance System - Our Premium Program:\n\n• Comprehensive multi-sport training\n• Personal performance scientist\n• 24/7 biometric monitoring\n• Exclusive access to all facilities\n• Priority booking and support\n\nStarting at €799/month\n\nBook your consultation to learn more!`);
        } else {
            alert(`${programTitle} Program Details:\n\n• Scientific approach with measurable results\n• State-of-the-art equipment and facilities\n• Personalized training protocols\n• Regular progress assessments\n• Exclusive to Baltic States\n\nContact us for detailed program information and pricing.`);
        }
    });
});

// Join Now button handler
document.querySelector('.join-btn').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Hero buttons handlers
document.querySelector('.btn-primary').addEventListener('click', function() {
    document.querySelector('#programs').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.btn-secondary').addEventListener('click', function() {
    document.querySelector('#science').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add some dynamic stats animation
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    const targets = [98, 'Only', 15]; // Target numbers/text
    const suffixes = ['%', '', ''];
    
    stats.forEach((stat, index) => {
        if (typeof targets[index] === 'number') {
            let current = 0;
            const target = targets[index];
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffixes[index];
            }, 50);
        } else {
            stat.textContent = targets[index];
        }
    });
}

// Trigger stats animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateStats, 1000);
            heroObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading state simulation
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});

// Add initial loading class
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
});
