// ============================================
// SUMMIT GLOBAL - MAIN.JS
// Versão Completa e Otimizada
// ============================================

// ============================================
// CONFIGURATION & DATA
// ============================================
const CONTENT = {
  pt: {
    heroTitle: "Um novo império está surgindo no mundo digital.",
    heroLead: "Onde inovação, prosperidade e propósito se unem. A Summit Global transforma conhecimento em oportunidades reais.",
    ctaJoin: "Junte-se ao Movimento",
    seePlans: "Ver Planos",
    heroFooter: "Apresentação: Visão, Planos, Roadmap e Plano de Carreira.",
    topbarSub: "Apresentação Oficial — Estratégia & Tokenomics",
    aboutTitle: "Sobre o Projeto",
    aboutIntro: "Visão, Missão e os pilares do ecossistema Summit: banco digital, loja, tech, builder, arbitrage, consulting e fashion.",
    safeHillTitle: "Safe Hill Bank",
    safeHillText: "Contas digitais (fiat+crypto), PIX cripto, staking e gateway integrado. Parte das taxas alimenta o fundo global.",
    storeTitle: "Summit Store",
    storeText: "E-commerce (moda, eletrônicos, joias). Comissões automáticas e reinvestimento no pool global.",
    techTitle: "Summit Tech",
    techText: "Serviços de desenvolvimento Web3, DApps e soluções empresariais — receita real e recorrente.",
    builderTitle: "Summit Builder",
    builderText: "Plataforma no-code para criar tokens e contratos sem programar. Taxas alimentam liquidez.",
    plansTitle: "Planos de Investimento",
    plansIntro: "Escolha seu pacote. Rentabilidade fixa, teto mensal e regras de sustentabilidade aplicáveis.",
    tabAllPlans: "Todos os Planos",
    tabCompare: "Comparar",
    compareFeature: "Característica",
    calculatorTitle: "Simule seus Rendimentos",
    labelValor: "Valor do Investimento (R$):",
    labelMeses: "Tempo (meses):",
    labelPlano: "Plano:",
    calcButton: "Calcular Rendimentos",
    roadmapTitle: "Roadmap — Linha do Tempo",
    roadmapIntro: "Nossa jornada de transformação e crescimento.",
    careerTitle: "Plano de Carreira — Níveis & Prêmios",
    careerIntro: "Degraus com metas claras e prêmios reais. Imagens carregadas da pasta /img/ranking/",
    careerNotes: "Diretos necessários e profundidade de comissões aplicam-se conforme regulamento interno.",
    rulesTitle: "Regras & Comissionamento",
    withdrawalsTitle: "Saques",
    withdrawalsText: "1 saque por semana • Saque mínimo configurado • Prazos 24–72h (processamento)",
    commTitle: "Comissionamento (Unilevel)",
    sustainTitle: "Sustentabilidade",
    sustainText: "Teto mensal por plano, divisão de volume entre 2 maiores diretos, limites de profundidade por carreira.",
    closingTitle: "Esta não é apenas uma rede. É o início de uma nova era.",
    closingLead: "Junte-se ao movimento que transforma tecnologia em impacto real. Comunidade, recompensa e legado.",
  },
  en: {
    heroTitle: "A new empire is rising in the digital world.",
    heroLead: "Where innovation, prosperity and purpose unite. Summit Global turns knowledge into real opportunities.",
    ctaJoin: "Join the Movement",
    seePlans: "See Plans",
    heroFooter: "Presentation: Vision, Plans, Roadmap and Career Path.",
    topbarSub: "Official Presentation — Strategy & Tokenomics",
    aboutTitle: "About the Project",
    aboutIntro: "Vision, Mission and Summit pillars: digital bank, store, tech, builder, arbitrage, consulting and fashion.",
    safeHillTitle: "Safe Hill Bank",
    safeHillText: "Digital accounts (fiat+crypto), crypto-PIX, staking and integrated gateway. Part of fees feed global fund.",
    storeTitle: "Summit Store",
    storeText: "E-commerce (fashion, electronics, jewelry). Automatic commissions and reinvestment into the global pool.",
    techTitle: "Summit Tech",
    techText: "Web3 development, DApps and enterprise solutions — real recurring revenue.",
    builderTitle: "Summit Builder",
    builderText: "No-code platform to create tokens/contracts without programming. Fees feed liquidity.",
    plansTitle: "Investment Plans",
    plansIntro: "Choose your package. Fixed yields, monthly caps and sustainability rules apply.",
    tabAllPlans: "All Plans",
    tabCompare: "Compare",
    compareFeature: "Feature",
    calculatorTitle: "Simulate your Returns",
    labelValor: "Investment Amount (R$):",
    labelMeses: "Time (months):",
    labelPlano: "Plan:",
    calcButton: "Calculate Returns",
    roadmapTitle: "Roadmap — Timeline",
    roadmapIntro: "Our journey of transformation and growth.",
    careerTitle: "Career Plan — Levels & Prizes",
    careerIntro: "Clear milestones and real prizes. Images loaded from /img/ranking/",
    careerNotes: "Directs required and depth rules apply as per internal policy.",
    rulesTitle: "Rules & Commissions",
    withdrawalsTitle: "Withdrawals",
    withdrawalsText: "1 withdrawal per week • Minimum amount applied • Processing 24–72h",
    commTitle: "Commissioning (Unilevel)",
    sustainTitle: "Sustainability",
    sustainText: "Monthly caps per plan, volume split between top 2 directs, depth limits by career.",
    closingTitle: "This is not just a network. It is the dawn of a new era.",
    closingLead: "Join the movement that turns technology into real impact. Community, reward and legacy.",
  }
};

