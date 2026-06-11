/**
 * Hundaol Worku - Professional Portfolio
 * Master TS/JS Controller (Pure Vanilla modern interactions)
 */

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  // Active state tester helper
  function isLinkActive(href: string): boolean {
    const isHome = href === 'index.html';
    const pathEndsWithHref = currentPath.endsWith(href);
    const isPathRootOrHome = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/');
    return pathEndsWithHref || (isHome && isPathRootOrHome);
  }

  // ==========================================
  // 1. Programmatic Mobile Sidebar Drawer Setup
  // ==========================================
  const sidebarBackdrop = document.createElement('div');
  sidebarBackdrop.className = 'mobile-sidebar-backdrop';
  sidebarBackdrop.id = 'mobile-sidebar-backdrop';
  
  const sidebar = document.createElement('div');
  sidebar.className = 'mobile-sidebar';
  sidebar.id = 'mobile-sidebar';
  
  sidebar.innerHTML = `
    <div class="mobile-sidebar-header">
      <a href="index.html" class="logo-badge">HW</a>
      <button class="mobile-sidebar-close" id="mobile-sidebar-close" aria-label="Close menu">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="mobile-sidebar-body">
      <nav class="mobile-sidebar-links">
        <a href="index.html" class="mobile-sidebar-link ${isLinkActive('index.html') ? 'active' : ''}">Home</a>
        <a href="about.html" class="mobile-sidebar-link ${isLinkActive('about.html') ? 'active' : ''}">About</a>
        <a href="skills.html" class="mobile-sidebar-link ${isLinkActive('skills.html') ? 'active' : ''}">Skills</a>
        <a href="projects.html" class="mobile-sidebar-link ${isLinkActive('projects.html') ? 'active' : ''}">Projects</a>
        <a href="resume.html" class="mobile-sidebar-link ${isLinkActive('resume.html') ? 'active' : ''}">Resume</a>
        <a href="contact.html" class="mobile-sidebar-link ${isLinkActive('contact.html') ? 'active' : ''}">Contact</a>
      </nav>
    </div>
    <div class="mobile-sidebar-footer">
      <div class="mobile-sidebar-socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <span class="sidebar-social-dot">•</span>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="Telegram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.13 2.82a1.6 1.6 0 0 0-1.63-.12L2.43 11a1.6 1.6 0 0 0-.11 2.92l5.12 2a1.6 1.6 0 0 0 1.25-.13l10.9-7a.4.4 0 0 1 .45.66l-8.6 8.3a1.6 1.6 0 0 0-.4 1.77l2.22 5.1a1.6 1.6 0 0 0 2.94-.35L21.82 4.4a1.6 1.6 0 0 0-.69-1.58z"></path></svg>
        </a>
        <span class="sidebar-social-dot">•</span>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        </a>
        <span class="sidebar-social-dot">•</span>
        <a href="mailto:hundaolworku1949@gmail.com" class="text-slate-400 hover:text-white transition-colors" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        </a>
      </div>
    </div>
  `;
  
  document.body.appendChild(sidebarBackdrop);
  document.body.appendChild(sidebar);

  const menuToggle = document.getElementById('menu-toggle');
  
  function openSidebar() {
    sidebar.classList.add('active');
    sidebarBackdrop.classList.add('active');
    menuToggle?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarBackdrop.classList.remove('active');
    menuToggle?.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = sidebar.classList.contains('active');
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  
  sidebarBackdrop.addEventListener('click', closeSidebar);
  
  const sidebarCloseBtn = document.getElementById('mobile-sidebar-close');
  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeSidebar);
  }

  // ==========================================
  // 1.5 Touch Swipe Navigation Handler
  // ==========================================
  let touchStartX = 0;
  let touchStartY = 0;
  const minSwipeDistance = 50;
  const maxVerticalOffset = 100; // Screen swipe vertical lock
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });
  
  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);
    
    // Horizontal swipe filtering (prevent vertical scroll noise interference)
    if (deltaY < maxVerticalOffset) {
      if (deltaX < -minSwipeDistance && !sidebar.classList.contains('active')) {
        // Swipe right-to-left (moving left) -> Open sidebar from right
        openSidebar();
      } else if (deltaX > minSwipeDistance && sidebar.classList.contains('active')) {
        // Swipe left-to-right (moving right) -> Close sidebar of right side
        closeSidebar();
      }
    }
  }, { passive: true });

  // ==========================================
  // 2. Active URL Nav Highlighter (Desktop View)
  // ==========================================
  const navElements = document.querySelectorAll('.nav-link');
  
  navElements.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      if (isLinkActive(href)) {
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

  // ==========================================
  // 6. Premium Translucent Modal Popup Engine
  // ==========================================

  // Project Specifications Dataset
  const projectsData: Record<string, {
    title: string;
    category: string;
    description: string;
    built: string;
    technologies: string[];
    role: string;
    repo: string;
  }> = {
    'project-1': {
      title: 'Algonexus Traffic Router',
      category: 'Algorithm',
      description: 'An optimized back-pressure routing engine designed to manage server load balances and network traffic queues across cluster nodes.',
      built: 'Built with dynamic load balancing logic utilizing Go channels and priority buffers. Employs low-overhead telemetry systems to monitor buffer queue lengths, caching active routing decisions in Redis pools.',
      technologies: ['Go Language', 'Python', 'SQLite', 'Redis', 'gRPC', 'Protobuf'],
      role: 'Lead Systems Developer — designed the work-stealing scheduling thread pool and implemented protocol buffer streams.',
      repo: 'https://github.com/hundaol/algonexus-router'
    },
    'project-2': {
      title: 'NovaGlass Core Engine',
      category: 'Frontend UI',
      description: 'A premium layout library specializing in backdrop blurring ratios, custom styles variables, and fluid Apple-style animations.',
      built: 'Developed with pure vanilla ES6+ modern scripts utilizing layout triggers, hardware rasterization, and CSS custom variables to achieve zero-flicker premium translucent glass layers.',
      technologies: ['HTML5', 'CSS3', 'ES6+ JS', 'TypeScript', 'WebGL3D'],
      role: 'UI/UX & Frontend Developer — coded the spring coordinate interpolation models and formulated custom blur variables.',
      repo: 'https://github.com/hundaol/novaglass-engine'
    },
    'project-3': {
      title: 'ASTU Campus Connect Hub',
      category: 'Realtime Platform',
      description: 'A real-time visual micro-platform designed for students to synchronize study notes, coordinate projects, and broadcast club schedules.',
      built: 'Engineered on express routers, managing concurrent communication sockets under 40ms payload thresholds. Tracks real-time active study teams through indexed table queries.',
      technologies: ['Node.js', 'Express', 'Socket.IO', 'SQLite', 'TailwindCSS'],
      role: 'Full-Stack Developer — constructed system routing algorithms and developed real-time chat sync pools.',
      repo: 'https://github.com/hundaol/astu-connect'
    },
    'project-4': {
      title: 'Synthetix Voice UI Console',
      category: 'Signal DSP',
      description: 'An interactive synthesizer parsing microphone streams to visual canvas frequency nodes through local WebAudio pipelines.',
      built: 'Employs Fast Fourier Transforms (FFT) on active user sound vectors, generating low-latency interactive spectrum layouts on solid HTML5 canvas contexts.',
      technologies: ['TypeScript', 'WebAudio GL', 'HTML5 Canvas', 'Modern CSS'],
      role: 'DSP Engineer — coded speech analysis filters and mapped visual sound waves coordinate graphs.',
      repo: 'https://github.com/hundaol/synthetix-voice'
    },
    'project-5': {
      title: 'VelociDB Store Engine',
      category: 'Database Dev',
      description: 'A transactional key-value server writing directly to disk nodes utilizing highly efficient binary tree index protocols.',
      built: 'Written inside Rust constraints for core thread-safety. Implements transactional atomicity logs, directory flush routines, and transactional read-write thread locks.',
      technologies: ['Rust', 'POSIX IO', 'Systems Design', 'B-Tree Models'],
      role: 'Core Contributor — coded disk scheduling routines and binary tree key routing logic.',
      repo: 'https://github.com/hundaol/velocidb-engine'
    },
    'project-6': {
      title: 'HoloDesk Canvas Matrix',
      category: 'Interactive App',
      description: 'An online vector board where remote collaborators can draw elements simultaneously with real-time state broadcasts.',
      built: 'Handles dynamic touch track loops, transmitting relative brush stroke geometries over atomic WebSocket chunks to connected sessions.',
      technologies: ['HTML5 Canvas', 'WebSockets', 'Express', 'Node.js'],
      role: 'Graphics & Collaboration Lead — defined vector serialization schemas and built vector line rendering routines.',
      repo: 'https://github.com/hundaol/holodesk-matrix'
    },
    'project-7': {
      title: 'Orion API Middleware Gateway',
      category: 'DevOps / Server',
      description: 'An API gateway that aggregates multiple backend streams, parses secure JWT claims, and enforces dynamic client call-rate thresholds.',
      built: 'Configured on non-blocking reverse proxies, filtering and validating secure user web tokens, caching routing tables, and enforcing dynamic client requests rate logs.',
      technologies: ['Express', 'Docker', 'Redis Cache', 'POSIX routing APIs'],
      role: 'DevOps & Integration Developer — constructed automated Docker orchestration scripts and configured token bucket rate limits.',
      repo: 'https://github.com/hundaol/orion-gateway'
    },
    'project-8': {
      title: 'Aura Health Planner App',
      category: 'UX Design',
      description: 'A full design wireframe, typography system, and click-prototype for a state-monitoring app managing personal daily wellness logs.',
      built: 'Constructed completely inside Figma, utilizing dynamic responsive layout grids, dark/glass visual tokens, and unified interactive preview transitions.',
      technologies: ['Figma Layouts', 'Interactive Flow', 'SVG Vectors', 'UI/UX Design Systems'],
      role: 'Interface Designer — researched user travel models and formulated original asset libraries.',
      repo: 'https://github.com/hundaol/aura-planner-design'
    }
  };

  // Academic Credentials Dataset
  const credentialsData: Record<string, {
    title: string;
    period: string;
    verificationCode: string;
  }> = {
    'grade-11-12-c1': {
      title: 'Preparatory School Leaving Certificate',
      period: 'Completed in 2020',
      verificationCode: 'MATH-PREP-2020-08B'
    },
    'grade-11-12-c2': {
      title: 'STEM Academic Honors Certificate',
      period: 'Completed in 2020',
      verificationCode: 'STEM-PREP-2020-11C'
    },
    'grade-9-10-c1': {
      title: 'General Secondary Education Certificate',
      period: 'Completed in 2018',
      verificationCode: 'SEC-GRAD-2018-02A'
    },
    'grade-9-10-c2': {
      title: 'Computer Studies Achievement Certificate',
      period: 'Completed in 2018',
      verificationCode: 'SEC-COMP-2018-05D'
    },
    'grade-8-c1': {
      title: 'Primary Education Leaving Certificate',
      period: 'Completed in 2016',
      verificationCode: 'PRIM-GRAD-2016-01F'
    }
  };

  // Resume Document Simulated HTML template
  const resumePreviewHTML = `
    <div class="modal-resume-container" style="color: #f1f5f9; padding: 12px 4px;">
      <header class="resume-header" style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 24px;">
        <h2 class="resume-name" style="font-size: 1.85rem; font-weight: 700; color: #fff; letter-spacing: -0.025em; margin-bottom: 4px;">Hundaol Worku</h2>
        <div class="resume-subtitle-text" style="font-family: var(--font-mono); font-size: 0.8rem; color: #10b981; letter-spacing: 0.1em; font-weight: 500;">SOFTWARE DEVELOPER</div>
        <div class="resume-contacts-row" style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 8px; font-size: 0.75rem; color: #94a3b8;">
          <span>hundaolworku1949@gmail.com</span>
          <span>•</span>
          <span>Adama, Ethiopia</span>
          <span>•</span>
          <span>github.com/hundaol</span>
        </div>
      </header>
      
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Education Background</h3>
          <div class="resume-item-wrap">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Adama Science and Technology University (ASTU)</span>
              <span>2021 — Present</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">B.Sc. in Software Engineering (5th Year Student, Graduating in 6th Year / 2027)</div>
            <p class="resume-bullet" style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.5;">Selected Coursework: Operating Systems, Advanced Algorithms, HCI layouts, Database Design. Active Lead Student Developer at ASTU SE Club.</p>
          </div>
        </div>

        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Professional Experience</h3>
          
          <div class="resume-item-wrap" style="margin-bottom: 12px;">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Lead Student Developer — ASTU SE Club</span>
              <span>2025 — Present</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">Collaborative Development Lead</div>
            <p class="resume-bullet" style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.5;">Guiding on-campus team projects setup, modular stylesheets standardizing, and semantic markup structures.</p>
          </div>

          <div class="resume-item-wrap">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Software Engineering Intern — TechCorp Innovations</span>
              <span>July 2025 — Sept 2025</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">Operations Development Intern</div>
            <p class="resume-bullet" style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.5;">Refactored database query routing maps, resulting in 22% latency reductions on local testing beds.</p>
          </div>
        </div>

        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Technical Skillsets</h3>
          <div class="resume-skills-block" style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;">
            <span class="resume-skill-pill" style="font-size: 0.7rem; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 99px;">TypeScript</span>
            <span class="resume-skill-pill" style="font-size: 0.7rem; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 99px;">Go Language</span>
            <span class="resume-skill-pill" style="font-size: 0.7rem; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 99px;">Node.js</span>
            <span class="resume-skill-pill" style="font-size: 0.7rem; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 99px;">SQL Database</span>
            <span class="resume-skill-pill" style="font-size: 0.7rem; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 99px;">HTML5 & CSS3</span>
            <span class="resume-skill-pill" style="font-size: 0.7rem; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 99px;">Docker</span>
            <span class="resume-skill-pill" style="font-size: 0.7rem; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.15); padding: 2px 8px; border-radius: 99px;">UI/UX Figma</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Standard Reusable Modal Popup Controller
  function createAndShowModal(htmlContent: string) {
    // Backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'modal-backdrop';
    
    // Modal card box container
    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box';
    backdrop.appendChild(modalBox);
    
    // Closer Button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.ariaLabel = 'Close modal dialog';
    closeBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      destroyModal(backdrop);
    });
    modalBox.appendChild(closeBtn);
    
    // Custom body scroll content wrapper
    const contentScroll = document.createElement('div');
    contentScroll.className = 'modal-content-scroll';
    contentScroll.innerHTML = htmlContent;
    modalBox.appendChild(contentScroll);
    
    // Push into body tree
    document.body.appendChild(backdrop);
    
    // Lock original layout body scrolling
    document.body.style.overflow = 'hidden';
    
    // Trigger CSS state fadein
    setTimeout(() => {
      backdrop.classList.add('visible');
    }, 15);
    
    // Closer by clicking direct backdrop focus
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        destroyModal(backdrop);
      }
    });

    // Close on escape key
    const escListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        destroyModal(backdrop);
        document.removeEventListener('keydown', escListener);
      }
    };
    document.addEventListener('keydown', escListener);
  }

  function destroyModal(backdrop: HTMLElement) {
    backdrop.classList.remove('visible');
    backdrop.classList.add('fade-out');
    setTimeout(() => {
      backdrop.remove();
      document.body.style.overflow = '';
    }, 300);
  }

  // ==========================================
  // 7. Event Delegation & Project Modals Bind
  // ==========================================

  // Project cards trigger delegation
  const displayGrid = document.getElementById('projects-display-grid');
  if (displayGrid) {
    displayGrid.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Check if button clicked or if card clicked
      const detailsBtn = target.closest('.btn-project-details');
      const projectCard = target.closest('.project-card');
      
      if (detailsBtn || (projectCard && !target.closest('a'))) {
        const activeItem = detailsBtn || projectCard;
        if (!activeItem) return;
        
        const projId = activeItem.getAttribute('data-project') || activeItem.getAttribute('data-project-id');
        if (!projId || !projectsData[projId]) return;
        
        const data = projectsData[projId];
        
        // Assemble beautiful project specifications HTML content
        const projectHtml = `
          <div class="project-modal-wrapper" style="color: #cbd5e1;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px; padding-right: 48px;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #10b981; font-weight: 600;">${data.category} Specification</span>
              <span style="font-size: 0.75rem; color: #64748b; font-family: var(--font-mono);">${projId}</span>
            </div>
            
            <h2 style="font-size: 1.6rem; color: #fff; font-weight: 700; letter-spacing: -0.025em; margin-bottom: 12px; padding-right: 48px;">${data.title}</h2>
            
            <p style="color: #f1f5f9; font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">${data.description}</p>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <h4 style="color: #fff; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">How it was Built</h4>
              <p style="font-size: 0.85rem; line-height: 1.5; color: #94a3b8;">${data.built}</p>
            </div>
            
            <div style="margin-bottom: 16px;">
              <h4 style="color: #fff; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">My Role & Purpose</h4>
              <p style="font-size: 0.85rem; line-height: 1.5; color: #94a3b8; font-style: italic;">${data.role}</p>
            </div>

            <div style="margin-bottom: 24px;">
              <h4 style="color: #fff; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Technologies Stack</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${data.technologies.map(lang => `<span style="font-size: 0.72rem; font-family: var(--font-mono); background: rgba(255,255,255,0.04); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;">${lang}</span>`).join('')}
              </div>
            </div>
            
            <div style="display: flex; gap: 12px; margin-top: 12px;">
              <a href="${data.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; justify-content: center; font-size: 0.85rem;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                View Repository
              </a>
            </div>
          </div>
        `;
        
        createAndShowModal(projectHtml);
      }
    });
  }

  // Credentials View Triggering
  const credentialsGroup = document.getElementById('edu-composite-block');
  if (credentialsGroup) {
    credentialsGroup.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const credBtn = target.closest('.btn-view-credential');
      if (credBtn) {
        const credId = credBtn.getAttribute('data-cred');
        if (!credId || !credentialsData[credId]) return;
        
        const data = credentialsData[credId];
        const credHtml = `
          <div class="certified-image-placeholder-modal" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
            <div class="digital-certificate-card" style="width: 100%; border: 2px solid rgba(20, 184, 166, 0.3); border-radius: 12px; padding: 36px 24px; background: linear-gradient(135deg, rgba(8, 10, 15, 0.98), rgba(18, 22, 32, 0.98)); text-align: center; position: relative; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
              <div style="position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle, rgba(20, 184, 166, 1) 1px, transparent 1px); background-size: 16px 16px; pointer-events: none;"></div>
              <div style="position: absolute; top: 12px; bottom: 12px; left: 12px; right: 12px; border: 1px solid rgba(20, 184, 166, 0.1); border-radius: 8px; pointer-events: none;"></div>
              
              <div style="display: flex; justify-content: center; margin-bottom: 24px;">
                <div style="background: rgba(20, 184, 166, 0.12); border: 2.5px solid rgba(20, 184, 166, 0.3); border-radius: 50%; width: 68px; height: 68px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px); box-shadow: 0 8px 24px rgba(20, 184, 166, 0.15);">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 11 11 13 15 9"></polyline>
                  </svg>
                </div>
              </div>

              <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #14b8a6; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; display: inline-block; margin-bottom: 8px; font-variant-numeric: tabular-nums;">SECURE ACADEMIC CREDENTIAL</span>
              <h2 style="font-size: 1.4rem; color: #fff; font-weight: 800; letter-spacing: -0.015em; margin-bottom: 12px; line-height: 1.3; padding-right: 32px;">${data.title}</h2>
              
              <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.2), transparent); width: 75%; margin: 16px auto;"></div>
              
              <p style="font-size: 0.75rem; color: #94a3b8; font-family: var(--font-sans); margin-bottom: 4px;">is officially conferred upon and verified of</p>
              <h3 style="font-weight: 700; color: #fff; font-size: 1.2rem; tracking-tight; margin-bottom: 16px;">Hundaol Worku</h3>
              
              <p style="font-size: 0.8rem; line-height: 1.6; color: #cbd5e1; max-width: 440px; margin: 0 auto 20px;">for completion of the certified standard milestones with top academic ratings.</p>
              
              <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 10px 14px; display: inline-block; margin-bottom: 24px;">
                <span style="font-size: 0.7rem; font-family: var(--font-mono); color: #64748b; display: block; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px;">Verification Hash</span>
                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: #14b8a6; font-weight: 600;">${data.verificationCode}</span>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); max-width: 400px; margin: 0 auto;">
                <div style="text-align: left;">
                  <span style="display: block; font-size: 0.65rem; color: #64748b; font-family: var(--font-mono); text-transform: uppercase;">DATE OF LEAVING</span>
                  <span style="display: block; font-size: 0.75rem; color: #cbd5e1; font-weight: 600;">${data.period}</span>
                </div>
                <div style="text-align: right;">
                  <span style="display: inline-block; font-size: 0.65rem; border: 1.5px solid rgba(20, 184, 166, 0.4); color: #14b8a6; padding: 4px 10px; border-radius: 6px; font-family: var(--font-mono); font-weight: 700; transform: rotate(-3deg); text-transform: uppercase;">CERTIFIED VERIFICATION</span>
                </div>
              </div>
            </div>
          </div>
        `;
        
        createAndShowModal(credHtml);
      }
    });
  }

  // Resume PDF Preview Modal Triggering
  const previewResumeBtn = document.getElementById('btn-preview-resume');
  if (previewResumeBtn) {
    previewResumeBtn.addEventListener('click', () => {
      createAndShowModal(resumePreviewHTML);
    });
  }
});
