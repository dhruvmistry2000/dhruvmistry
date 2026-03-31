        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        dark: { DEFAULT: '#0a0a0f', navy: '#0d1117' },
                        accent: { green: '#00ff88', cyan: '#00d4ff' }
                    },
                    fontFamily: {
                        mono: ['HackNerdFont', 'Courier New', 'monospace'],
                        sans: ['HackNerdFont', 'Courier New', 'monospace']
                    }
                }
            }
        }

        // Typewriter effect
        const roles = ['DevOps Engineer', 'kubectl Enthusiast', 'Cloud Infrastructure Builder', 'Linux Tinkerer', 'Containerization Nerd', 'Hardware Hobbyist','Open Source Contributor','AI Explorer'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typewriterEl = document.getElementById('typewriter');

        function typeWriter() {
            const current = roles[roleIndex];
            if (isDeleting) {
                typewriterEl.textContent = current.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterEl.textContent = current.substring(0, charIndex + 1);
                charIndex++;
            }
            let speed = isDeleting ? 50 : 80;
            if (!isDeleting && charIndex === current.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500;
            }
            setTimeout(typeWriter, speed);
        }
        typeWriter();

        // Mobile menu
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = mobileMenu.querySelectorAll('a');

        const menuOverlay = document.getElementById('mobile-menu-overlay');
        function closeMenu() {
            mobileMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
        }
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            menuOverlay.classList.add('open');
        });
        menuClose.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
        menuLinks.forEach(link => link.addEventListener('click', closeMenu));

        let revealObserver = null;

        function initBgIcons() {
            const icons = [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg',
            ];

            const container = document.querySelector('.hero-bg-icons');
            if (!container) return;

            icons.forEach((src, i) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = '';
                img.draggable = false;

                const top  = Math.random() * 90;   // 0–90% vertically
                const left = Math.random() * 95;   // 0–95% horizontally

                const size = 48 + Math.floor(Math.random() * 32); // 48px–80px

                const duration = 18 + Math.floor(Math.random() * 20); // 18s–38s
                const delay    = -(Math.floor(Math.random() * 20));   // negative delay = starts mid-cycle

                img.style.cssText = `
      position: absolute;
      top: ${top}%;
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      opacity: 0.045;
      filter: grayscale(100%);
      animation: bgIconSpin ${duration}s linear ${delay}s infinite;
      pointer-events: none;
      user-select: none;
    `;

                container.appendChild(img);
            });
        }

        // Projects (dynamic from data/projects.json)
        function buildProjectCard(p) {
            const primaryUrl = (p.links && (p.links.dockerhub || p.links.github)) || '#';
            const hasDockerhub = p.links && p.links.dockerhub;
            const tagsHtml = (p.tags || []).map(t => `<span class="text-xs font-mono text-[#00ff88]">${escapeHtml(t)}</span>`).join('');
            const cardClasses = 'project-card glass-card rounded-xl overflow-hidden reveal';
            if (hasDockerhub) {
                return `<article class="${cardClasses}">
                    <a href="${escapeHtml(primaryUrl)}" target="_blank" rel="noopener noreferrer" class="block">
                        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="w-full h-48 object-cover">
                        <div class="p-5">
                            <div class="flex flex-wrap gap-2 mb-2">${tagsHtml}</div>
                            <h3 class="font-mono font-bold text-white text-lg mb-2">${escapeHtml(p.title)}</h3>
                            <p class="text-gray-400 text-sm mb-4">${escapeHtml(p.description)}</p>
                        </div>
                    </a>
                    <div class="px-5 pb-5 flex gap-3">
                        <a href="${escapeHtml(p.links.dockerhub)}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#00ff88] transition-colors" title="Docker Hub"><i class="fab fa-docker text-[#00ff88]"></i></a>
                        <a href="${escapeHtml(p.links.github)}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#00ff88] transition-colors" title="GitHub"><i class="fab fa-github text-[#00ff88]"></i></a>
                    </div>
                </article>`;
            }
            return `<article class="${cardClasses}">
                <a href="${escapeHtml(primaryUrl)}" target="_blank" rel="noopener noreferrer" class="block">
                    <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="w-full h-48 object-cover">
                    <div class="p-5">
                        <div class="flex flex-wrap gap-2 mb-2">${tagsHtml}</div>
                        <h3 class="font-mono font-bold text-white text-lg mb-2">${escapeHtml(p.title)}</h3>
                        <p class="text-gray-400 text-sm mb-4">${escapeHtml(p.description)}</p>
                        <div class="flex gap-3"><i class="fab fa-github text-[#00ff88]"></i></div>
                    </div>
                </a>
            </article>`;
        }
        function escapeHtml(str) {
            if (!str) return '';
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
        async function renderProjects() {
            const grid = document.getElementById('projects-grid');
            try {
                const res = await fetch('data/projects.json');
                if (!res.ok) throw new Error('Fetch failed');
                const projects = await res.json();
                const visible = projects.filter(p => p.visible === true);
                const sorted = [...visible].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                grid.innerHTML = sorted.map(p => buildProjectCard(p)).join('');
                document.querySelectorAll('#projects-grid .project-card').forEach((el, i) => {
                    el.style.transitionDelay = `${i * 60}ms`;
                });
                if (revealObserver) {
                    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
                }
            } catch (err) {
                console.error('Failed to load projects', err);
                grid.innerHTML = '<p class="error col-span-full py-8 text-center">Failed to load projects. Please try again.</p>';
            }
        }

        async function renderTechStack() {
            const grid = document.getElementById('techstack-grid');
            try {
                const res = await fetch('data/techstack.json');
                if (!res.ok) throw new Error('Fetch failed');
                const techs = await res.json();
                const visible = techs.filter(t => t.visible === true);
                grid.innerHTML = visible.map(t => `
                    <div class="tech-tile reveal">
                        <img src="${t.icon}" alt="${t.name}" />
                        <span>${t.name}</span>
                    </div>
                `).join('');
                document.querySelectorAll('#techstack-grid .tech-tile').forEach((el, i) => {
                    el.style.transitionDelay = `${i * 40}ms`;
                });
                if (revealObserver) {
                    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
                }
            } catch (err) {
                console.error('Failed to load tech stack', err);
                grid.innerHTML = '<p class="error col-span-full py-8 text-center">Failed to load tech stack. Please try again.</p>';
            }
        }

        function buildTimelineCard(companyName, role, isLeft, options = {}) {
            const { showCompanyHeader = false, showCompanyInCard = true } = options;
            const promotedBadge = role.promoted === true ? '<span class="promoted-badge">↑ Promoted</span>' : '';

            const companyHeaderHtml = showCompanyHeader ? `<h3 class="font-mono font-bold text-white text-lg mb-3">${escapeHtml(companyName)}</h3>` : '';
            const companyInCardHtml = showCompanyInCard ? `<h3 class="font-mono font-bold text-white text-lg">${escapeHtml(companyName)}</h3>` : '';
            const titleHtml = `<p class="text-[#00ff88] font-mono text-sm">${escapeHtml(role.title)}${promotedBadge ? ' ' + promotedBadge : ''}</p>`;
            const dateHtml = `<p class="text-gray-500 text-sm mt-1">${escapeHtml(role.from)} – ${escapeHtml(role.to)}</p>`;

            const cardHtml = `
                <div class="timeline-card glass-card rounded-xl p-6 w-full reveal">
                    ${companyInCardHtml}
                    ${titleHtml}
                    ${dateHtml}
                </div>
            `;

            if (isLeft) {
                return `
                    <div class="timeline-item">
                        <div class="timeline-left flex justify-end pl-4 md:pl-0 md:pr-4">
                            <div class="w-full max-w-[calc(100%-2rem)] md:max-w-none">
                                ${companyHeaderHtml}
                                ${cardHtml}
                            </div>
                        </div>
                        <div class="timeline-center">
                            <div class="dot timeline-dot"></div>
                        </div>
                        <div class="timeline-right"></div>
                    </div>
                `;
            }

            return `
                <div class="timeline-item">
                    <div class="timeline-left"></div>
                    <div class="timeline-center">
                        <div class="dot timeline-dot"></div>
                    </div>
                    <div class="timeline-right pl-4">
                        <div class="w-full max-w-[calc(100%-2rem)] md:max-w-none">
                            ${companyHeaderHtml}
                            ${cardHtml}
                        </div>
                    </div>
                </div>
            `;
        }

        async function renderExperience() {
            const container = document.getElementById('experience-timeline');
            try {
                const res = await fetch('data/experience.json');
                if (!res.ok) throw new Error('Fetch failed');
                const companies = await res.json();
                const visible = companies.filter(c => c.visible === true);

                let itemIndex = 0;  // global counter for alternating left/right

                container.innerHTML = visible.map(company => {
                    const isMultiRole = Array.isArray(company.roles) && company.roles.length > 1;
                    return (company.roles || []).map((role, roleIdx) => {
                        const isLeft = itemIndex % 2 === 0;
                        itemIndex++;
                        return buildTimelineCard(company.company, role, isLeft, {
                            showCompanyHeader: isMultiRole && roleIdx === 0,
                            showCompanyInCard: !isMultiRole
                        });
                    }).join('');
                }).join('');

                if (revealObserver) {
                    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
                }
            } catch (err) {
                console.error('Failed to load experience', err);
                container.innerHTML = '<p class="error py-8 text-center">Failed to load experience. Please try again.</p>';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // IntersectionObserver for fade-in-up (existing sections)
            const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            }, observerOptions);
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

            if (!prefersReducedMotion) {
                revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            revealObserver.unobserve(entry.target); // animate once, never reverse
                        }
                    });
                }, { threshold: 0.12 });
                document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
            }

            function animateCounter(el) {
                const target = parseInt(el.dataset.target);
                const suffix = el.dataset.suffix || '';
                const duration = 1200; // ms
                const steps = 40;
                const increment = target / steps;
                let current = 0;
                let step = 0;

                const timer = setInterval(() => {
                    step++;
                    current = Math.min(Math.round(increment * step), target);
                    el.textContent = current + suffix;
                    if (step >= steps) clearInterval(timer);
                }, duration / steps);
            }

            if (prefersReducedMotion) {
                document.querySelectorAll('.stat-number').forEach(el => {
                    const target = parseInt(el.dataset.target);
                    const suffix = el.dataset.suffix || '';
                    el.textContent = target + suffix;
                });
            } else {
                const statsObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const counter = entry.target.querySelector('.stat-number');
                            if (counter) animateCounter(counter);
                            statsObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 }); // higher threshold — wait until card is well in view
                document.querySelectorAll('.stat-card').forEach(el => statsObserver.observe(el));
            }

            initBgIcons();
            renderProjects();
            renderTechStack();
            renderExperience();
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