const PLANS = [
  { key: 'start', name: {pt:'Start',en:'Start'}, range: 'R$ 300 – R$ 999', daily: 0.0030, monthlyLabel: '~6.6%', cap: '12%', multiplier: '1.5x' },
  { key: 'bronze', name: {pt:'Bronze',en:'Bronze'}, range: 'R$ 1.000 – R$ 4.999', daily: 0.0040, monthlyLabel: '~8.8%', cap: '15%', multiplier: '1.8x' },
  { key: 'prata', name: {pt:'Prata',en:'Silver'}, range: 'R$ 5.000 – R$ 9.999', daily: 0.0050, monthlyLabel: '~11%', cap: '20%', multiplier: '2.0x' },
  { key: 'ouro', name: {pt:'Ouro',en:'Gold'}, range: 'R$ 10.000 – R$ 24.999', daily: 0.0060, monthlyLabel: '~13%', cap: '30%', multiplier: '2.5x' },
  { key: 'platina', name: {pt:'Platina',en:'Platinum'}, range: 'R$ 25.000 – R$ 49.999', daily: 0.0070, monthlyLabel: '~15%', cap: '30%', multiplier: '2.5x' },
  { key: 'diamante', name: {pt:'Diamante',en:'Diamond'}, range: 'R$ 50.000+', daily: 0.0076, monthlyLabel: '~16.7%', cap: '40%', multiplier: '3.0x' },
];

