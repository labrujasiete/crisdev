/**
 * Main Interactive Application Script
 * GSAP ScrollTrigger, 3D Tilt, Interactive Agent Sandbox Terminal, Modal Carousels & Skills Filter
 */

// Project Data Store for Rich Modal Inspection
const projectsData = {
  'vird-autopilot': {
    title: 'Vird AutoPilot',
    subtitle: 'Private AI Social Media Marketing Operating System',
    badge: 'Arquitectura Agéntica & Producción',
    description: 'Vird Auto-Pilot es un sistema operativo privado y personal de Social Media Marketing impulsado por IA, diseñado como un centro de mando unificado para gestionar marcas y productos. Desarrollado específicamente para un único propietario (personal-first, eliminando la sobrecarga y latencia multi-tenant de los SaaS comerciales) bajo un estándar inquebrantable de realidad de producción (zero fake/mock data): impulsado 100% por APIs en vivo, feeds RSS en tiempo real y persistencia relacional.',
    highlights: [
      'Calendario de Contenidos Autónomo con orquestador de publicaciones programadas',
      'Leaderboard de rendimiento cross-platform con enlaces profundos y métricas de engagement real',
      'Social Listening & Trend Intelligence Radar con filtro estricto de afinidad de marca (AGENTS.md Section 21)',
      'Centro de Comando de Insights con bucle cerrado (Closed-Loop Intelligence) para sintetizar aprendizajes empíricos en playbooks permanentes'
    ],
    stack: [
      'Google Antigravity', 'Claude Code', 'Model Context Protocol (MCP)', 
      'Autonomous Bots', 'Node.js', 'TypeScript', 'Live Social APIs', 'Stripe'
    ],
    images: [
      { src: 'assets/vird-autopilot/1-main.png', caption: 'Content Calendar & Scheduler VAP OS' },
      { src: 'assets/vird-autopilot/2-leaderboard.png', caption: 'Published Content Leaderboard con métricas reales' },
      { src: 'assets/vird-autopilot/3-social-listening.png', caption: 'Social Listening & Trend Intelligence Radar' },
      { src: 'assets/vird-autopilot/4-insights.png', caption: 'Centro de Inteligencia & Marketing Knowledge Vault' }
    ],
    links: [
      { label: 'Ecosistema Privado en Producción', url: '#', type: 'private' }
    ]
  },

  'winesip': {
    title: 'WineSip & Sitio de Presentación',
    subtitle: 'Ecosistema Digital y Red Social para Amantes del Vino',
    badge: '🏆 2° Lugar Mejor Startup 2024',
    description: 'Plataforma móvil y web diseñada y desarrollada en colaboración con enólogos, sommeliers y productores vitivinícolas del Valle de Guadalupe. WineSip ofrece una experiencia artesanal que fusiona red social con un repositorio personal en la nube para registrar y analizar catas de vino (color, aromas, taninos, maridaje). Galardonada con el 2° Lugar como Mejor Startup en el prestigioso XXIV Festival de las Conchas y el Vino Nuevo 2024, con el respaldo de ProVino Baja California, SEPESCA, CETYS Universidad y el CEVIT.',
    highlights: [
      'Galardonada en el XXIV Festival Conchas y Vino Nuevo 2024 (Ensenada, B.C.)',
      'Sitio web promocional de alta fidelidad optimizado para conversión en App Store y Google Play',
      'Autenticación social nativa con Apple y Google',
      'Feed dinámico con radar de cata y catálogo inteligente en la nube',
      'Diseño UI/UX integral en Figma con arquitectura de componentes atómicos'
    ],
    stack: [
      'Flutter', 'Dart', 'Firebase (Auth, Firestore, Cloud Functions)', 
      'Node.js', 'Figma', 'App Store', 'Google Play'
    ],
    images: [
      { src: 'assets/winesip/1-main.png', caption: 'Sitio de Presentación Web WineSip (Hero de Conversión)' },
      { src: 'assets/winesip/2-inside.png', caption: 'Arquitectura de Pantallas Móviles: Feed, Perfil y Radar de Cata' },
      { src: 'assets/winesip/3-community.png', caption: 'Comunidad Global y Explorador de Vinos' },
      { src: 'assets/projects/winesip-award.png', caption: 'Reconocimiento Oficial XXIV Festival Conchas y Vino Nuevo' },
      { src: 'assets/projects/winesip-showcase.png', caption: 'Metodología Completa de Diseño y Desarrollo UI/UX' }
    ],
    links: [
      { label: 'Sitio Web Oficial', url: 'https://winesipapp.com/', type: 'external' },
      { label: 'Descargar en App Store', url: 'https://apps.apple.com/us/app/winesip/id6532595832', type: 'store' },
      { label: 'Disponible en Google Play', url: 'https://play.google.com/store/apps/details?id=com.winesip', type: 'store' },
      { label: 'Repositorio GitHub', url: 'https://github.com/labrujasiete/WineSip-Presentation', type: 'github' }
    ]
  },

  'vimostay': {
    title: 'VimoStay (BNB Welcome Book)',
    subtitle: 'Guías de Bienvenida Digitales para Alquileres Vacacionales',
    badge: 'Plataforma SaaS & Hospitality',
    description: 'VimoStay es una plataforma que permite a anfitriones de Airbnb, Vrbo y alquileres vacacionales crear guías de bienvenida digitales dinámicas e interactivas, reemplazando la clásica carpeta física llena de hojas desgastadas. Los huéspedes acceden de manera instantánea mediante un código QR o enlace web optimizado para smartphones, sin necesidad de descargar aplicaciones adicionales.',
    highlights: [
      'Guías interactivas con reglas de la casa, accesos clave y clave Wi-Fi directa',
      'Módulo de recomendaciones locales geolocalizadas con asistencia inteligente',
      'Soporte multi-idioma instantáneo con traducción para huéspedes internacionales (+56 idiomas)',
      'Estructura de precios SaaS transparente con integración de suscripciones Stripe',
      'Panel de control de anfitrión para actualizar normas y videos instructivos en tiempo real'
    ],
    stack: [
      'UI/UX Design System', 'Responsive Web Design', 'Stripe Subscriptions', 
      'QR Code Integration', 'Multi-Language Support', 'Analytics Dashboard'
    ],
    images: [
      { src: 'assets/vimostay/1-main.png', caption: 'VimoStay Landing Page Principal' },
      { src: 'assets/vimostay/2-features.png', caption: 'Guías Digitales Móviles y Recomendaciones Locales' },
      { src: 'assets/vimostay/3-pricing.png', caption: 'Planes y Modelo de Suscripción Transparente' },
      { src: 'assets/projects/bnb-welcome-book.png', caption: 'Prototipado Original BNB Welcome Book' }
    ],
    links: [
      { label: 'Sitio Web VimoStay', url: 'https://vimostay.com/es', type: 'external' }
    ]
  },

  'yose': {
    title: 'YOSE Web Platform',
    subtitle: 'Plataforma Ciudadana de Noticias y Debate Participativo',
    badge: 'Community & Mobile-First UI/UX',
    description: 'Plataforma comunitaria concebida para que los ciudadanos publiquen noticias de interés cívico, tomen postura documentada a favor o en contra y debatan constructivamente. Diseñada bajo un riguroso enfoque Mobile-First para garantizar una lectura fluida en dispositivos móviles.',
    highlights: [
      'Diseño Mobile-First centrado en la legibilidad y contraste',
      'Módulos de debate con toma de postura a favor / en contra',
      'Flujo de onboarding intuitivo y perfiles personalizables',
      'Sistema de votación y seguimiento dinámico de noticias'
    ],
    stack: ['UI/UX Design', 'Figma', 'Mobile-First Framework', 'Design Thinking'],
    images: [
      { src: 'assets/projects/yose-showcase.png', caption: 'Arquitectura Visual y Sistema de Pantallas YOSE' }
    ],
    links: []
  },

  'maat': {
    title: 'MAAT Point of Sale',
    subtitle: 'Sistema de Punto de Venta para Servicios Técnicos & Telefonía',
    badge: 'B2B Workflow & POS Architecture',
    description: 'Diseño conceptual y funcional de un sistema de punto de venta enfocado en negocios de reparación de telefonía celular, cambios de operadora y servicio técnico. Optimizado para minimizar los clics por transacción y agilizar la gestión de inventario de repuestos.',
    highlights: [
      'Flujo de caja y tickets de reparación con tiempos de entrega estimados',
      'Gestión visual de inventario de partes y repuestos',
      'Diseño de interfaz de alto contraste y rapidez de respuesta',
      'Estructurado según principios de Atomic Design'
    ],
    stack: ['Figma', 'Atomic Design', 'UX Research', 'POS Systems'],
    images: [
      { src: 'assets/projects/maat-pos.png', caption: 'Interfaz y Flujo Operativo MAAT POS' }
    ],
    links: []
  },

  'owl-invite': {
    title: 'OWL Invite',
    subtitle: 'Plataforma Interactiva para Invitaciones y Gestión de RSVP',
    badge: 'Eventos & Microinteracciones',
    description: 'Plataforma para la creación de invitaciones web interactivas para bodas, aniversarios y eventos de gala. Permite a los anfitriones personalizar música de ambientación, integración con mapas de llegada, enlaces a mesas de regalos y confirmación directa de invitados.',
    highlights: [
      'Animaciones y transiciones elegantes adaptadas a la identidad del evento',
      'Confirmación interactiva de asistencia (RSVP) vía WhatsApp y base de datos',
      'Mapas interactivos y cuenta regresiva dinámica',
      'Generación de códigos personalizados por invitado'
    ],
    stack: ['UI/UX Design', 'Interactive Prototyping', 'Google Maps API', 'Event Design'],
    images: [
      { src: 'assets/projects/owl-invite.png', caption: 'Diseño Conceptual y Módulos Interactivos OWL Invite' }
    ],
    links: []
  },

  'vinos-pascual': {
    title: 'Vinos Pascual 1ro',
    subtitle: 'Landing Page de Alta Fidelidad & Funnel Directo a Amazon',
    badge: 'E-Commerce & Branding Artesanal',
    description: 'Diseño de página web estática orientada a la presentación premium de un producto vitivinícola artesanal, con un embudo de conversión limpio hacia su ficha oficial de compra en Amazon.',
    highlights: [
      'Paleta de colores sobria y tipografía que ensalza el valor del producto',
      'Estructura limpia que guía al usuario directamente a la acción de compra',
      'Optimización de rendimiento y velocidad de carga instantánea'
    ],
    stack: ['UI/UX Design', 'E-Commerce Funnel', 'Amazon Attribution', 'Web Performance'],
    images: [
      { src: 'assets/projects/vinos-pascual.png', caption: 'Presentación Visual de Producto y Llamado a la Acción' }
    ],
    links: []
  },

  'baby-shower': {
    title: 'Invitación Web & Identidad Física Baby Shower',
    subtitle: 'Experiencia Digital Integrada y Branding de Empaques',
    badge: 'Híbrido Digital + Físico',
    description: 'Desarrollo de una invitación web interactiva adaptada a temática delicada, complementada con el diseño físico de etiquetas de botellas, empaques y elementos decorativos para una coherencia visual total.',
    highlights: [
      'Agendado automático en Google Calendar con parámetros de hora y lugar',
      'Confirmación inmediata vía WhatsApp y geolocalización en Google Maps',
      'Diseño y producción de assets físicos (etiquetas para botellas, recuerdos y papelería)'
    ],
    stack: ['Web Development', 'Google Calendar API', 'Branding & Packaging', 'Graphic Design'],
    images: [
      { src: 'assets/projects/baby-shower.png', caption: 'Interfaz Web y Funcionalidades Integradas' },
      { src: 'assets/projects/branding-packaging.png', caption: 'Assets Físicos, Etiquetas y Empaques Temáticos' }
    ],
    links: []
  }
};

