/* ==========================================================================
   SOBOJINSKI SOLUTIONS - Main JavaScript
   Mid-Century Modern Interactive Elements
   ========================================================================== */

(function() {
  'use strict';

  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // --- Navbar scroll effect ---
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function handleNavScroll() {
    var currentScroll = window.pageYOffset;

    if (nav) {
      if (currentScroll > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // --- Scroll Reveal Animation ---
  function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;

    reveals.forEach(function(el) {
      var elementTop = el.getBoundingClientRect().top;
      var revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  // Trigger on load
  revealOnScroll();

  // --- Animated Counter for Stats ---
  function animateCounters() {
    var counters = document.querySelectorAll('.stat-number');

    counters.forEach(function(counter) {
      if (counter.dataset.animated) return;

      var rect = counter.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      counter.dataset.animated = 'true';
      var text = counter.textContent.trim();

      // Handle special cases
      if (text.includes('%') || text.includes('/') || text.includes('st') || text.includes('nd') || text.includes('rd') || text.includes('th')) {
        // Extract the number part
        var match = text.match(/(\d+)/);
        if (!match) return;

        var target = parseInt(match[1], 10);
        var suffix = text.replace(match[1], '');
        var start = 0;
        var duration = 1500;
        var startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease out cubic
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.floor(eased * target);

          // Reconstruct the text with suffix in correct position
          if (text.indexOf(match[1]) === 0) {
            counter.textContent = current + suffix;
          } else {
            counter.textContent = suffix.split(match[1])[0] + current + suffix.split(match[1])[1];
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            counter.textContent = text;
          }
        }

        requestAnimationFrame(step);
      }
    });
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 100; // Account for fixed nav
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Contact Form Handler ---
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      setTimeout(function() {
        submitBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2"/><path d="M6 9l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Message Sent!';
        submitBtn.style.background = 'var(--mcm-olive)';

        setTimeout(function() {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1500);
    });
  }

  // --- Parallax-lite for decorative elements ---
  function parallaxDecor() {
    var scrolled = window.pageYOffset;
    var decors = document.querySelectorAll('.atomic-decor');

    decors.forEach(function(decor, index) {
      var speed = 0.03 + (index * 0.01);
      var yPos = -(scrolled * speed);
      decor.style.transform = 'translateY(' + yPos + 'px)';
    });
  }

  // Only run parallax on larger screens
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', parallaxDecor, { passive: true });
  }

  // --- Starburst rotation on scroll ---
  function rotateStarbursts() {
    var scrolled = window.pageYOffset;
    var starbursts = document.querySelectorAll('.decor-starburst');

    starbursts.forEach(function(star) {
      star.style.transform = 'rotate(' + (scrolled * 0.05) + 'deg)';
    });
  }

  window.addEventListener('scroll', rotateStarbursts, { passive: true });

})();