const CAREER = [
  { id:'cristal', title:'Cristal', volume:1500, prize:'PIX R$ 500', directs:1, depth:1, img:'img/ranking/cristal.png' },
  { id:'jade', title:'Jade', volume:2250, prize:'PIX R$ 750', directs:2, depth:2, img:'img/ranking/jade.png' },
  { id:'perola', title:'Pérola', volume:3000, prize:'PIX R$ 1.000', directs:2, depth:3, img:'img/ranking/perola.png' },
  { id:'safira', title:'Safira', volume:7500, prize:'Smartphone R$ 2.500', directs:3, depth:4, img:'img/ranking/safira.png' },
  { id:'esmeralda', title:'Esmeralda', volume:21000, prize:'Notebook Gamer R$ 7.000', directs:3, depth:5, img:'img/ranking/esmeralda.png' },
  { id:'rubi', title:'Rubi', volume:66000, prize:'Moto CG 160 Titan R$ 22.000', directs:4, depth:6, img:'img/ranking/rubi.png' },
  { id:'diamante', title:'Diamante', volume:240000, prize:'Carro Hatch R$ 80.000', directs:5, depth:7, img:'img/ranking/diamante.png' },
  { id:'diamante-azul', title:'Diamante Azul', volume:450000, prize:'Viagem R$ 15.000', directs:6, depth:8, img:'img/ranking/diamante-azul.png' },
  { id:'diamante-verde', title:'Diamante Verde', volume:1050000, prize:'BMW Série 3 R$ 350.000', directs:7, depth:9, img:'img/ranking/diamante-verde.png' },
  { id:'diamante-roxo', title:'Diamante Roxo', volume:1800000, prize:'Apartamento R$ 600.000', directs:8, depth:10, img:'img/ranking/diamante-roxo.png' },
  { id:'diamante-vermelho', title:'Diamante Vermelho', volume:3900000, prize:'Audi RS6 R$ 1.300.000', directs:8, depth:10, img:'img/ranking/diamante-vermelho.png' },
  { id:'diamante-platina', title:'Diamante Platina', volume:13500000, prize:'Cobertura R$ 4.500.000', directs:9, depth:10, img:'img/ranking/diamante-platina.png' },
  { id:'diamante-negro', title:'Diamante Negro', volume:21000000, prize:'Ferrari 296 GTS R$ 7.000.000', directs:10, depth:10, img:'img/ranking/diamante-negro.png' },
  { id:'diamante-negro-duplo', title:'DN Duplo', volume:48000000, prize:'Mansão R$ 16.000.000', directs:10, depth:10, img:'img/ranking/diamante-negro-duplo.png' },
  { id:'diamante-negro-triplo', title:'DN Triplo', volume:120000000, prize:'Jato R$ 40.000.000', directs:10, depth:10, img:'img/ranking/diamante-negro-triplo.png', infinite:true }
];

const COMMISSIONS = [10.0, 4.5, 3.0, 2.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5];
const INFINITE_TRIPLO = 1.0;

// ============================================
// UTILITY FUNCTIONS
// ============================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const formatBR = n => Number(n).toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});

