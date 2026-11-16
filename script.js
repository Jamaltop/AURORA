document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      num: '01',
      title: 'Kinetix Spatial OS',
      category: 'Design System & WebGL Interface',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      summary: 'Engineered a multi-platform spatial computing interface and 140-component design token architecture for Kinetix Labs.',
      metrics: '+64% Enterprise Onboarding Velocity'
    },
    {
      num: '02',
      title: 'Monolith Architecture',
      category: 'Editorial Brand & Interactive Archive',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      summary: 'Digital monograph showcasing brutalist concrete residences across Switzerland and Japan with fluid typographic transitions.',
      metrics: 'Awwwards Site of the Day Nominee'
    },
    {
      num: '03',
      title: 'Sora Acoustic Instruments',
      category: 'Flagship E-Commerce & 3D Configurator',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80',
      summary: 'Bespoke direct-to-consumer flagship for Tokyo-based synthesizer manufacturer with real-time tactile hardware previews.',
      metrics: '3.4x Direct Conversion Lift'
    },
    {
      num: '04',
      title: 'Vespera Private Wealth',
      category: 'Fintech Product Strategy & UI',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      summary: 'Reimagined portfolio telemetry and multi-currency treasury workflows for European family offices.',
      metrics: '$1.8B Assets Managed on Platform'
    }
  ];

  const capabilities = [
    {
      title: '01. Digital Product & Design Systems',
      detail: 'End-to-end interface architecture, tokenized component libraries, and WCAG AAA accessible frontend engineering.'
    },
    {
      title: '02. Creative Frontend & Kinetic Web',
      detail: 'High-frame-rate CSS/JS choreography, bespoke micro-interactions, and editorial storytelling built without bloated frameworks.'
    },
    {
      title: '03. Brand Identity & Art Direction',
      detail: 'Visual positioning, custom typographic hierarchies, and comprehensive digital guidelines for category-defining startups.'
    }
  ];

  const testimonials = [
    {
      quote: '“Aurora transformed our complex infrastructure platform into an interface that feels effortless and authoritative.”',
      author: '— Marcus Vance, VP Product at Kinetix'
    },
    {
      quote: '“Rarely do you find a studio where editorial taste and raw frontend engineering precision coexist at this level.”',
      author: '— Henrik Lindqvist, Founding Partner at Monolith'
    }
  ];

  
  const workList = document.getElementById('workList');
  workList.innerHTML = projects.map((p, idx) => `
    <div class="work-row hover-target" onclick="openCase(${idx})">
      <span class="work-idx">${p.num}</span>
      <span class="work-title">${p.title}</span>
      <span class="work-cat">${p.category}</span>
      <span class="work-year">${p.year} ↗</span>
    </div>
  `).join('');

  
  const cursor = document.getElementById('cursorRing');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('.hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });

  
  window.openCase = (idx) => {
    const p = projects[idx];
    document.getElementById('caseBody').innerHTML = `
      <span class="index-num">CASE STUDY ${p.num} — ${p.year}</span>
      <h2 style="font-family:var(--display);font-size:2.2rem;margin-top:0.35rem;">${p.title}</h2>
      <p style="color:var(--muted);margin-top:0.25rem;">${p.category}</p>
      <img src="${p.image}" alt="${p.title}" />
      <p style="font-size:1.05rem;margin-bottom:1.25rem;">${p.summary}</p>
      <div style="padding:1rem;background:var(--concrete);border-left:3px solid var(--vermilion);">
        <strong>Impact:</strong> ${p.metrics}
      </div>
    `;
    document.getElementById('caseModal').classList.add('open');
  };

  document.getElementById('closeCaseBtn').addEventListener('click', () => {
    document.getElementById('caseModal').classList.remove('open');
  });

  
  const acc = document.getElementById('capAccordion');
  acc.innerHTML = capabilities.map((c, i) => `
    <div class="acc-item ${i === 0 ? 'open' : ''}">
      <button class="acc-trigger">
        <span>${c.title}</span>
        <span>+</span>
      </button>
      <div class="acc-body"><p>${c.detail}</p></div>
    </div>
  `).join('');

  acc.querySelectorAll('.acc-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });

  
  let qIndex = 0;
  function updateQuote() {
    document.getElementById('quoteText').textContent = testimonials[qIndex].quote;
    document.getElementById('quoteAuthor').textContent = testimonials[qIndex].author;
  }
  document.getElementById('nextQuote').addEventListener('click', () => {
    qIndex = (qIndex + 1) % testimonials.length;
    updateQuote();
  });
  document.getElementById('prevQuote').addEventListener('click', () => {
    qIndex = (qIndex - 1 + testimonials.length) % testimonials.length;
    updateQuote();
  });

  
  let selectedBudget = '$15k–$30k';
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedBudget = chip.dataset.budget;
    });
  });

  document.getElementById('inquiryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value.trim();
    document.getElementById('formFeedback').textContent =
      `Thank you, ${name}. Your ${selectedBudget} project brief has been logged for review.`;
    e.target.reset();
  });
});