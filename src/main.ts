/**
 * Hundaol Worku - Professional Portfolio
 * Master TS/JS Controller (Pure Vanilla modern interactions)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile burger navigation toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    
    // Close mobile nav when clicking on background or outside
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (
        navLinks.classList.contains('mobile-open') && 
        !navLinks.contains(target) && 
        !menuToggle.contains(target)
      ) {
        navLinks.classList.remove('mobile-open');
      }
    });
  }

  // 2. Active URL Nav highlighter
  const currentPath = window.location.pathname;
  const navElements = document.querySelectorAll('.nav-link');
  
  navElements.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const isHome = href === 'index.html';
      const pathEndsWithHref = currentPath.endsWith(href);
      const isPathRootOrHome = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/');
      
      if (pathEndsWithHref || (isHome && isPathRootOrHome)) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    }
  });

  // 3. Dynamic skills category filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  
  if (filterButtons.length > 0 && skillCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active visual states on filters
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        if (!filterValue) return;
        
        skillCards.forEach(card => {
          const category = card.getAttribute('data-category');
          const element = card as HTMLElement;
          
          if (filterValue === 'all' || category === filterValue) {
            element.classList.remove('filtered-out');
            // Mini fade animation trigger
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            setTimeout(() => {
              element.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, 30);
          } else {
            element.classList.add('filtered-out');
          }
        });
      });
    });
  }

  // 4. Secure client-side Contact Form handling
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  const formNotification = document.getElementById('form-notification');
  const resetFormBtn = document.getElementById('reset-form-btn');
  
  if (contactForm && formNotification) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate API submit logic
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }
      
      // Log submission details securely in non-prod console
      console.log('Form message received:', { name, email, subject, message });
      
      // Toggle glass visual success overlay
      formNotification.style.display = 'flex';
      contactForm.reset();
    });
  }
  
  if (resetFormBtn && formNotification) {
    resetFormBtn.addEventListener('click', () => {
      formNotification.style.display = 'none';
    });
  }
  
  // 5. Scroll reveal animation utilities
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const revealCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
        revealObserver.unobserve(target);
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, observerOptions);
  
  // Apply visual trigger points to sections or big elements
  const revealElements = document.querySelectorAll('.animate-on-scroll');
  revealElements.forEach(element => {
    const el = element as HTMLElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    revealObserver.observe(el);
  });
});