// ============================================
// TOAST SYSTEM
// ============================================
function showToast(message, type = 'success') {
  const container = $('#toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ============================================
// MODAL SYSTEM
// ============================================
function openModal(title, content) {
  const overlay = $('#modalOverlay');
  const modalTitle = $('#modalTitle');
  const modalBody = $('#modalBody');
  
  if (!overlay || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = $('#modalOverlay');
  if (!overlay) return;
  
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================
function updateScrollProgress() {
  const slides = $('#slides');
  const progressBar = $('#scrollProgress');
  
  if (!slides || !progressBar) return;
  
  const scrolled = slides.scrollTop;
  const height = slides.scrollHeight - slides.clientHeight;
  const progress = (scrolled / height) * 100;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  $$('.slide').forEach(slide => observer.observe(slide));
}

// ============================================
// SMOOTH SCROLL
// ============================================
function smoothScrollTo(target) {
  const element = $(target);
  if (!element) return;
  
  const slides = $('#slides');
  const topbar = $('#topbar');
  
  if (!slides || !topbar) return;
  
  const topbarHeight = topbar.offsetHeight;
  const elementTop = element.offsetTop - topbarHeight - 20;
  
  slides.scrollTo({
    top: elementTop,
    behavior: 'smooth'
  });
}

// ============================================
// LANGUAGE SYSTEM
// ============================================
let currentLang = localStorage.getItem('summit_lang') || 'pt';

function applyLanguage(lang) {
  const L = CONTENT[lang] || CONTENT.pt;
  
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && L[key]) {
      el.textContent = L[key];
    }
  });

  populatePlans(lang);
  populateCalculatorSelect(lang);
  populateRoadmap(lang);
  populateCareer(lang);
  populateCommissions(lang);
  populateComparisonTable(lang);

  localStorage.setItem('summit_lang', lang);
  currentLang = lang;
}

// ============================================
// PLANS RENDERING
// ============================================
function populatePlans(lang = 'pt') {
  const container = $('#plansCardsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  PLANS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'plan-card';
    card.innerHTML = `
      <div class="plan-tag">${p.name[lang]}</div>
      <div class="plan-range">${p.range}</div>
      <div class="plan-details">
        <div><strong>${(p.daily * 100).toFixed(2)}%</strong> ao dia</div>
        <div>${p.monthlyLabel} ao mês</div>
        <div>Teto: <strong>${p.cap}</strong></div>
        <div class="muted">Mult. Máx: ${p.multiplier}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ============================================
// COMPARISON TABLE
// ============================================
function populateComparisonTable(lang = 'pt') {
  const tbody = $('#comparisonTableBody');
  if (!tbody) return;

  const features = [
    { label: { pt: 'Faixa de Valor', en: 'Value Range' }, key: 'range' },
    { label: { pt: 'Rendimento Diário', en: 'Daily Yield' }, key: 'daily' },
    { label: { pt: 'Rendimento Mensal', en: 'Monthly Yield' }, key: 'monthlyLabel' },
    { label: { pt: 'Teto Mensal', en: 'Monthly Cap' }, key: 'cap' },
    { label: { pt: 'Multiplicador', en: 'Multiplier' }, key: 'multiplier' }
  ];

  tbody.innerHTML = '';
  
  features.forEach(feature => {
    const row = document.createElement('tr');
    const labelCell = document.createElement('td');
    labelCell.innerHTML = `<strong>${feature.label[lang]}</strong>`;
    row.appendChild(labelCell);

    PLANS.forEach(plan => {
      const cell = document.createElement('td');
      if (feature.key === 'daily') {
        cell.textContent = `${(plan[feature.key] * 100).toFixed(2)}%`;
      } else {
        cell.textContent = plan[feature.key];
      }
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

// ============================================
// CALCULATOR
// ============================================
function populateCalculatorSelect(lang = 'pt') {
  const select = $('#calc-plano');
  if (!select) return;
  
  select.innerHTML = '';
  
  PLANS.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.daily;
    opt.textContent = `${p.name[lang]} — ${p.range}`;
    select.appendChild(opt);
  });
}

let chartInstance = null;

function animateValue(element, start, end, duration) {
  if (!element) return;
  
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = start + (end - start) * progress;
    element.textContent = `R$ ${formatBR(value)}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function calculateReturns() {
  const valorInput = $('#calc-valor');
  const mesesInput = $('#calc-meses');
  const planoSelect = $('#calc-plano');
  const res = $('#calc-results');
  const canvas = $('#calc-chart');

  if (!valorInput || !mesesInput || !planoSelect || !res || !canvas) return;
  
  const val = parseFloat(valorInput.value);
  const months = parseInt(mesesInput.value, 10);
  const daily = parseFloat(planoSelect.value);

  // Validation
  if (isNaN(val) || val < 300) {
    showToast('Valor mínimo: R$ 300', 'error');
    valorInput.focus();
    return;
  }
  
  if (isNaN(months) || months < 1) {
    showToast('Preencha o período (mínimo 1 mês)', 'error');
    mesesInput.focus();
    return;
  }
  
  if (months > 36) {
    showToast('Período máximo: 36 meses', 'error');
    mesesInput.focus();
    return;
  }

  // Calculate
  const monthlyFactor = Math.pow(1 + daily, 22);
  let balance = val;
  const labels = ['Início'];
  const data = [Number(balance.toFixed(2))];

  for (let m = 1; m <= months; m++) {
    balance = balance * monthlyFactor;
    labels.push(`${m}M`);
    data.push(Number(balance.toFixed(2)));
  }

  const lucro = balance - val;

  // Animate results
  res.innerHTML = `
    <p class="saldo">💰 Saldo Final: <span class="counter" id="saldoCounter">R$ ${formatBR(val)}</span></p>
    <p class="lucro">📈 Lucro Estimado: <span class="counter" id="lucroCounter">R$ 0,00</span></p>
    <p class="small muted">Cálculo baseado em 22 dias úteis por mês (modelo ilustrativo).</p>
  `;
  res.classList.add('show');

  // Animate numbers
  setTimeout(() => {
    animateValue($('#saldoCounter'), val, balance, 1500);
    animateValue($('#lucroCounter'), 0, lucro, 1500);
  }, 100);

  // Chart
  canvas.style.display = 'block';
  canvas.classList.add('show');
  const ctx = canvas.getContext('2d');
  
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }

  if (typeof Chart === 'undefined') {
    console.error('Chart.js não carregado');
    return;
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Crescimento (R$)',
        data,
        borderColor: '#c9a33a',
        backgroundColor: 'rgba(201,163,58,0.15)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: '#c9a33a',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(11,11,15,0.95)',
          titleColor: '#c9a33a',
          bodyColor: '#fff',
          borderColor: '#c9a33a',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: (context) => `R$ ${formatBR(context.parsed.y)}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            color: '#9aa0a6',
            callback: (value) => `R$ ${formatBR(value)}`
          },
          grid: {
            color: 'rgba(255,255,255,0.05)'
          }
        },
        x: {
          ticks: { color: '#9aa0a6' },
          grid: { color: 'rgba(255,255,255,0.05)' }
        }
      }
    }
  });

  // Scroll to results
  setTimeout(() => {
    res.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);

  showToast('Cálculo realizado com sucesso!', 'success');
}

// ============================================
// ROADMAP
// ============================================
function populateRoadmap(lang = 'pt') {
  const timeline = $('#timeline');
  if (!timeline) return;
  
  const phases = [
    {
      phase: 1,
      title: { pt: 'Fundação', en: 'Foundation' },
      text: { pt: 'Estrutura, comunidade e plataforma base. Lançamento inicial.', en: 'Structure, community & base platform. Initial launch.' }
    },
    {
      phase: 2,
      title: { pt: 'Expansão', en: 'Expansion' },
      text: { pt: 'Lançamento global e rede de parceiros.', en: 'Global launch and partner network.' }
    },
    {
      phase: 3,
      title: { pt: 'Domínio', en: 'Domination' },
      text: { pt: 'Marketplace, integração NFTs e metaverso.', en: 'Marketplace, NFTs & metaverse integration.' }
    },
    {
      phase: 4,
      title: { pt: 'Legado', en: 'Legacy' },
      text: { pt: 'Fundação Summit e projetos sociais.', en: 'Summit Foundation and social projects.' }
    }
  ];

  timeline.innerHTML = '';
  
  phases.forEach(p => {
    const milestone = document.createElement('div');
    milestone.className = 'milestone';
    milestone.innerHTML = `
      <div class="phase-number">Fase ${p.phase}</div>
      <div class="title">${p.title[lang]}</div>
      <p class="muted">${p.text[lang]}</p>
    `;
    timeline.appendChild(milestone);
  });
}

// ============================================
// CAREER
// ============================================
function populateCareer(lang = 'pt') {
  const grid = $('#careerGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  CAREER.forEach(c => {
    const card = document.createElement('div');
    card.className = 'career-card';
    card.style.cursor = 'pointer';
    
    const imgPath = c.img || `img/ranking/${c.id}.png`;
    const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23c9a33a' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%230a0a0a' font-size='14' font-weight='bold'%3E${c.title}%3C/text%3E%3C/svg%3E`;
    
    card.innerHTML = `
      <img src="${imgPath}" alt="${c.title}" loading="lazy" onerror="this.src='${placeholderSvg}'">
      <h4>${c.title}</h4>
      <p><strong>${c.prize}</strong></p>
      <small class="muted">Volume: R$ ${Number(c.volume).toLocaleString('pt-BR')}</small>
      <small class="muted">Diretos: ${c.directs} • Níveis: ${c.depth}</small>
    `;
    
    card.addEventListener('click', () => {
      openModal(c.title, `
        <img src="${imgPath}" alt="${c.title}" onerror="this.src='${placeholderSvg}'">
        <h4 style="color: var(--gold); margin: 16px 0;">Prêmio: ${c.prize}</h4>
        <p style="color: var(--muted); margin: 8px 0;">Volume necessário: <strong>R$ ${Number(c.volume).toLocaleString('pt-BR')}</strong></p>
        <p style="color: var(--muted); margin: 8px 0;">Diretos necessários: <strong>${c.directs}</strong></p>
        <p style="color: var(--muted); margin: 8px 0;">Profundidade de comissões: <strong>${c.depth} níveis</strong></p>
        ${c.infinite ? '<p style="color: var(--gold); margin: 12px 0; font-weight: 600;">🎯 Bônus infinito de ' + INFINITE_TRIPLO + '% em todos os níveis!</p>' : ''}
      `);
    });
    
    grid.appendChild(card);
  });

  const notes = $('#careerNotes');
  if (notes) {
    notes.textContent = CONTENT[lang].careerNotes;
  }
}

// ============================================
// COMMISSIONS
// ============================================
function populateCommissions(lang = 'pt') {
  const el = $('#commList');
  if (!el) return;
  
  el.innerHTML = '';
  
  COMMISSIONS.forEach((v, i) => {
    const row = document.createElement('div');
    row.textContent = `${i + 1}º nível — ${v}%`;
    el.appendChild(row);
  });

  const extra = document.createElement('div');
  extra.textContent = `Triplo Negro — +${INFINITE_TRIPLO}% (infinito)`;
  el.appendChild(extra);
}

// ============================================
// TAB SYSTEM
// ============================================
function initTabs() {
  const tabBtns = $$('.tab-btn');
  const tabContents = $$('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = $(`#tab-${targetTab}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// ============================================
// TOPBAR BEHAVIOR
// ============================================
function initTopbarBehavior() {
  const topbar = $('#topbar');
  const slides = $('#slides');
  
  if (!topbar || !slides) return;
  
  let lastScroll = 0;

  slides.addEventListener('scroll', () => {
    const currentScroll = slides.scrollTop;

    if (currentScroll > 100) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
    updateScrollProgress();
  }, { passive: true });
}

// ============================================
// EVENT BINDINGS
// ============================================
function bindEvents() {
  // Language toggle
  const langBtn = $('#toggleLang');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'pt' ? 'en' : 'pt';
      applyLanguage(currentLang);
      showToast(currentLang === 'pt' ? 'Idioma alterado para Português' : 'Language changed to English', 'success');
    });
  }

  // CTA buttons
  const ctaJoin = $('#ctaJoin');
  if (ctaJoin) {
    ctaJoin.addEventListener('click', () => {
      showToast('Obrigado! A equipe Summit entrará em contato em breve.', 'success');
    });
  }

  const finalJoin = $('#finalJoin');
  if (finalJoin) {
    finalJoin.addEventListener('click', () => {
      showToast('Obrigado! A equipe Summit entrará em contato em breve.', 'success');
    });
  }

  // Area do Cliente
  const areaCliente = $('#areaCliente');
  if (areaCliente) {
    areaCliente.addEventListener('click', () => {
      showToast('Área do Cliente em desenvolvimento...', 'success');
    });
  }

  // Calculator
  const calcBtn = $('#calc-btn');
  if (calcBtn) {
    calcBtn.addEventListener('click', calculateReturns);
  }

  // Enter key on calculator inputs
  $$('#calc-valor, #calc-meses').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') calculateReturns();
    });
  });

  // Scroll to section buttons
  $$('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-scroll-to');
      smoothScrollTo(`#${target}`);
    });
  });

  // Footer links
  $$('footer a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      smoothScrollTo(target);
    });
  });

  // Modal close
  const modalClose = $('#modalClose');
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  const modalOverlay = $('#modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') closeModal();
    });
  }

  // ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Mobile menu toggle
  const menuToggle = $('#menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      showToast('Menu mobile em desenvolvimento...', 'success');
    });
  }
}

