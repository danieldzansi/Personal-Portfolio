// Hamburger menu functionality for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// Smooth scrolling for navigation links and buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;

darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Typing animation for hero section
const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;
const typedRole = document.getElementById('typed-role');

function typeRole() {
    if (!typedRole) return;
    const currentRole = roles[roleIndex];
    if (typingForward) {
        charIndex++;
        if (charIndex > currentRole.length) {
            typingForward = false;
            setTimeout(typeRole, 1200);
            return;
        }
    } else {
        charIndex--;
        if (charIndex === 0) {
            typingForward = true;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 400);
            return;
        }
    }
    typedRole.textContent = currentRole.substring(0, charIndex);
    setTimeout(typeRole, typingForward ? 90 : 40);
}

document.addEventListener('DOMContentLoaded', typeRole);

// Optional: AJAX for Formspree (no redirect, show message)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (err) {
            alert('Failed to send message. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

// Smooth Scroll for 'Hire Me' Button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});