// Current Modal State
let currentModalProject = null;
let currentSlideIndex = 0;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();
  initCursorSpotlights();
  initTiltCards();
  initTerminal();
  initModalLightbox();
  initSkillsFilter();
  initGSAPAnimations();
  initClipboardUtils();
});

/* ----------------------------------------------------
 * 1. Card Spotlight Glow on Mouse Movement
 * ---------------------------------------------------- */
function initCursorSpotlights() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ----------------------------------------------------
 * 2. 3D Tilt Effect on Interactive Cards
 * ---------------------------------------------------- */
function initTiltCards() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 1024) return; // Only on desktop for best performance

  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-(y / rect.height) * 8).toFixed(2);
      const rotateY = ((x / rect.width) * 8).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.transition = 'transform 0.5s ease';
      setTimeout(() => {
        card.style.transition = '';
      }, 500);
    });
  });
}

/* ----------------------------------------------------
 * 3. Interactive Agent Sandbox Terminal
 * ---------------------------------------------------- */
function initTerminal() {
  const terminalBody = document.getElementById('terminal-logs');
  const commandInput = document.getElementById('terminal-input');
  const quickCmdBtns = document.querySelectorAll('[data-terminal-cmd]');
  if (!terminalBody || !commandInput) return;

  const commands = {
    'help': () => `
<span class="text-cyan-400">Comandos disponibles en el sistema agéntico:</span>
  • <strong class="text-white">antigravity status</strong>  : Inspecciona estado de orquestación y runtime
  • <strong class="text-white">mcp list</strong>            : Lista servidores Model Context Protocol registrados
  • <strong class="text-white">agent run vird</strong>      : Ejecuta ciclo de monitoreo e inteligencia social
  • <strong class="text-white">skills</strong>                : Muestra matriz de competencias verificadas
  • <strong class="text-white">contact</strong>               : Muestra canales de comunicación directa
  • <strong class="text-white">clear</strong>                 : Limpia la terminal
`,
    'antigravity status': () => `
<span class="text-emerald-400">✓ Google Antigravity & Agentic Framework: ONLINE</span>
[RUNTIME] Orquestación Multi-Agente: Activa
[MEMORY]  Bancos de memoria persistente: Sincronizados
[MODELS]  Claude 3.7/3.5 Sonnet, GPT-4o, Gemini 2.0 Flash
[POLICY]  Producción Real (Zero mock data standard)
[STATUS]  Todos los subagentes listos para tareas de ingeniería.
`,
    'mcp list': () => `
<span class="text-cyan-400">Servidores MCP (Model Context Protocol) Conectados:</span>
  ├── <span class="text-white">codebase-memory-mcp</span>   : Grafo de conocimiento y navegación AST
  ├── <span class="text-white">stripe-mcp</span>            : Facturación, webhooks y checkout flows
  ├── <span class="text-white">n8n-automation-mcp</span>    : Flujos de automatización de pipelines
  ├── <span class="text-white">social-listening-mcp</span>   : Extracción en vivo de feeds y tendencias
  └── <span class="text-white">browserbase / scraper</span>   : Verificación y telemetría web
`,
    'agent run vird': () => `
<span class="text-violet-400">▶ Iniciando Vird AutoPilot Autonomous Agent...</span>
[1/4] Consultando feeds RSS y radar de tendencias vitivinícolas...
[2/4] Evaluando afinidad de marca según directriz AGENTS.md (Score: 84%)...
[3/4] Generando borrador contextual en Content Studio (Zero Hallucination)...
[4/4] Programando publicación en cola de distribución.
<span class="text-emerald-400">✓ Ciclo agéntico completado con éxito (Latencia: 342ms).</span>
`,
    'skills': () => `
<span class="text-cyan-400">Cristian Delgadillo - Matriz de Competencias:</span>
  • <strong class="text-white">IA & Agentes</strong>    : Google Antigravity, Claude Code, Codex, MCP, n8n, Stripe, Bots
  • <strong class="text-white">Frontend</strong>        : Flutter / Dart, TypeScript, React, Tailwind, Canvas
  • <strong class="text-white">Backend</strong>         : Node.js, Express, Firebase, MongoDB, MySQL, NGINX, Linux
  • <strong class="text-white">UI/UX</strong>           : Figma, Atomic Design, Blender 3D, Illustrator, Photoshop
  • <strong class="text-white">Hardware/OS</strong>     : CompTIA A+ Certified, Linux (Ubuntu, CentOS, Fedora)
`,
    'contact': () => `
<span class="text-amber-400">Canales Directos de Comunicación:</span>
  • <span class="text-white">WhatsApp / Teléfono</span>: +52 664 477 1595
  • <span class="text-white">Correo Electrónico</span>: decortes.designs@gmail.com
  • <span class="text-white">GitHub</span>            : github.com/labrujasiete
  • <span class="text-white">Ubicación</span>         : Baja California, México (Disponible remoto mundial)
`,
    'clear': () => {
      terminalBody.innerHTML = '';
      return null;
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Append user input line
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line text-white flex items-center gap-2';
    userLine.innerHTML = `<span class="text-cyan-400 font-bold">visitor@antigravity:~$</span> <span>${escapeHtml(rawCmd)}</span>`;
    terminalBody.appendChild(userLine);

    // Process output
    const handler = commands[cmd];
    if (handler) {
      const outputHtml = handler();
      if (outputHtml !== null) {
        const outLine = document.createElement('div');
        outLine.className = 'terminal-line mb-3';
        outLine.innerHTML = outputHtml;
        terminalBody.appendChild(outLine);
      }
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'terminal-line text-rose-400';
      errLine.innerHTML = `Comando no reconocido: "${escapeHtml(cmd)}". Escribe <span class="underline cursor-pointer" onclick="document.getElementById('terminal-input').value='help'; document.getElementById('terminal-input').focus();">help</span> para ver la lista.`;
      terminalBody.appendChild(errLine);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
    commandInput.value = '';
  }

  commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(commandInput.value);
    }
  });

  quickCmdBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-terminal-cmd');
      commandInput.value = cmd;
      executeCommand(cmd);
    });
  });
}

