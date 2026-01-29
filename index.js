
// Datos Maestros
const productsData = [
    {
        id: 1,
        name: "Renta de Grúas Todo Terreno",
        shortDesc: "Broderson RT-300-2C, Grove RT700E y Terex RT 110 listas para maniobras.",
        longDesc: "Renta integral de grúas con operadores certificados para montaje industrial, obra civil y energías. Equipos todo terreno con alto alcance y capacidad para espacios abiertos o confinados.",
        images: [
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1545459720-aac8309b4ef5?auto=format&fit=crop&q=80&w=800"
        ],
        isCrane: true,
        cranes: [
            {
                model: "Grúa Todo Terreno Broderson RT-300-2C",
                specs: [
                    "Capacidad de carga: hasta 30,000 lb (13.6 toneladas)",
                    "Pluma telescópica de 4 secciones: alcance hasta 24 m (80 ft)",
                    "Altura máxima de gancho: 27 m (88 ft) con jib",
                    "Tracción 4×4 y dirección en las 4 ruedas para terrenos irregulares",
                    "Cabina ergonómica con controles precisos",
                    "Motor Cummins turbo diésel de 155 HP y transmisión automática"
                ],
                ideal: [
                    "Minería, patios de maniobras y espacios reducidos",
                    "Construcción e infraestructura",
                    "Montajes industriales",
                    "Plantas eléctricas, subestaciones, parques eólicos"
                ]
            },
            {
                model: "Grúa Todo Terreno Grove RT700E",
                specs: [
                    "Capacidad máxima de elevación: 50 toneladas (110,000 lb)",
                    "Pluma telescópica de 4 secciones: 10.7 m a 39 m (35 ft – 128 ft)",
                    "Jib adicional hasta 17 m (56 ft) para altura total de gancho de 56 m (183 ft)",
                    "Motor Cummins QSB6.7 turbo diésel, eficiente y confiable",
                    "Tracción 4×4 con dirección estándar, cruzada (crab) y 4 ruedas",
                    "Controles electrónicos con sistema LMI para máxima seguridad",
                    "Cabina climatizada y ergonómica con joystick de precisión"
                ],
                ideal: [
                    "Grandes maniobras en sitios complicados o terrenos difíciles",
                    "Proyectos de construcción pesada",
                    "Montaje de estructuras metálicas o tanques industriales",
                    "Parques eólicos y solares, refinerías, subestaciones eléctricas"
                ]
            },
            {
                model: "Grúa Todo Terreno Terex RT 110",
                specs: [
                    "Capacidad máxima de carga: 100 toneladas (110 US tons)",
                    "Pluma hidráulica de 5 secciones: 12 m a 47 m (39.4 ft – 154.2 ft)",
                    "Jib abatible opcional: hasta 17 m (56 ft) adicional de alcance",
                    "Altura máxima del gancho: hasta 64 m (210 ft)",
                    "Tracción total 4×4 con dirección en las 4 ruedas",
                    "Estabilizadores hidráulicos de alto desempeño",
                    "Motor diésel Cummins QSB6.7 con control de emisiones Tier 3",
                    "Cabina climatizada, rotatoria, con controles ergonómicos"
                ],
                ideal: [
                    "Zonas con terreno irregular, pantanoso o de difícil acceso",
                    "Montaje de estructuras metálicas pesadas y prefabricados",
                    "Instalación de equipos industriales, tanques, turbinas",
                    "Proyectos de obra civil, puentes, energía, minería o petroquímica"
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Recipientes a Presión",
        shortDesc: "Filtros de carbón, separadores de desfogues y filtración de agua cruda.",
        longDesc: "Recipientes a presión diseñados, fabricados y probados para servicios de gas, agua y químicos. Incluimos pruebas de inspección (hidrostáticas y NDT) para garantizar cumplimiento y seguridad.",
        images: [
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1581092323714-f06b12a86851?auto=format&fit=crop&q=80&w=800"
        ],
        features: [
            "Filtro de carbón para pulido de proceso",
            "Separador de desfogues de baja presión",
            "Filtro de agua cruda para sólidos y sedimentos",
            "Separador de desfogues de alta presión",
            "Diseño, fabricación y pruebas de inspección completas"
        ]
    },
    {
        id: 3,
        name: "Tanques de Almacenamiento Industriales",
        shortDesc: "Diseño, fabricación y mantenimiento de tanques verticales y horizontales.",
        longDesc: "Tanques para combustibles, agua y químicos bajo normas API/UL. Ofrecemos construcción en sitio, recubrimientos especializados y programas de mantenimiento para prolongar la vida útil.",
        images: [
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1562601579-599cdc8fab11?auto=format&fit=crop&q=80&w=800"
        ],
        features: [
            "Ingeniería y cálculos API 650 / UL-142",
            "Fabricación de tanques verticales y horizontales",
            "Mantenimiento preventivo y rehabilitación en sitio"
        ]
    },
    {
        id: 4,
        name: "Sector Automotriz",
        shortDesc: "Racks, sistemas de transportación y estructuras metálicas para OEMs y Tier 1.",
        longDesc: "Soluciones metálicas a la medida para líneas de producción automotriz. Integramos racks, transportadores y estructuras que optimizan flujo y seguridad en planta.",
        images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1580983135154-8c6351058229?auto=format&fit=crop&q=80&w=800"
        ],
        features: [
            "Racks industriales para manejo de partes",
            "Sistema de transportación con bandas y rodillos",
            "Estructuras metálicas para la industria automotriz"
        ]
    }
];

const awardsData = [
    {
        title: "ASME Estampado U",
        desc: "Certificación para recipientes a presión bajo código ASME con estampado U.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "ASME Estampado S",
        desc: "Certificación para calderas y componentes a presión bajo estampado S.",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "ASME Estampado R",
        desc: "Autorización para reparación y alteración de recipientes a presión (estampado R).",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "ISO 9001:2015",
        desc: "Sistema de gestión de calidad certificado para diseño, fabricación y servicio.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    }
];

const testimonialsData = [
    {
        quote: "La capacidad de maniobra de sus grúas Grove RT700E fue clave para el montaje de nuestros tanques.",
        name: "Ing. Ricardo S.",
        role: "Director de Planta"
    },
    {
        quote: "El sistema de racks que instalaron optimizó nuestro espacio de almacenamiento y el flujo en planta.",
        name: "Arq. Elena P.",
        role: "Gerente de Logística"
    },
    {
        quote: "Cumplieron con tiempos críticos y protocolos de seguridad en cada maniobra de izaje.",
        name: "Lic. Manuel G.",
        role: "Jefe de Seguridad"
    },
    {
        quote: "Los recipientes a presión pasaron las pruebas hidrostáticas sin observaciones.",
        name: "Ing. Karla T.",
        role: "Supervisor de Calidad"
    },
    {
        quote: "Excelente coordinación en maniobras complejas y comunicación continua durante el montaje.",
        name: "Ing. Roberto L.",
        role: "Project Manager"
    },
    {
        quote: "Los tanques API llegaron a tiempo y con un acabado superior a lo esperado.",
        name: "Ing. Sofía M.",
        role: "Compras Industriales"
    },
    {
        quote: "Atención técnica inmediata y soporte en sitio durante toda la instalación.",
        name: "Ing. Luis A.",
        role: "Mantenimiento"
    },
    {
        quote: "Redujimos paros gracias a su programa de mantenimiento preventivo.",
        name: "Ing. Daniela R.",
        role: "Operaciones"
    },
    {
        quote: "Transparencia total en la cotización y en los alcances del proyecto.",
        name: "Lic. Jorge V.",
        role: "Administración"
    },
    {
        quote: "Calidad certificada y un equipo profesional en cada etapa del servicio.",
        name: "Ing. Paulina C.",
        role: "Gerente de Ingeniería"
    }
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderHero();
    renderAbout();
    renderProducts();
    renderTimeline();
    renderTestimonials();
    renderContact();
    renderFooter();
    renderFloatingWhatsApp();
    setupScrollEffects();
});

// Componente: Navbar
function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <nav class="fixed top-0 w-full z-50 transition-all duration-300 py-4 bg-white/80 backdrop-blur-md border-b border-transparent shadow-sm" id="nav-inner">
            <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#"><img src="https://lh3.googleusercontent.com/a/ACg8ocL8z0P6J8H9U6zX8zG7N6y2R5T9V1B4M0L1K2J3=s288-c" alt="Logo" class="h-12 w-auto"></a>
                <div class="hidden md:flex gap-8 items-center">
                    <a href="#timeline-section" class="font-semibold text-gray-700 hover:text-primary">Historia</a>
                    <a href="#about" class="font-semibold text-gray-700 hover:text-primary">Acerca de nosotros</a>
                    <div class="relative group">
                        <button class="font-semibold text-gray-700 hover:text-primary inline-flex items-center gap-1">
                            Industrias
                            <span class="material-symbols-outlined text-base">expand_more</span>
                        </button>
                        <div class="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                            <div class="bg-white border border-gray-100 rounded-2xl shadow-xl min-w-[280px] p-2">
                                <a href="#productos" onclick="showIndustry('automotriz')" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-background-light rounded-xl">Industria automotriz</a>
                                <a href="#productos" onclick="showIndustry('gruas')" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-background-light rounded-xl">Grúas y maniobras de izaje</a>
                                <a href="#productos" onclick="showIndustry('fabricacion')" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-background-light rounded-xl">Fabricación y montajes industriales</a>
                            </div>
                        </div>
                    </div>
                    <a href="#productos" class="font-semibold text-gray-700 hover:text-primary">Servicios</a>
                    <a href="#contacto" class="font-semibold text-gray-700 hover:text-primary">Contacto</a>
                    <button class="bg-primary text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all">Cotizar Ahora</button>
                </div>
                <button class="md:hidden"><span class="material-symbols-outlined text-3xl">menu</span></button>
            </div>
        </nav>
    `;
}

// Componente: Hero
function renderHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
        <div class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div class="absolute inset-0 z-0 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600')"></div>
            <div class="relative z-10 text-center px-6 max-w-5xl">
                <span class="inline-block py-1 px-4 bg-primary/20 backdrop-blur-md border border-primary/30 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Excelencia Industrial</span>
                <h1 class="text-white text-5xl md:text-8xl font-black mb-8 leading-tight">Soluciones que Mueven la <span class="text-primary">Industria</span></h1>
                <p class="text-gray-200 text-lg md:text-2xl mb-12 max-w-3xl mx-auto">Más de 30 años ofreciendo infraestructura, almacenamiento y logística pesada de nivel global.</p>
                <div class="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="#productos" class="h-16 px-10 bg-primary text-white flex items-center justify-center rounded-2xl font-black text-lg hover:-translate-y-1 transition-all shadow-xl shadow-primary/30">Nuestros Servicios</a>
                    <a href="#contacto" class="h-16 px-10 bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center rounded-2xl font-black text-lg hover:bg-white/20 transition-all">Hablar con un Experto</a>
                </div>
            </div>
        </div>
    `;
}

// Componente: Sobre Nosotros
function renderAbout() {
    const about = document.getElementById('about');
    if (!about) return;
    about.className = "py-24 bg-white";
    about.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <span class="text-primary font-bold uppercase tracking-widest text-sm">Acerca de Nosotros</span>
                <h2 class="text-4xl md:text-5xl font-black leading-tight">Ingeniería y maniobras con precisión y confianza</h2>
                <p class="text-lg text-gray-600">Más de tres décadas diseñando, fabricando y montando soluciones industriales: grúas todo terreno, recipientes a presión, tanques de almacenamiento y estructuras para el sector automotriz.</p>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div class="p-5 bg-background-light rounded-2xl border border-gray-100">
                        <p class="text-sm font-black text-primary uppercase tracking-widest mb-1">Experiencia</p>
                        <p class="text-gray-800 font-bold">30+ años en proyectos industriales</p>
                    </div>
                    <div class="p-5 bg-background-light rounded-2xl border border-gray-100">
                        <p class="text-sm font-black text-primary uppercase tracking-widest mb-1">Cobertura</p>
                        <p class="text-gray-800 font-bold">México y LATAM</p>
                    </div>
                </div>
                <div class="space-y-3">
                    <p class="text-sm font-black uppercase tracking-widest text-primary">Calidad y valores</p>
                    <p class="text-gray-600 leading-relaxed">Servicio Industrial Cerbero S.A. de C.V. es una organización que proporciona servicios de mantenimiento, fabricación y construcción industrial, comprometidos con la satisfacción del cliente cumpliendo con los requisitos legales y reglamentos aplicables por medio de la mejora continua de su sistema de gestión de calidad.</p>
                </div>
                <div class="space-y-5">
                    <p class="text-sm font-black uppercase tracking-widest text-primary">Premios y Certificaciones</p>
                    <div class="space-y-4">
                        ${awardsData.map(award => `
                            <button class="w-full text-left flex items-start gap-5 group" onclick="openAwardModal('${award.title}', '${award.desc}', '${award.image}')">
                                <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/60 shadow-xl flex items-center justify-center ring-4 ring-primary/10 flex-shrink-0 group-hover:scale-105 transition-transform">
                                    <span class="material-symbols-outlined text-white text-4xl">workspace_premium</span>
                                </div>
                                <div>
                                    <p class="text-base font-black text-gray-900 group-hover:text-primary transition-colors">${award.title}</p>
                                    <p class="text-gray-600 text-sm leading-relaxed">${award.desc}</p>
                                    <span class="text-xs font-bold text-primary uppercase">Ver diploma</span>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="space-y-8">
                <div class="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 h-[260px] md:h-[420px]">
                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video de nuestros productos y servicios" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="w-full px-6 mt-16" id="mision-vision-valores">
            <div class="w-full rounded-[2rem] border border-gray-100 bg-gradient-to-br from-white via-background-light/60 to-white shadow-lg p-6 md:p-10">
                <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <p class="text-xl md:text-2xl font-black uppercase tracking-widest text-primary">Misión, visión y valores</p>
                    <p class="text-gray-500 text-sm">Nuestro compromiso y la forma en que trabajamos.</p>
                </div>
                <div class="grid gap-6 mt-10 lg:grid-cols-3">
                    <div class="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                        <p class="text-xs font-black uppercase tracking-widest text-primary mb-2">Misión</p>
                        <p class="text-gray-700 leading-relaxed">Ofrecer una amplia gama de soluciones industriales a las necesidades del cliente con calidad y valor en el servicio.</p>
                    </div>
                    <div class="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                        <p class="text-xs font-black uppercase tracking-widest text-primary mb-2">Visión</p>
                        <p class="text-gray-700 leading-relaxed">Ser una empresa global, responsable, que hace su aporte para una industria mejor.</p>
                    </div>
                    <div class="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                        <p class="text-xs font-black uppercase tracking-widest text-primary mb-3">Valores</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Confianza + Ética</span>
                            <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Transparencia + Integridad</span>
                            <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Responsabilidad + Pasión</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function openAwardModal(title, desc, image) {
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeAwardModal()"></div>
            <div class="bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <button onclick="closeAwardModal()" class="absolute top-4 right-4 size-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-all">
                    <span class="material-symbols-outlined">close</span>
                </button>
                <div class="grid md:grid-cols-2">
                    <div class="bg-gray-900">
                        <img src="${image}" alt="${title}" class="w-full h-full object-cover">
                    </div>
                    <div class="p-8 space-y-3">
                        <p class="text-sm font-black uppercase tracking-widest text-primary">Diploma</p>
                        <h3 class="text-2xl font-black">${title}</h3>
                        <p class="text-gray-600 leading-relaxed">${desc}</p>
                        <div class="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                            <span class="material-symbols-outlined text-base">workspace_premium</span>
                            <span>Certificación</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function closeAwardModal() {
    const container = document.getElementById('modal-container');
    container.innerHTML = '';
}

// Componente: Productos (Grid)
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.className = "py-20 bg-white";
    grid.innerHTML = `
        <div class="max-w-6xl mx-auto px-3 sm:px-4 md:px-5" id="productos">
            <div class="mb-12">
                <span class="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Portafolio</span>
                <h2 class="text-3xl md:text-4xl font-black">Servicios Especializados</h2>
            </div>
            <div class="mb-16 mt-4">
                <div id="service-bar" class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-cards-container"></div>
        </div>
    `;
    
    renderServiceBar();
    if (productsData.length) {
        setActiveServiceChip(productsData[0].id);
        renderFilteredProducts(productsData[0].id);
    }
}

function renderServiceBar() {
    const bar = document.getElementById('service-bar');
    if (!bar) return;
    bar.innerHTML = '';

    productsData.forEach(p => {
        const btn = document.createElement('button');
        btn.dataset.serviceId = String(p.id);
        btn.className = "service-chip flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 font-bold text-sm leading-tight text-center transition-all shadow-sm transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-md";
        btn.innerHTML = `<span class="material-symbols-outlined text-lg service-icon text-primary">inventory_2</span>${p.name}`;
        btn.onclick = () => {
            setActiveServiceChip(p.id);
            renderFilteredProducts(p.id);
        };
        bar.appendChild(btn);
    });
}

function showIndustry(industry) {
    if (industry === 'automotriz') {
        setActiveServiceChip(4);
        renderFilteredProducts(4);
        return;
    }
    if (industry === 'gruas') {
        setActiveServiceChip(1);
        renderFilteredProducts(1);
        return;
    }
    if (industry === 'fabricacion') {
        setActiveServiceChip(2);
        renderFilteredProducts(2);
        const container = document.getElementById('product-cards-container');
        const product = productsData.find(p => p.id === 3);
        if (container && product) {
            container.appendChild(createProductCard(product));
        }
    }
}

function setActiveServiceChip(id) {
    document.querySelectorAll('.service-chip').forEach(chip => {
        const icon = chip.querySelector('.service-icon');
        if (chip.dataset.serviceId === String(id)) {
            chip.classList.add('border-primary', 'shadow-md', 'scale-105');
            chip.classList.remove('border-gray-200');
            icon?.classList.add('text-primary');
            icon?.classList.remove('text-white');
        } else {
            chip.classList.remove('border-primary', 'shadow-md', 'scale-105');
            chip.classList.add('border-gray-200');
            icon?.classList.add('text-primary');
            icon?.classList.remove('text-white');
        }
    });
}

function renderFilteredProducts(id) {
    const container = document.getElementById('product-cards-container');
    if (!container) return;
    container.innerHTML = '';

    const product = productsData.find(p => p.id === id);
    if (product) {
        if (product.isCrane) {
            product.cranes.forEach((crane, idx) => {
                container.appendChild(createCraneCard(product, crane, idx));
            });
        } else {
            container.appendChild(createProductCard(product));
        }
    }
}

function createProductCard(p) {
    const card = document.createElement('div');
    card.id = `product-${p.id}`;
    card.className = "group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2";
    const highlight = p.isCrane
        ? `<div class="mt-5 space-y-4">
                ${p.cranes.map(c => `
                    <div class="bg-primary/5 border border-primary/20 px-5 py-4 rounded-2xl shadow-sm">
                        <div class="flex items-start gap-2 mb-3">
                            <span class="material-symbols-outlined text-primary text-lg">precision_manufacturing</span>
                            <p class="font-black text-primary text-base leading-tight">${c.model}</p>
                        </div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Características</p>
                        <ul class="space-y-2 mb-3">
                            ${c.specs.map(s => `<li class="flex items-start gap-2 text-sm text-gray-700"><span class="material-symbols-outlined text-primary text-base">check_circle</span>${s}</li>`).join('')}
                        </ul>
                        <p class="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Ideal para</p>
                        <div class="flex flex-wrap gap-2">
                            ${c.ideal.map(i => `<span class="px-3 py-1 bg-white border border-primary/20 rounded-full text-[11px] font-bold text-gray-700">${i}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
           </div>`
        : `<ul class="mt-5 space-y-2">
                ${p.features.map(f => `<li class="flex items-start gap-2 text-sm text-gray-700"><span class="material-symbols-outlined text-primary text-base">check_circle</span>${f}</li>`).join('')}
           </ul>`;

    card.innerHTML = `
        <div class="aspect-[16/10] overflow-hidden cursor-pointer">
            <img src="${p.images[0]}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        </div>
        <div class="p-8">
            <h3 class="text-2xl font-black mb-3 group-hover:text-primary transition-colors">${p.name}</h3>
            <p class="text-gray-700 font-medium mb-3">${p.shortDesc}</p>
            <p class="text-gray-500 text-sm leading-relaxed">${p.longDesc}</p>
            ${highlight}
            <button class="mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all" type="button">
                <span>Ver detalle</span>
                <span class="material-symbols-outlined font-bold">arrow_forward</span>
            </button>
        </div>
    `;
    card.onclick = () => openModal(p);
    return card;
}

function createCraneCard(product, crane, idx) {
    const card = document.createElement('div');
    card.className = "group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2";
    const image = product.images[idx % product.images.length] || product.images[0];
    card.innerHTML = `
        <div class="aspect-[16/10] overflow-hidden">
            <img src="${image}" alt="${crane.model}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        </div>
        <div class="p-8">
            <p class="text-xs font-black uppercase tracking-widest text-primary mb-2">${product.name}</p>
            <h3 class="text-2xl font-black mb-3 group-hover:text-primary transition-colors">${crane.model}</h3>
            <p class="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Características</p>
            <ul class="space-y-2 mb-3">
                ${crane.specs.map(s => `<li class="flex items-start gap-2 text-sm text-gray-700"><span class="material-symbols-outlined text-primary text-base">check_circle</span>${s}</li>`).join('')}
            </ul>
            <p class="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Ideal para</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${crane.ideal.map(i => `<span class="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-[11px] font-bold text-gray-700">${i}</span>`).join('')}
            </div>
        </div>
    `;
    return card;
}

// Lógica del Modal y Carrusel
let modalTimer;
function openModal(product) {
    setActiveServiceChip(product.id);
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="fixed inset-0 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm fade-in" onclick="closeModal()"></div>
            <div class="bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden shadow-2xl relative z-10 flex flex-col lg:flex-row slide-up animate-in zoom-in-95">
                <button onclick="closeModal()" class="absolute top-6 right-6 z-30 size-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                    <span class="material-symbols-outlined">close</span>
                </button>
                
                <!-- Carrusel Automático -->
                <div class="w-full lg:w-3/5 h-[300px] lg:h-auto relative bg-gray-900 overflow-hidden" id="modal-carousel">
                    ${product.images.map((img, i) => `
                        <img src="${img}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === 0 ? 'opacity-100' : 'opacity-0'}" id="slide-${i}">
                    `).join('')}
                    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" id="dots-container">
                        ${product.images.map((_, i) => `<div class="h-1.5 rounded-full transition-all ${i === 0 ? 'w-8 bg-primary' : 'w-2 bg-white/50'}"></div>`).join('')}
                    </div>
                </div>

                <!-- Contenido Informativo -->
                <div class="w-full lg:w-2/5 p-8 lg:p-12 modal-content-scroll scrollbar-hide">
                    <span class="text-primary font-black uppercase text-xs tracking-widest mb-4 block">Ficha Técnica</span>
                    <h3 class="text-3xl lg:text-4xl font-black mb-6">${product.name}</h3>
                    <p class="text-gray-600 text-lg mb-8 leading-relaxed">${product.longDesc}</p>
                    
                    ${product.isCrane ? renderCraneModels(product.cranes) : renderFeatures(product.features)}
                    
                    <div class="mt-12 pt-8 border-t border-gray-100">
                        <button class="w-full h-16 bg-primary text-white rounded-2xl font-black text-xl shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all">Cotizar ahora</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Iniciar Carrusel Automático
    let currentIdx = 0;
    if (product.images.length > 1) {
        modalTimer = setInterval(() => {
            const nextIdx = (currentIdx + 1) % product.images.length;
            document.getElementById(`slide-${currentIdx}`).style.opacity = '0';
            document.getElementById(`slide-${nextIdx}`).style.opacity = '1';
            
            const dots = document.getElementById('dots-container').children;
            dots[currentIdx].classList.replace('w-8', 'w-2');
            dots[currentIdx].classList.replace('bg-primary', 'bg-white/50');
            dots[nextIdx].classList.replace('w-2', 'w-8');
            dots[nextIdx].classList.replace('bg-white/50', 'bg-primary');
            
            currentIdx = nextIdx;
        }, 3500);
    }
}

function renderFeatures(features) {
    return `
        <div class="space-y-4">
            ${features.map(f => `
                <div class="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <span class="material-symbols-outlined text-primary">verified</span>
                    <span class="font-bold text-gray-700">${f}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderCraneModels(cranes) {
    return cranes.map(c => `
        <div class="mb-10 bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
            <h4 class="text-2xl font-black text-primary mb-6">${c.model}</h4>
            <div class="mb-6">
                <p class="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Especificaciones:</p>
                <ul class="space-y-2">
                    ${c.specs.map(s => `<li class="flex items-start gap-2 text-sm font-semibold text-gray-700 leading-relaxed"><span class="material-symbols-outlined text-sm text-primary">check_circle</span>${s}</li>`).join('')}
                </ul>
            </div>
            <div>
                <p class="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Ideal para:</p>
                <div class="flex flex-wrap gap-2">
                    ${c.ideal.map(i => `<span class="px-3 py-1 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-600">${i}</span>`).join('')}
                </div>
            </div>
            <button class="w-full mt-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-widest">Cotizar ${c.model}</button>
        </div>
    `).join('');
}

function closeModal() {
    document.getElementById('modal-container').innerHTML = '';
    clearInterval(modalTimer);
}

// Otros Componentes (Timeline, Testimonios, etc)
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.className = "py-24 bg-background-light";
    timeline.innerHTML = `
        <div class="max-w-7xl mx-auto px-6" id="timeline-section">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black">Nuestra Trayectoria</h2>
                <p class="text-gray-500 mt-3">Hitos clave desde la fundación hasta el liderazgo actual.</p>
            </div>
            <div class="relative">
                <div class="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-primary/20"></div>
                <div class="space-y-12">
                    ${renderTimelineItems()}
                </div>
            </div>
        </div>
    `;
}

function renderTimelineItems() {
    const items = [
        { year: "1990", title: "Fundación", desc: "Inicio en el sector metalmecánico con visión de transformar la infraestructura pesada del país." },
        { year: "1995", title: "Primer Producto", desc: "Entrega del primer proyecto de racks industriales a gran escala para logística nacional." },
        { year: "2005", title: "Hito 1: Expansión de Grúas", desc: "Se integra flota de grúas todo terreno para maniobras de alto tonelaje." },
        { year: "2015", title: "Hito 2: Recipientes a Presión", desc: "Certificación y fabricación bajo código ASME para procesos críticos." },
        { year: "2024", title: "Hito 3: Liderazgo Industrial", desc: "Socio estratégico en almacenamiento, maniobras y soluciones metálicas multisector." }
    ];

    return items.map((item, idx) => {
        const isLeft = idx % 2 === 0;
        const card = `
            <div class="bg-white rounded-[1.75rem] p-6 md:p-8 shadow-sm border border-gray-100">
                <div class="flex items-center gap-3 mb-3">
                    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-sm">${item.year}</span>
                    <h3 class="text-xl md:text-2xl font-black">${item.title}</h3>
                </div>
                <p class="text-gray-600 leading-relaxed">${item.desc}</p>
            </div>
        `;

        return `
            <div class="relative grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div class="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 size-5 rounded-full bg-white border-2 border-primary shadow-md"></div>
                ${isLeft ? `${card}<div></div>` : `<div></div>${card}`}
            </div>
        `;
    }).join('');
}

function renderContact() {
    const section = document.getElementById('contact');
    section.className = "py-24 bg-white";
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-6" id="contacto">
            <div class="bg-background-light rounded-[3.5rem] p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
                <div class="space-y-8">
                    <div>
                        <h2 class="text-5xl font-black mb-4">Hablemos de tu Proyecto</h2>
                        <p class="text-xl text-gray-500">Nuestro equipo técnico está listo para cotizar y asesorar su requerimiento.</p>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-start gap-4">
                            <span class="material-symbols-outlined text-primary text-4xl">location_on</span>
                            <div>
                                <p class="text-lg font-bold text-gray-800">Av. Industria 123, Parque Industrial, CDMX</p>
                                <p class="text-gray-500">CP 01234, México</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="material-symbols-outlined text-primary text-4xl">call</span>
                            <div>
                                <p class="text-lg font-bold text-gray-800">+52 55 5123 4567</p>
                                <p class="text-gray-500">+52 55 5123 4568</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="material-symbols-outlined text-primary text-4xl">mail</span>
                            <div>
                                <p class="text-lg font-bold text-gray-800">ventas@cerbero.com</p>
                                <p class="text-gray-800 font-bold">soporte@cerbero.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            title="Mapa de ubicación"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.391551566807!2d-99.18436762470143!3d19.437646181850473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3c1d7c2f5d%3A0xb3a84f46c2404e0d!2sParque%20Industrial!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                            width="100%"
                            height="280"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <form class="grid grid-cols-1 gap-5">
                    <input type="text" placeholder="Nombre" class="h-14 rounded-2xl border border-gray-200 shadow-sm px-4 focus:ring-2 focus:ring-primary/40 focus:outline-none">
                    <input type="text" placeholder="Empresa" class="h-14 rounded-2xl border border-gray-200 shadow-sm px-4 focus:ring-2 focus:ring-primary/40 focus:outline-none">
                    <input type="email" placeholder="Correo electrónico" class="h-14 rounded-2xl border border-gray-200 shadow-sm px-4 focus:ring-2 focus:ring-primary/40 focus:outline-none">
                    <textarea placeholder="Mensaje" class="h-32 rounded-2xl border border-gray-200 shadow-sm p-4 focus:ring-2 focus:ring-primary/40 focus:outline-none"></textarea>
                    <button type="button" class="h-14 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">Enviar mensaje</button>
                </form>
            </div>
        </div>
    `;
}

function renderTestimonials() {
    const section = document.getElementById('testimonials');
    section.className = "py-24 bg-white border-t border-gray-50";
    const slides = [];
    for (let i = 0; i < testimonialsData.length; i += 2) {
        slides.push(testimonialsData.slice(i, i + 2));
    }
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-end justify-between gap-6 mb-10">
                <div>
                    <p class="text-sm font-black uppercase tracking-widest text-primary">Opiniones</p>
                    <h2 class="text-4xl md:text-5xl font-black">Lo que dicen nuestros clientes</h2>
                </div>
                <div class="hidden md:flex items-center gap-3">
                    <button id="testimonials-prev" class="size-12 rounded-2xl border border-gray-200 bg-white text-gray-700 hover:text-primary hover:border-primary transition-all">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button id="testimonials-next" class="size-12 rounded-2xl border border-gray-200 bg-white text-gray-700 hover:text-primary hover:border-primary transition-all">
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
            <div class="relative">
                <div class="overflow-hidden">
                    <div id="testimonials-track" class="flex transition-transform duration-700 ease-out">
                        ${slides.map(group => `
                            <div class="min-w-full grid md:grid-cols-2 gap-8 px-1">
                                ${group.map(item => `
                                    <div class="p-8 md:p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                        <p class="text-xl md:text-2xl italic font-medium mb-8 text-gray-700">"${item.quote}"</p>
                                        <div class="flex items-center gap-4">
                                            <div class="size-14 rounded-2xl bg-primary/20"></div>
                                            <div>
                                                <p class="font-black">${item.name}</p>
                                                <p class="text-sm text-gray-500">${item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="flex md:hidden items-center justify-center gap-3 mt-6">
                    <button id="testimonials-prev-mobile" class="size-12 rounded-2xl border border-gray-200 bg-white text-gray-700 hover:text-primary hover:border-primary transition-all">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button id="testimonials-next-mobile" class="size-12 rounded-2xl border border-gray-200 bg-white text-gray-700 hover:text-primary hover:border-primary transition-all">
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
                <div class="flex justify-center gap-2 mt-6" id="testimonials-dots">
                    ${slides.map((_, idx) => `
                        <button class="testimonials-dot h-2 rounded-full transition-all ${idx === 0 ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}" data-index="${idx}" aria-label="Ir a opiniones ${idx + 1}"></button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    setupTestimonialsCarousel(slides.length);
}

let testimonialsTimer;
function setupTestimonialsCarousel(totalSlides) {
    const track = document.getElementById('testimonials-track');
    const dots = Array.from(document.querySelectorAll('.testimonials-dot'));
    const prev = document.getElementById('testimonials-prev');
    const next = document.getElementById('testimonials-next');
    const prevMobile = document.getElementById('testimonials-prev-mobile');
    const nextMobile = document.getElementById('testimonials-next-mobile');
    if (!track || !dots.length) return;

    let index = 0;
    const update = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-primary', i === index);
            dot.classList.toggle('w-8', i === index);
            dot.classList.toggle('bg-gray-300', i !== index);
            dot.classList.toggle('w-2', i !== index);
        });
    };
    const go = (dir) => {
        index = (index + dir + totalSlides) % totalSlides;
        update();
    };

    prev?.addEventListener('click', () => go(-1));
    next?.addEventListener('click', () => go(1));
    prevMobile?.addEventListener('click', () => go(-1));
    nextMobile?.addEventListener('click', () => go(1));
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            index = Number(dot.dataset.index) || 0;
            update();
        });
    });

    clearInterval(testimonialsTimer);
    testimonialsTimer = setInterval(() => go(1), 6500);
}

function renderFooter() {
    const footer = document.getElementById('footer');
    footer.className = "py-16 bg-white border-t border-gray-100";
    footer.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            <img src="https://lh3.googleusercontent.com/a/ACg8ocL8z0P6J8H9U6zX8zG7N6y2R5T9V1B4M0L1K2J3=s288-c" alt="Logo" class="h-16 w-auto opacity-50 grayscale">
            <p class="text-gray-400 font-bold uppercase tracking-widest text-sm">© 2024 Cerbero Servicio Industrial. Calidad sin límites.</p>
        </div>
    `;
}

function renderFloatingWhatsApp() {
    const container = document.getElementById('whatsapp-button');
    const phone = "525551234567";
    const msg = encodeURIComponent("Hola, requiero una cotización técnica.");
    container.innerHTML = `
        <a href="https://wa.me/${phone}?text=${msg}" target="_blank" class="fixed bottom-8 right-8 z-[90] size-16 bg-[#25D366] text-white rounded-[1.5rem] shadow-2xl whatsapp-pulse flex items-center justify-center hover:scale-110 transition-all">
            <svg class="size-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.625 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
    `;
}

function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('nav-inner');
        if (window.scrollY > 50) {
            nav.classList.add('py-2', 'bg-white/95', 'shadow-lg');
            nav.classList.remove('py-4', 'bg-white/80');
        } else {
            nav.classList.add('py-4', 'bg-white/80');
            nav.classList.remove('py-2', 'bg-white/95', 'shadow-lg');
        }
    });
}