// ============================================
// LOADING SCREEN
// ============================================
function hideLoadingScreen() {
  const overlay = $('#loadingOverlay');
  if (!overlay) return;
  
  setTimeout(() => {
    overlay.classList.add('hidden');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 600);
  }, 1000);
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
  try {
    console.log('🚀 Summit Global - Inicializando...');

    // Apply language
    applyLanguage(currentLang);

    // Initialize components
    initTabs();
    initTopbarBehavior();
    initScrollAnimations();
    bindEvents();

    // Hide loading after everything is ready
    hideLoadingScreen();

    // Make first slide visible immediately
    const firstSlide = $('.slide');
    if (firstSlide) {
      firstSlide.classList.add('visible');
    }

    console.log('✅ Summit Global - Pronto!');
  } catch (error) {
    console.error('❌ Erro na inicialização:', error);
    hideLoadingScreen();
  }
}

// ============================================
// START APPLICATION
// ============================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c🏔️ SUMMIT GLOBAL', 'color: #c9a33a; font-size: 24px; font-weight: bold;');
console.log('%cBem-vindo ao futuro da prosperidade digital!', 'color: #7e3ff2; font-size: 14px;');
console.log('%cInteressado em fazer parte? Entre em contato!', 'color: #9aa0a6; font-size: 12px;');