/* ----------------------------------------------------
 * 4. Modal Lightbox & Multi-Image Carousel
 * ---------------------------------------------------- */
function initModalLightbox() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const track = document.getElementById('carousel-track');
  const indicatorsContainer = document.getElementById('carousel-indicators');

  if (!modal) return;

  // Open buttons
  document.querySelectorAll('[data-open-project]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-open-project');
      openProjectModal(projId);
    });
  });

  // Close handlers
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
    if (modal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') showSlide(currentSlideIndex - 1);
      if (e.key === 'ArrowRight') showSlide(currentSlideIndex + 1);
    }
  });

  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));

  function openProjectModal(id) {
    const data = projectsData[id];
    if (!data) return;

    currentModalProject = data;
    currentSlideIndex = 0;

    // Populate data
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-description').textContent = data.description;

    // Highlights list
    const hlContainer = document.getElementById('modal-highlights');
    hlContainer.innerHTML = '';
    data.highlights.forEach((h) => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-slate-300 text-sm';
      li.innerHTML = `<span class="text-cyan-400 mt-1">▹</span><span>${h}</span>`;
      hlContainer.appendChild(li);
    });

    // Tech chips
    const stackContainer = document.getElementById('modal-stack');
    stackContainer.innerHTML = '';
    data.stack.forEach((tech) => {
      const chip = document.createElement('span');
      chip.className = 'tech-chip';
      chip.textContent = tech;
      stackContainer.appendChild(chip);
    });

    // Action links
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';
    if (data.links && data.links.length > 0) {
      data.links.forEach((link) => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'btn-primary text-xs py-2 px-4 inline-flex items-center gap-2';
        a.innerHTML = `<span>${link.label}</span> <i data-lucide="external-link" class="w-3.5 h-3.5"></i>`;
        linksContainer.appendChild(a);
      });
    }

    // Build carousel
    track.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    data.images.forEach((img, idx) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide p-2';
      slide.innerHTML = `
        <div class="relative w-full flex flex-col items-center">
          <img src="${img.src}" alt="${img.caption}" class="rounded-lg shadow-2xl max-h-[55vh] object-contain" />
          <p class="text-xs font-mono text-slate-400 mt-2 text-center bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700/60">${img.caption}</p>
        </div>
      `;
      track.appendChild(slide);

      const dot = document.createElement('button');
      dot.className = `w-2.5 h-2.5 rounded-full transition-all ${idx === 0 ? 'bg-cyan-400 w-6' : 'bg-slate-600'}`;
      dot.addEventListener('click', () => showSlide(idx));
      indicatorsContainer.appendChild(dot);
    });

    showSlide(0);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }

  function showSlide(index) {
    if (!currentModalProject) return;
    const total = currentModalProject.images.length;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentSlideIndex = index;

    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Update dots
    const dots = indicatorsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === currentSlideIndex) {
        dot.className = 'w-6 h-2.5 rounded-full bg-cyan-400 transition-all';
      } else {
        dot.className = 'w-2.5 h-2.5 rounded-full bg-slate-600 transition-all';
      }
    });
  }

  function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ----------------------------------------------------
 * 5. Dynamic Skills Category Filter
 * ---------------------------------------------------- */
function initSkillsFilter() {
  const filterPills = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('[data-skill-category]');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const targetCategory = pill.getAttribute('data-skill-filter');

      // Update active pill styling
      filterPills.forEach((p) => {
        p.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold');
        p.classList.add('bg-slate-800/80', 'text-slate-300');
      });
      pill.classList.remove('bg-slate-800/80', 'text-slate-300');
      pill.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');

      // Filter cards
      skillCards.forEach((card) => {
        const cat = card.getAttribute('data-skill-category');
        if (targetCategory === 'all' || cat === targetCategory) {
          card.style.display = '';
          gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
 * 6. GSAP Entrance & ScrollTrigger Animations
 * ---------------------------------------------------- */
function initGSAPAnimations() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero Stagger
  gsap.from('.hero-stagger', {
    opacity: 0,
    y: 30,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out'
  });

  // Reveal sections on scroll
  gsap.utils.toArray('.scroll-reveal').forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // Parallax on background glows
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.parallax-glow').forEach((glow) => {
      const speed = glow.getAttribute('data-speed') || 0.15;
      glow.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

/* ----------------------------------------------------
 * 7. Clipboard & Direct Action Feedback
 * ---------------------------------------------------- */
function initClipboardUtils() {
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');

  function showToast(text) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = el.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`¡Copiado al portapapeles: ${textToCopy}!`);
      });
    });
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
