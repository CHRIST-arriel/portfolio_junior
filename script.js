/**
 * PORTFOLIO — KONAN LEON JUNIOR
 * Cursor · Mobile Menu · i18n FR/EN · Scroll Reveal · Stats Counter · Three.js Hero
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. EMAILJS INIT --- */
    // ⚠️ Remplacez les valeurs ci-dessous par vos propres IDs EmailJS
    // (https://www.emailjs.com → Account → API Keys)
    const EMAILJS_PUBLIC_KEY  = 'VOTRE_PUBLIC_KEY';   // ex: 'aB1cD2eF3gH4iJ5k'
    const EMAILJS_SERVICE_ID  = 'VOTRE_SERVICE_ID';   // ex: 'service_xxxxxxx'
    const EMAILJS_TEMPLATE_ID = 'VOTRE_TEMPLATE_ID';  // ex: 'template_xxxxxxx'
    emailjs.init(EMAILJS_PUBLIC_KEY);

    /* --- 2. MOBILE MENU & STICKY NAV --- */
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Sticky nav logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('nav-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            mobileBtn.querySelector('i').classList.remove('fa-times');
            mobileBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    /* --- 3. TRANSLATION (i18n) --- */
    const i18n = {
        fr: {
            navAbout: "À propos", navSkills: "Compétences", navProjects: "Projets",
            navServices: "Services", navContact: "Contact",
            heroBadge: "Ingénieur Bâtiment & Génie Civil",
            heroSubtitle: "Réaliser des structures durables, alliant rigueur technique et vision innovante.",
            btnProjects: "Voir mes projets", btnContact: "Me contacter",
            aboutEyebrow: "Qui suis-je ?", aboutTitle: "À propos de moi",
            aboutP1: "Fort de 3 années d'expérience en ingénierie civile, je me spécialise dans la conception et le suivi de projets de construction complexes. Ma philosophie : la qualité doit toujours primer sur la quantité.",
            aboutP2: "J'accompagne les entreprises et les particuliers pour concrétiser leurs visions architecturales tout en garantissant la sécurité, l'optimisation des coûts et le respect des délais.",
            expLabel: "ans d'expérience",
            statProjects: "Projets livrés", statSatisfaction: "Satisfaction client", statYears: "Ans d'expérience",
            value1: "Rigueur", value2: "Innovation", value3: "Terrain",
            skillsEyebrow: "Expertise", skillsTitle: "Mes Compétences",
            skillsTechTitle: "Techniques", skillsSoftTitle: "Qualités Humaines",
            soft1: "Gestion complète de chantier", soft2: "Coordination d'équipes et sous-traitants",
            soft3: "Respect strict des délais", soft4: "Culture de la sécurité (HSE)", soft5: "Résolution de problèmes complexes",
            projectsEyebrow: "Portfolio", projectsTitle: "Réalisations Récentes",
            projectsSubtitle: "Une sélection de travaux mettant en valeur mon expertise technique.",
            proj1Type: "Construction Neuve", proj1Title: "Bâtiment administratif R+4", proj1Loc: "Riviera, Côte d'Ivoire",
            proj1Desc: "Suivi complet de la structure en béton armé pour un immeuble de 4 étages. Coordination des plannings et contrôle qualité.",
            proj2Type: "Construction Neuve", proj2Title: "Villa duplex", proj2Loc: "Djorobité, Côte d'Ivoire",
            proj2Desc: "Supervision du gros œuvre et coordination des corps d’état secondaires pour la construction d’une villa duplex résidentielle.",
            proj3Type: "Construction Neuve", proj3Title: "Clinique", proj3Loc: "Marseille, France",
            proj3Desc: "Conception technique, calcul de structures et suivi de chantier pour un établissement de santé moderne aux normes médicales strictes.",
            servicesEyebrow: "Ce que je fais", servicesTitle: "Mes Services",
            serv1Title: "Construction Neuve", serv1Desc: "Étude et exécution de fondations, structures béton, charpentes, pour tout type de bâtiment.",
            serv2Title: "Rénovation & Restructuration", serv2Desc: "Modification de structures existantes, reprises en sous-œuvre et réhabilitation complète.",
            serv3Title: "Suivi de Chantier", serv3Desc: "Pilotage OPPBC, gestion des sous-traitants, respect des budgets et livraisons dans les temps.",
            serv4Title: "Étude & Expertise", serv4Desc: "Audits techniques, modélisation BIM 3D (Revit), calculs de structures sécurisées.",
            contactEyebrow: "Parlons de votre projet", contactTitle: "Me contacter",
            contactReady: "Prêt à collaborer ?",
            contactText: "Que vous soyez une entreprise à la recherche de nouvelles compétences ou un particulier lançant son projet, discutons-en.",
            contactLoc: "Paris & Déplacements France/Int.",
            formName: "Votre nom complet", formEmail: "Votre adresse email", formMessage: "Votre message",
            btnSend: "Envoyer le message", footerTagline: "Ingénieur Bâtiment & Génie Civil",
            copyright: "Tous droits réservés."
        },
        en: {
            navAbout: "About", navSkills: "Skills", navProjects: "Projects",
            navServices: "Services", navContact: "Contact",
            heroBadge: "Civil & Building Engineer",
            heroSubtitle: "Building sustainable structures, combining technical rigor and innovative vision.",
            btnProjects: "View my work", btnContact: "Contact me",
            aboutEyebrow: "Who am I?", aboutTitle: "About me",
            aboutP1: "With 3 years of experience in civil engineering, I specialize in the design and supervision of complex construction projects. My philosophy: quality must always take precedence over quantity.",
            aboutP2: "I support companies and individuals in bringing their architectural visions to life while ensuring safety, cost optimization, and adherence to deadlines.",
            expLabel: "years of experience",
            statProjects: "Projects delivered", statSatisfaction: "Client satisfaction", statYears: "Years of experience",
            value1: "Rigor", value2: "Innovation", value3: "Field Work",
            skillsEyebrow: "Expertise", skillsTitle: "My Skills",
            skillsTechTitle: "Technical", skillsSoftTitle: "Soft Skills",
            soft1: "Complete site management", soft2: "Team & subcontractor coordination",
            soft3: "Strict adherence to deadlines", soft4: "Safety culture (HSE)", soft5: "Complex problem solving",
            projectsEyebrow: "Portfolio", projectsTitle: "Recent Works",
            projectsSubtitle: "A selection of projects highlighting my technical expertise.",
            proj1Type: "New Construction", proj1Title: "R+4 Administrative Building", proj1Loc: "Riviera, Côte d'Ivoire",
            proj1Desc: "Complete supervision of the reinforced concrete structure for a 4-story building. Scheduling coordination and quality control.",
            proj2Type: "New Construction", proj2Title: "Duplex Villa", proj2Loc: "Djorobité, Côte d'Ivoire",
            proj2Desc: "Supervision of construction works, structural alignment, and secondary trade coordination for a residential duplex villa.",
            proj3Type: "New Construction", proj3Title: "Clinic", proj3Loc: "Marseille, France",
            proj3Desc: "Structural engineering design, concrete calculation, and construction supervision for a modern healthcare facility.",
            servicesEyebrow: "What I do", servicesTitle: "My Services",
            serv1Title: "New Construction", serv1Desc: "Study and execution of foundations, concrete structures, frameworks for any type of building.",
            serv2Title: "Renovation & Restructuring", serv2Desc: "Modification of existing structures, underpinning, and complete rehabilitation.",
            serv3Title: "Site Supervision", serv3Desc: "Site management, subcontractor handling, budget compliance, and on-time delivery.",
            serv4Title: "Study & Expertise", serv4Desc: "Technical audits, 3D BIM modeling (Revit), secure structural calculations.",
            contactEyebrow: "Let's talk about your project", contactTitle: "Contact Me",
            contactReady: "Ready to collaborate?",
            contactText: "Whether you are a company looking for new skills or an individual launching a project, let's discuss it.",
            contactLoc: "Paris & Travel France/Int.",
            formName: "Your full name", formEmail: "Your email address", formMessage: "Your message",
            btnSend: "Send Message", footerTagline: "Civil & Building Engineer",
            copyright: "All rights reserved."
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    let currentLang = 'fr';

    function updateLanguage(lang) {
        currentLang = lang;
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key]) {
                // If the element has children like icons, preserve them by replacing only text nodes
                // For simplicity here, most elements are just text. If HTML inside, we use innerHTML carefully
                // Let's just do textContent for most, or innerHTML if needed.
                // Our HTML setup didn't wrap icons inside the data-i18n span, so textContent is fine.
                el.textContent = i18n[lang][key];
            }
        });

        // Update button states
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    /* --- 4. SCROLL REVEAL --- */
    const revealEls = document.querySelectorAll(
        '.section-header, .about-image-col, .about-text, .skills-card, .project-card, .service-item'
    );
    revealEls.forEach((el, i) => {
        el.classList.add('reveal');
        if (el.classList.contains('project-card') || el.classList.contains('service-item')) {
            el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        }
    });
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('skills-card')) {
                    entry.target.querySelectorAll('.progress').forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });
                }
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObserver.observe(el));

    /* --- 5. STATS COUNTER ANIMATION --- */
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    const statsSection = document.getElementById('about');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
            statsAnimated = true;
            setTimeout(() => {
                statNumbers.forEach(el => {
                    const target = parseInt(el.getAttribute('data-target'), 10);
                    const steps  = 60;
                    const inc    = target / steps;
                    let current  = 0;
                    const timer  = setInterval(() => {
                        current = Math.min(current + inc, target);
                        el.textContent = Math.round(current);
                        if (current >= target) clearInterval(timer);
                    }, 25);
                });
            }, 200);
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.25 });

    if (statsSection) statsObserver.observe(statsSection);


    /* --- 6. THREE.JS 3D BUILDING ANIMATION --- */
    initThreeJSAnimation();
    initService3DIcons();
    initProject3DScenes();

    /* --- 7. FOOTER YEAR & FORM --- */
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        const status  = document.getElementById('formStatus');
        const btn     = e.target.querySelector('button[type="submit"]');
        const isEn    = currentLang === 'en';

        // Loading state
        btn.disabled = true;
        btn.textContent = isEn ? 'Sending…' : 'Envoi en cours…';
        status.textContent = '';

        const templateParams = {
            from_name:    document.getElementById('name').value,
            from_email:   document.getElementById('email').value,
            message:      document.getElementById('message').value,
            to_email:     'kaelji929@gmail.com'
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                status.textContent = isEn ? '✓ Thank you! Message sent.' : '✓ Merci ! Message envoyé.';
                status.style.color = '#2e7d52';
                e.target.reset();
                setTimeout(() => { status.textContent = ''; }, 6000);
            })
            .catch(err => {
                console.error('EmailJS error:', err);
                status.textContent = isEn
                    ? '✗ Send failed. Please try again or email directly.'
                    : '✗ Échec de l\'envoi. Réessayez ou contactez-moi directement.';
                status.style.color = '#c0392b';
            })
            .finally(() => {
                btn.disabled = false;
                btn.textContent = isEn ? 'Send Message' : 'Envoyer le message';
            });
    });

});





/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║   CINEMATIC 3D NEIGHBOURHOOD — Three.js                     ║
 * ║   • Vrais bâtiments architecturaux (maisons + immeubles)    ║
 * ║   • Toits en pente, fenêtres, portes, cheminées, balcons    ║
 * ║   • Mur de clôture, arbres, voirie                          ║
 * ║   • Animation de construction fluide par étages             ║
 * ║   • Particules de chantier + spotlight mobile              ║
 * ║   • Orbite douce + parallaxe souris                         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
function initThreeJSAnimation() {
    if (typeof THREE === 'undefined') { console.warn('Three.js not loaded.'); return; }
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    /* ── SCENE ── */
    const scene = new THREE.Scene();
    scene.background = null;
    scene.fog = new THREE.FogExp2(0xc8d8e8, 0.012);

    /* ── CAMERA ── */
    const W = window.innerWidth, H = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(48, W / H, 0.1, 600);
    camera.position.set(0, -6, 110);
    camera.lookAt(0, 10, 0);

    /* ── RENDERER ── */
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    /* ── LUMIÈRES ── */
    scene.add(new THREE.AmbientLight(0xe8f0f8, 0.7));

    const sun = new THREE.DirectionalLight(0xfff5e0, 1.4);
    sun.position.set(40, 70, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0xb0ccff, 0.5);
    fill.position.set(-30, 20, -20);
    scene.add(fill);

    const spot = new THREE.SpotLight(0x7bbfff, 10, 90, Math.PI / 9, 0.45, 1.5);
    spot.position.set(8, 4, 14);
    spot.target.position.set(0, 0, 0);
    scene.add(spot); scene.add(spot.target);

    /* ── MATÉRIAUX ── */
    const M = {
        wall:    new THREE.MeshStandardMaterial({ color: 0xe8dfd0, roughness: 0.9, metalness: 0.02 }),
        wallB:   new THREE.MeshStandardMaterial({ color: 0xd4caba, roughness: 0.85, metalness: 0.02 }),
        wallC:   new THREE.MeshStandardMaterial({ color: 0xc8d5d0, roughness: 0.88, metalness: 0.03 }),
        roofRed: new THREE.MeshStandardMaterial({ color: 0xa04030, roughness: 0.8 }),
        roofGray:new THREE.MeshStandardMaterial({ color: 0x8090a0, roughness: 0.75 }),
        roofSlate:new THREE.MeshStandardMaterial({ color: 0x556677, roughness: 0.7 }),
        glass:   new THREE.MeshStandardMaterial({ color: 0x90c0e8, roughness: 0.05, metalness: 0.7, transparent: true, opacity: 0.6 }),
        frame:   new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }),
        door:    new THREE.MeshStandardMaterial({ color: 0x5a3a1a, roughness: 0.7 }),
        chimney: new THREE.MeshStandardMaterial({ color: 0xb87040, roughness: 0.9 }),
        concrete:new THREE.MeshStandardMaterial({ color: 0xcdd6de, roughness: 0.85, metalness: 0.05 }),
        glass2:  new THREE.MeshStandardMaterial({ color: 0xaad0ee, roughness: 0.05, metalness: 0.65, transparent: true, opacity: 0.5 }),
        ground:  new THREE.MeshStandardMaterial({ color: 0xc8d4b8, roughness: 1 }),
        road:    new THREE.MeshStandardMaterial({ color: 0x8890a0, roughness: 0.95 }),
        sidewalk:new THREE.MeshStandardMaterial({ color: 0xd0c8bc, roughness: 0.9 }),
        edge:    new THREE.LineBasicMaterial({ color: 0x4A6FA5, transparent: true, opacity: 0.6 }),
        edgeG:   new THREE.LineBasicMaterial({ color: 0x88bbff, transparent: true, opacity: 0.35 }),
        balcony: new THREE.MeshStandardMaterial({ color: 0xbfc8c8, roughness: 0.7, metalness: 0.2 }),
        foliage: new THREE.MeshStandardMaterial({ color: 0x4a8040, roughness: 1 }),
        trunk:   new THREE.MeshStandardMaterial({ color: 0x8b5e3c, roughness: 1 }),
    };

    /* ── HELPERS ── */
    function box(w, h, d, mat) {
        const g = new THREE.BoxGeometry(w, h, d);
        const m = new THREE.Mesh(g, mat);
        m.castShadow = true; m.receiveShadow = true;
        return m;
    }
    function wireBox(mesh) {
        const wg = new THREE.EdgesGeometry(mesh.geometry);
        mesh.add(new THREE.LineSegments(wg, M.edge));
        return mesh;
    }

    /* ── SOL, ROUTE, TROTTOIR ── */
    const terrain = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), M.ground);
    terrain.rotation.x = -Math.PI / 2; terrain.position.y = -0.5; terrain.receiveShadow = true;
    scene.add(terrain);

    // Route centrale
    const road = new THREE.Mesh(new THREE.PlaneGeometry(12, 180), M.road);
    road.rotation.x = -Math.PI / 2; road.position.set(0, -0.48, 0);
    scene.add(road);

    // Lignes de marquage
    for (let i = -5; i <= 5; i++) {
        const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 4), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }));
        stripe.rotation.x = -Math.PI / 2; stripe.position.set(0, -0.47, i * 8);
        scene.add(stripe);
    }

    // Trottoirs
    [-7.2, 7.2].forEach(xOff => {
        const sw = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 180), M.sidewalk);
        sw.rotation.x = -Math.PI / 2; sw.position.set(xOff, -0.46, 0);
        scene.add(sw);
    });

    /* ── GRILLE HOLOGRAPHIQUE (plan) ── */
    const grid = new THREE.GridHelper(120, 40, 0x4A6FA5, 0x6688aa);
    grid.material.transparent = true; grid.material.opacity = 0.12;
    grid.position.y = -0.45; scene.add(grid);

    /* ================================================================
       CONSTRUCTEUR DE BÂTIMENTS
       ================================================================ */

    // Tous les bâtiments animés
    const allBuildings = []; // { group, parts:[], startDelay }

    /* ── Maison individuelle (villa / pavillon) ──
       Corps + toit en pente (prisme) + cheminée + fenêtres + porte + garage éventuel */
    function makeHouse(opts) {
        const { x, z, w = 8, d = 6, h = 4, wallMat = M.wall, roofMat = M.roofRed,
                hasGarage = false, hasChimney = true, angle = 0 } = opts;
        const group = new THREE.Group();
        group.position.set(x, 0, z);
        group.rotation.y = angle;
        scene.add(group);
        const parts = [];

        // Corps principal
        const bodyGeo = new THREE.BoxGeometry(w, h, d);
        const body = new THREE.Mesh(bodyGeo, wallMat);
        body.position.y = h / 2;
        body.castShadow = true; body.receiveShadow = true;
        body.add(new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo), M.edge));
        group.add(body); parts.push(body);

        // Toit en pente (prisme triangulaire = ExtrudeGeometry ou CylinderGeometry tronqué)
        // On utilise un CylinderGeometry avec 2 segments radiaux = prisme
        const roofH = h * 0.55;
        const roofGeo = new THREE.CylinderGeometry(0, w * 0.62, roofH, 4, 1);
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.rotation.y = Math.PI / 4;
        roof.position.y = h + roofH / 2;
        roof.castShadow = true;
        roof.add(new THREE.LineSegments(new THREE.EdgesGeometry(roofGeo), M.edgeG));
        group.add(roof); parts.push(roof);

        // Cheminée
        if (hasChimney) {
            const chH = 1.5 + Math.random() * 0.8;
            const ch = box(0.5, chH, 0.5, M.chimney);
            ch.position.set(w * 0.2, h + chH / 2, d * 0.1);
            group.add(ch); parts.push(ch);
            // Petite dalle de couronnement
            const cap = box(0.7, 0.12, 0.7, M.chimney);
            cap.position.set(w * 0.2, h + chH + 0.06, d * 0.1);
            group.add(cap); parts.push(cap);
        }

        // Fenêtres (avant)
        [-w * 0.25, w * 0.25].forEach(xw => {
            const frame = box(1.2, 1.4, 0.12, M.frame);
            frame.position.set(xw, h * 0.55, d / 2 + 0.07);
            group.add(frame); parts.push(frame);
            const glass = box(0.95, 1.1, 0.08, M.glass);
            glass.position.set(xw, h * 0.55, d / 2 + 0.12);
            group.add(glass); parts.push(glass);
        });

        // Porte
        const door = box(1.0, 2.0, 0.1, M.door);
        door.position.set(0, 1.0, d / 2 + 0.07);
        group.add(door); parts.push(door);

        // Garage latéral
        if (hasGarage) {
            const gW = 3.5, gH = 2.6, gD = d * 0.85;
            const garageBody = box(gW, gH, gD, wallMat);
            garageBody.position.set(-w / 2 - gW / 2, gH / 2, -d * 0.08);
            garageBody.castShadow = true;
            group.add(garageBody); parts.push(garageBody);
            // Toit plat garage
            const gRoof = box(gW + 0.3, 0.25, gD + 0.3, M.roofGray);
            gRoof.position.set(-w / 2 - gW / 2, gH + 0.125, -d * 0.08);
            group.add(gRoof); parts.push(gRoof);
            // Porte de garage
            const gd = box(2.8, 2.0, 0.08, M.frame);
            gd.position.set(-w / 2 - gW / 2, 1.0, gD / 2 + 0.06);
            group.add(gd); parts.push(gd);
        }

        // Petite clôture devant
        for (let fi = 0; fi < Math.round(w) + 1; fi++) {
            const post = box(0.12, 0.9, 0.12, M.frame);
            post.position.set(-w / 2 + fi * (w / Math.round(w)), 0.45, d / 2 + 1.0);
            group.add(post); parts.push(post);
        }
        // Traverse de clôture
        const fence = box(w + 0.1, 0.08, 0.08, M.frame);
        fence.position.set(0, 0.75, d / 2 + 1.0);
        group.add(fence); parts.push(fence);

        // Cacher toutes les pièces initialement
        parts.forEach(p => { p.visible = false; });
        return { group, parts };
    }

    /* ── Immeuble résidentiel (R+3 à R+8) ──
       Étages superposés avec fenêtres et balcons */
    function makeApartmentBlock(opts) {
        const { x, z, w = 9, d = 7, floors = 5, wallMat = M.concrete,
                hasBalcony = true, angle = 0 } = opts;
        const group = new THREE.Group();
        group.position.set(x, 0, z);
        group.rotation.y = angle;
        scene.add(group);
        const parts = [];
        const floorH = 3.2;

        for (let i = 0; i < floors; i++) {
            // Dalle de plancher
            const slab = box(w, 0.3, d, wallMat.clone ? wallMat.clone() : wallMat);
            slab.position.y = i * floorH;
            group.add(slab); parts.push(slab);

            // Façade avant
            const facade = box(w, floorH - 0.3, 0.35, wallMat.clone ? wallMat.clone() : wallMat);
            facade.position.y = i * floorH + (floorH - 0.3) / 2 + 0.3;
            facade.position.z = d / 2 - 0.018;
            group.add(facade); parts.push(facade);

            // Façade arrière / latérales légères
            const back = box(w, floorH - 0.3, 0.3, wallMat.clone ? wallMat.clone() : wallMat);
            back.position.y = facade.position.y;
            back.position.z = -d / 2 + 0.015;
            group.add(back); parts.push(back);
            [-w / 2, w / 2].forEach(xs => {
                const side = box(0.3, floorH - 0.3, d, wallMat.clone ? wallMat.clone() : wallMat);
                side.position.set(xs, facade.position.y, 0);
                group.add(side); parts.push(side);
            });

            // Fenêtres sur la façade avant
            const winCols = Math.floor(w / 2.5);
            for (let c = 0; c < winCols; c++) {
                const wx = -w / 2 + 1.5 + c * (w - 2) / (winCols - 1 || 1);
                const wFrame = box(1.1, 1.5, 0.09, M.frame);
                wFrame.position.set(wx, i * floorH + floorH * 0.55, d / 2 + 0.22);
                group.add(wFrame); parts.push(wFrame);
                const wGlass = box(0.85, 1.2, 0.06, M.glass2);
                wGlass.position.set(wx, i * floorH + floorH * 0.55, d / 2 + 0.27);
                group.add(wGlass); parts.push(wGlass);
            }

            // Balcons (tous les 2 étages)
            if (hasBalcony && i > 0 && i % 2 === 0) {
                const bSlab = box(w - 1, 0.15, 1.2, M.balcony);
                bSlab.position.set(0, i * floorH + 0.15, d / 2 + 0.6);
                group.add(bSlab); parts.push(bSlab);
                // Garde-corps
                for (let br = 0; br < 5; br++) {
                    const rail = box(0.08, 0.9, 0.08, M.frame);
                    rail.position.set(-w / 2 + 0.8 + br * ((w - 2) / 4), i * floorH + 0.8, d / 2 + 1.15);
                    group.add(rail); parts.push(rail);
                }
                const topRail = box(w - 0.8, 0.07, 0.07, M.frame);
                topRail.position.set(0, i * floorH + 1.1, d / 2 + 1.15);
                group.add(topRail); parts.push(topRail);
            }
        }

        // Toit terrasse
        const roofSlab = box(w + 0.3, 0.4, d + 0.3, M.roofGray);
        roofSlab.position.y = floors * floorH + 0.2;
        group.add(roofSlab); parts.push(roofSlab);

        // Acrotère
        [[-w / 2, 0], [w / 2, 0], [0, -d / 2], [0, d / 2]].forEach(([ax, az]) => {
            const aW = ax !== 0 ? 0.25 : w + 0.5;
            const aD = az !== 0 ? 0.25 : d + 0.5;
            const ac = box(aW, 0.6, aD, M.concrete);
            ac.position.set(ax, floors * floorH + 0.7, az);
            group.add(ac); parts.push(ac);
        });

        // Porte d'entrée
        const entrance = box(1.5, 2.5, 0.15, M.door);
        entrance.position.set(0, 1.25, d / 2 + 0.22);
        group.add(entrance); parts.push(entrance);

        parts.forEach(p => { p.visible = false; });
        return { group, parts };
    }

    /* ── Tour de bureaux / immeuble haut (R+10 à R+16) ──
       Façade rideau de verre modulaire */
    function makeTower(opts) {
        const { x, z, w = 8, d = 8, floors = 12, angle = 0 } = opts;
        const group = new THREE.Group();
        group.position.set(x, 0, z);
        group.rotation.y = angle;
        scene.add(group);
        const parts = [];
        const floorH = 3.8;

        for (let i = 0; i < floors; i++) {
            const setback = Math.floor(i / 5) * 0.3;
            const fw = w - setback, fd = d - setback;
            // Core béton
            const core = box(fw * 0.45, floorH - 0.15, fd * 0.45, M.concrete.clone ? M.concrete.clone() : M.concrete);
            core.position.set(setback / 2, i * floorH + (floorH - 0.15) / 2 + 0.15, 0);
            core.castShadow = true;
            group.add(core); parts.push(core);

            // Façade vitrée 4 côtés
            const panelDefs = [
                { rx: 0,         rz: fd / 2,     ww: fw, hh: floorH - 0.15 },
                { rx: 0,         rz: -fd / 2,    ww: fw, hh: floorH - 0.15 },
                { rx: -fw / 2,   rz: 0,          ww: fd, hh: floorH - 0.15, rot: true },
                { rx: fw / 2,    rz: 0,          ww: fd, hh: floorH - 0.15, rot: true },
            ];
            panelDefs.forEach(pd => {
                const g = new THREE.BoxGeometry(pd.ww, pd.hh, 0.18);
                const panel = new THREE.Mesh(g, M.glass2);
                panel.position.set(pd.rx + setback / 2, i * floorH + pd.hh / 2 + 0.15, pd.rz);
                if (pd.rot) panel.rotation.y = Math.PI / 2;
                panel.castShadow = true;
                panel.add(new THREE.LineSegments(new THREE.EdgesGeometry(g), M.edgeG));
                group.add(panel); parts.push(panel);
            });
        }

        // Couronne / flèche architecturale
        const crownGeo = new THREE.CylinderGeometry(0.2, w * 0.3, floors * 0.6, 4);
        const crown = new THREE.Mesh(crownGeo, M.roofSlate);
        crown.rotation.y = Math.PI / 4;
        crown.position.y = floors * floorH + floors * 0.3;
        crown.add(new THREE.LineSegments(new THREE.EdgesGeometry(crownGeo), M.edge));
        group.add(crown); parts.push(crown);

        parts.forEach(p => { p.visible = false; });
        return { group, parts };
    }

    /* ── Arbre (cône + tronc) ── */
    function makeTree(x, z, h = 4) {
        const group = new THREE.Group();
        group.position.set(x, 0, z);
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, h * 0.3, 6), M.trunk);
        trunk.position.y = h * 0.15; group.add(trunk);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(h * 0.38, h * 0.75, 7), M.foliage);
        crown.position.y = h * 0.3 + h * 0.375; group.add(crown);
        scene.add(group);
        return group;
    }

    /* ── Construction du quartier ── */

    // Tour centrale (immeuble de prestige)
    const tower = makeTower({ x: 0, z: -5, w: 9, d: 9, floors: 14 });
    allBuildings.push({ ...tower, startDelay: 0 });

    // Grands immeubles résidentiels (gauche)
    const appt1 = makeApartmentBlock({ x: -22, z: -8, w: 11, d: 8, floors: 6, wallMat: M.wall, angle: Math.PI * 0.05 });
    allBuildings.push({ ...appt1, startDelay: 8 });

    const appt2 = makeApartmentBlock({ x: -19, z: 18, w: 10, d: 7, floors: 4, wallMat: M.wallC, angle: -Math.PI * 0.04 });
    allBuildings.push({ ...appt2, startDelay: 14 });

    // Grands immeubles résidentiels (droite)
    const appt3 = makeApartmentBlock({ x: 22, z: -10, w: 10, d: 8, floors: 5, wallMat: M.wallB, angle: -Math.PI * 0.06 });
    allBuildings.push({ ...appt3, startDelay: 10 });

    const appt4 = makeApartmentBlock({ x: 20, z: 16, w: 9, d: 7, floors: 7, wallMat: M.wall, angle: Math.PI * 0.03 });
    allBuildings.push({ ...appt4, startDelay: 18 });

    // Maisons individuelles (villas côté gauche)
    const h1 = makeHouse({ x: -34, z: -6, w: 9, d: 7, h: 4.2, wallMat: M.wall, roofMat: M.roofRed, hasGarage: true, hasChimney: true, angle: Math.PI * 0.08 });
    allBuildings.push({ ...h1, startDelay: 22 });

    const h2 = makeHouse({ x: -34, z: 12, w: 8, d: 6, h: 3.8, wallMat: M.wallB, roofMat: M.roofSlate, hasGarage: false, hasChimney: true, angle: Math.PI * 0.06 });
    allBuildings.push({ ...h2, startDelay: 27 });

    const h3 = makeHouse({ x: -34, z: -22, w: 7.5, d: 6.5, h: 4, wallMat: M.wallC, roofMat: M.roofGray, hasGarage: true, hasChimney: false, angle: -Math.PI * 0.05 });
    allBuildings.push({ ...h3, startDelay: 32 });

    // Maisons individuelles (côté droit)
    const h4 = makeHouse({ x: 34, z: -4, w: 8.5, d: 6, h: 4.5, wallMat: M.wallC, roofMat: M.roofRed, hasGarage: true, hasChimney: true, angle: -Math.PI * 0.07 });
    allBuildings.push({ ...h4, startDelay: 24 });

    const h5 = makeHouse({ x: 35, z: 11, w: 8, d: 6.5, h: 4, wallMat: M.wall, roofMat: M.roofSlate, hasGarage: false, hasChimney: true, angle: Math.PI * 0.04 });
    allBuildings.push({ ...h5, startDelay: 30 });

    const h6 = makeHouse({ x: 35, z: -20, w: 7, d: 6, h: 3.6, wallMat: M.wallB, roofMat: M.roofGray, hasGarage: false, hasChimney: true, angle: -Math.PI * 0.03 });
    allBuildings.push({ ...h6, startDelay: 36 });

    // Deuxième tour en arrière-plan
    const tower2 = makeTower({ x: -10, z: -30, w: 7, d: 7, floors: 10, angle: Math.PI * 0.1 });
    allBuildings.push({ ...tower2, startDelay: 20 });

    const tower3 = makeTower({ x: 12, z: -28, w: 6, d: 6, floors: 8, angle: -Math.PI * 0.08 });
    allBuildings.push({ ...tower3, startDelay: 25 });

    // Arbres le long des trottoirs
    const treePositions = [
        [-9, -18], [-9, -10], [-9, 0], [-9, 10], [-9, 20],
        [ 9, -18], [ 9, -10], [ 9, 0], [ 9, 10], [ 9, 20],
    ];
    treePositions.forEach(([tx, tz]) => makeTree(tx, tz, 3.5 + Math.random() * 2));

    /* ── PARTICULES chantier ── */
    const MAX_P = 600;
    const pPos = new Float32Array(MAX_P * 3);
    const pVel = [];
    const pLife = new Float32Array(MAX_P);
    const pOn = new Uint8Array(MAX_P);
    for (let i = 0; i < MAX_P; i++) { pPos[i * 3 + 1] = -100; pVel.push({ x: 0, y: 0, z: 0 }); }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xaabbcc, size: 0.22, transparent: true, opacity: 0.65, sizeAttenuation: true, depthWrite: false });
    scene.add(new THREE.Points(pGeo, pMat));
    let nextP = 0;

    function spawnDust(x, y, z, n) {
        for (let i = 0; i < n; i++) {
            const idx = nextP++ % MAX_P;
            pPos[idx*3]   = x + (Math.random() - .5) * 6;
            pPos[idx*3+1] = y + Math.random();
            pPos[idx*3+2] = z + (Math.random() - .5) * 6;
            pVel[idx] = { x: (Math.random() - .5) * .09, y: Math.random() * .13 + .02, z: (Math.random() - .5) * .09 };
            pLife[idx] = 1.0; pOn[idx] = 1;
        }
    }

    function updateParticles() {
        for (let i = 0; i < MAX_P; i++) {
            if (!pOn[i]) continue;
            pLife[i] -= 0.016;
            if (pLife[i] <= 0) { pOn[i] = 0; pPos[i*3+1] = -100; continue; }
            pPos[i*3]   += pVel[i].x;
            pPos[i*3+1] += pVel[i].y;
            pPos[i*3+2] += pVel[i].z;
            pVel[i].y -= 0.003;
        }
        pGeo.attributes.position.needsUpdate = true;
    }

    /* ── ÉTAT ANIMATION ── */
    let clock = 0;
    let globalProgress = 0;
    let mouseX = 0, mouseY = 0;
    let isIdle = false;

    const camStart = new THREE.Vector3(0, -6, 110);
    const camEnd   = new THREE.Vector3(38, 28, 55);
    const INTRO    = 200;
    camera.position.copy(camStart);

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    window.addEventListener('mousemove', e => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    /* ── BOUCLE DE RENDU ── */
    function animate() {
        requestAnimationFrame(animate);
        clock++;

        /* 1. Intro cinématique */
        if (clock <= INTRO) {
            const t = easeOut(clock / INTRO);
            camera.position.lerpVectors(camStart, camEnd, t);
            camera.lookAt(0, 10 + t * 8, 0);
        } else {
            isIdle = true;
            const angle = clock * 0.0007;
            camera.position.x += (Math.cos(angle) * 42 + mouseX * 5 - camera.position.x) * 0.016;
            camera.position.z += (Math.sin(angle) * 42 + mouseY * 4 - camera.position.z) * 0.016;
            camera.position.y += (28 + mouseY * 3 - camera.position.y) * 0.014;
            camera.lookAt(0, 14, 0);
        }

        /* 2. Progression de construction */
        if (clock > 30) {
            globalProgress += 0.055;

            allBuildings.forEach(b => {
                const lp = Math.max(0, globalProgress - b.startDelay);
                if (lp <= 0) return;

                const totalParts = b.parts.length;
                const partsToShow = Math.floor(lp * (totalParts / 6));

                b.parts.forEach((p, idx) => {
                    if (idx < partsToShow) {
                        if (!p.visible) {
                            p.visible = true;
                            // Spawn particules sur les nouvelles pièces
                            const wp = new THREE.Vector3();
                            p.getWorldPosition(wp);
                            spawnDust(wp.x, wp.y, wp.z, 18);
                        }
                        // Animer l'apparition (scale Y de 0 → 1)
                        if (p.scale.y < 0.999) {
                            p.scale.y = Math.min(1, p.scale.y + (1 - p.scale.y) * 0.13);
                            if (p.scale.y < 0.01) p.scale.y = 0.001;
                        }
                    }
                });
            });

            // Spotlight suit le bâtiment en cours
            const activeBldg = allBuildings.find(b => {
                const lp = Math.max(0, globalProgress - b.startDelay);
                return lp > 0 && lp < b.parts.length / 5;
            });
            if (activeBldg) {
                const wp = new THREE.Vector3();
                activeBldg.group.getWorldPosition(wp);
                spot.position.set(wp.x + 8, wp.y + 20, wp.z + 8);
                spot.target.position.set(wp.x, wp.y + 5, wp.z);
                spot.target.updateMatrixWorld();
            }
        }

        /* 3. Particules */
        updateParticles();

        /* 4. Pulsation lumière */
        if (isIdle) {
            sun.intensity = 1.4 + Math.sin(clock * 0.012) * 0.1;
            fill.intensity = 0.5 + Math.sin(clock * 0.018 + 1) * 0.08;
        }

        renderer.render(scene, camera);
    }

    setTimeout(animate, 300);
}


/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║   INTERACTIVE 3D SERVICE ICONS — Three.js                  ║
 * ║   • Initialise un mini canevas WebGL transparent par icône ║
 * ║   • Géométries 3D architecturales vectorielles             ║
 * ║   • Animations fluides amplifiées lors du survol (hover)   ║
 * ║   • Optimisé par IntersectionObserver                      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
function initService3DIcons() {
    if (typeof THREE === 'undefined') { return; }
    const iconWraps = document.querySelectorAll('.service-icon-wrap');
    if (iconWraps.length === 0) return;

    iconWraps.forEach((wrap, index) => {
        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.className = 'service-3d-canvas';
        wrap.appendChild(canvas);

        const width = 72;
        const height = 72;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = null;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 5);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Add soft lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(2, 4, 3);
        scene.add(dirLight);

        // Define colors
        const colorPrimary = 0x4A6FA5; // Accent blue
        const colorSlate = 0x2C3E50;    // Dark slate
        const colorSecondary = 0x88bbff; // Glow light blue

        // Create specific 3D model based on service index
        let modelGroup = new THREE.Group();
        scene.add(modelGroup);

        const edgeMaterial = new THREE.LineBasicMaterial({ color: colorSecondary, transparent: true, opacity: 0.8 });
        const faceMaterial = new THREE.MeshStandardMaterial({ 
            color: colorPrimary, 
            roughness: 0.2, 
            metalness: 0.8,
            transparent: true,
            opacity: 0.25,
            side: THREE.DoubleSide
        });
        const metalMaterial = new THREE.MeshStandardMaterial({
            color: colorSlate,
            roughness: 0.4,
            metalness: 0.9
        });
        const whiteMaterial = new THREE.MeshStandardMaterial({
            color: 0xeeeeee,
            roughness: 0.1,
            metalness: 0.9
        });

        if (index === 0) {
            // CONSTRUCTION NEUVE: Architectural wireframe house
            // Base Cube
            const baseGeo = new THREE.BoxGeometry(1.6, 1.1, 1.6);
            const baseMesh = new THREE.Mesh(baseGeo, faceMaterial);
            baseMesh.position.y = -0.55;
            modelGroup.add(baseMesh);

            const baseEdges = new THREE.EdgesGeometry(baseGeo);
            const baseWire = new THREE.LineSegments(baseEdges, edgeMaterial);
            baseMesh.add(baseWire);

            // Pyramid Roof
            const roofGeo = new THREE.ConeGeometry(1.3, 0.9, 4);
            const roofMesh = new THREE.Mesh(roofGeo, new THREE.MeshStandardMaterial({
                color: colorSlate,
                transparent: true,
                opacity: 0.4,
                roughness: 0.3,
                metalness: 0.7
            }));
            roofMesh.rotation.y = Math.PI / 4;
            roofMesh.position.y = 0.45;
            modelGroup.add(roofMesh);

            const roofEdges = new THREE.EdgesGeometry(roofGeo);
            const roofWire = new THREE.LineSegments(roofEdges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }));
            roofMesh.add(roofWire);

        } else if (index === 1) {
            // RÉNOVATION & RESTRUCTURATION: Steel truss / I-beam
            const beamGroup = new THREE.Group();
            
            // Top flange
            const topFlange = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 0.8), metalMaterial);
            topFlange.position.y = 0.6;
            beamGroup.add(topFlange);
            
            // Bottom flange
            const bottomFlange = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 0.8), metalMaterial);
            bottomFlange.position.y = -0.6;
            beamGroup.add(bottomFlange);
            
            // Web linking them
            const web = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.05, 0.15), faceMaterial);
            beamGroup.add(web);

            const webWire = new THREE.LineSegments(new THREE.EdgesGeometry(web.geometry), edgeMaterial);
            web.add(webWire);

            const beamWire1 = new THREE.LineSegments(new THREE.EdgesGeometry(topFlange.geometry), edgeMaterial);
            topFlange.add(beamWire1);
            const beamWire2 = new THREE.LineSegments(new THREE.EdgesGeometry(bottomFlange.geometry), edgeMaterial);
            bottomFlange.add(beamWire2);
            
            modelGroup.add(beamGroup);
            modelGroup.rotation.z = Math.PI * 0.15;

        } else if (index === 2) {
            // SUIVI DE CHANTIER: Safety Cone
            const coneGroup = new THREE.Group();

            // Square Base
            const baseGeo = new THREE.BoxGeometry(1.8, 0.12, 1.8);
            const baseMesh = new THREE.Mesh(baseGeo, new THREE.MeshStandardMaterial({
                color: 0xD05A3F,
                roughness: 0.5,
                metalness: 0.1
            }));
            baseMesh.position.y = -0.85;
            coneGroup.add(baseMesh);
            
            const baseWire = new THREE.LineSegments(new THREE.EdgesGeometry(baseGeo), edgeMaterial);
            baseMesh.add(baseWire);

            // Cone body
            const coneGeo = new THREE.ConeGeometry(0.68, 1.6, 16);
            const coneMesh = new THREE.Mesh(coneGeo, new THREE.MeshStandardMaterial({
                color: 0xD05A3F,
                roughness: 0.5,
                metalness: 0.1
            }));
            coneMesh.position.y = 0.01;
            coneGroup.add(coneMesh);

            // White reflective stripe
            const stripeGeo = new THREE.CylinderGeometry(0.32, 0.44, 0.44, 16, 1, true);
            const stripeMesh = new THREE.Mesh(stripeGeo, whiteMaterial);
            stripeMesh.position.y = 0.05;
            coneGroup.add(stripeMesh);

            modelGroup.add(coneGroup);
            modelGroup.position.y = -0.1;

        } else if (index === 3) {
            // ÉTUDE & EXPERTISE: Wireframe Globe + Core
            const globeGroup = new THREE.Group();

            const sphereGeo = new THREE.SphereGeometry(1.2, 12, 10);
            const sphereEdges = new THREE.EdgesGeometry(sphereGeo);
            const sphereWire = new THREE.LineSegments(sphereEdges, edgeMaterial);
            globeGroup.add(sphereWire);

            const coreGeo = new THREE.IcosahedronGeometry(0.48, 0);
            const coreMesh = new THREE.Mesh(coreGeo, new THREE.MeshStandardMaterial({
                color: colorSlate,
                roughness: 0.2,
                metalness: 0.8
            }));
            const coreEdges = new THREE.LineSegments(new THREE.EdgesGeometry(coreGeo), new THREE.LineBasicMaterial({ color: 0xffffff }));
            coreMesh.add(coreEdges);
            globeGroup.add(coreMesh);
            
            globeGroup.userData = { core: coreMesh };
            modelGroup.add(globeGroup);
        }

        // Animation States
        let isHovered = false;
        let rotationSpeed = 0.008;
        let targetRotationSpeed = 0.008;
        let scale = 1.0;
        let targetScale = 1.0;

        // Hover events
        const parentItem = wrap.closest('.service-item');
        if (parentItem) {
            parentItem.addEventListener('mouseenter', () => {
                isHovered = true;
                targetRotationSpeed = 0.035;
                targetScale = 1.25;
            });
            parentItem.addEventListener('mouseleave', () => {
                isHovered = false;
                targetRotationSpeed = 0.008;
                targetScale = 1.0;
            });
        }

        // Observer pattern to stop animating when offscreen
        let isVisible = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        }, { threshold: 0.05 });
        observer.observe(wrap);

        // Core animation tick loop
        function tick() {
            if (!isVisible) {
                requestAnimationFrame(tick);
                return;
            }

            // Lerp scale
            scale += (targetScale - scale) * 0.15;
            modelGroup.scale.set(scale, scale, scale);

            // Lerp rotation speed
            rotationSpeed += (targetRotationSpeed - rotationSpeed) * 0.12;

            // Rotate main model group
            modelGroup.rotation.y += rotationSpeed;
            if (index === 1) {
                modelGroup.rotation.x += rotationSpeed * 0.4;
            } else if (index === 3) {
                modelGroup.rotation.x += rotationSpeed * 0.3;
                if (modelGroup.userData.core) {
                    modelGroup.userData.core.rotation.y -= rotationSpeed * 2.2;
                    modelGroup.userData.core.rotation.z += rotationSpeed * 1.5;
                }
            } else if (index === 2 && isHovered) {
                modelGroup.position.y = -0.1 + Math.sin(Date.now() * 0.015) * 0.16;
            } else if (index === 2) {
                modelGroup.position.y = -0.1;
                modelGroup.rotation.z = Math.sin(Date.now() * 0.003) * 0.05;
            }

            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        }

        // Success state: hide the CSS icon, show canvas
        wrap.classList.add('has-3d');
        
        // Start ticks
        tick();
    });
}


/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║   3D PROJECT CARD ILLUSTRATIONS — Three.js                  ║
 * ║   • Scène 1 : Immeuble de bureaux R+4 (béton & verre)       ║
 * ║   • Scène 2 : Villa duplex avec toit et jardin              ║
 * ║   • Scène 3 : Clinique moderne avec croix holographique      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
function initProject3DScenes() {
    if (typeof THREE === 'undefined') return;

    const configs = [
        { canvasId: 'proj-canvas-1', wrapId: 'proj-canvas-wrap-1', type: 'office' },
        { canvasId: 'proj-canvas-2', wrapId: 'proj-canvas-wrap-2', type: 'villa' },
        { canvasId: 'proj-canvas-3', wrapId: 'proj-canvas-wrap-3', type: 'clinic' },
    ];

    configs.forEach(({ canvasId, wrapId, type }) => {
        const canvas = document.getElementById(canvasId);
        const wrap   = document.getElementById(wrapId);
        if (!canvas || !wrap) return;

        const W = wrap.clientWidth || 400;
        const H = wrap.clientHeight || 220;

        /* ── Scene ── */
        const scene = new THREE.Scene();
        scene.background = null;
        scene.fog = new THREE.FogExp2(0x0a1628, 0.06);

        /* ── Camera ── */
        const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 200);
        camera.position.set(0, 4, 18);
        camera.lookAt(0, 1, 0);

        /* ── Renderer ── */
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        /* ── Lights ── */
        scene.add(new THREE.AmbientLight(0xb0c8e8, 0.6));
        const sun = new THREE.DirectionalLight(0xfff0d0, 1.8);
        sun.position.set(10, 20, 10);
        sun.castShadow = true;
        scene.add(sun);
        const fillLight = new THREE.DirectionalLight(0x4080ff, 0.5);
        fillLight.position.set(-8, 5, -5);
        scene.add(fillLight);

        /* ── Helpers ── */
        const edgeMat  = new THREE.LineBasicMaterial({ color: 0x88bbff, transparent: true, opacity: 0.55 });
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x90c8ff, roughness: 0.05, metalness: 0.8, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
        const concreteMat = new THREE.MeshStandardMaterial({ color: 0xd0d8e4, roughness: 0.85, metalness: 0.08 });
        const darkMat = new THREE.MeshStandardMaterial({ color: 0x2C3E50, roughness: 0.7, metalness: 0.4 });
        const roofMat = new THREE.MeshStandardMaterial({ color: 0xa03828, roughness: 0.7 });
        const foliageMat = new THREE.MeshStandardMaterial({ color: 0x2d7040, roughness: 1 });
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x7a4c28, roughness: 1 });
        const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.5 });
        const glowMat  = new THREE.MeshStandardMaterial({ color: 0x4488ff, emissive: 0x2244aa, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.75 });

        function box(w, h, d, mat) {
            const g = new THREE.BoxGeometry(w, h, d);
            const m = new THREE.Mesh(g, mat);
            m.castShadow = true; m.receiveShadow = true;
            return m;
        }
        function wireBox(mesh) {
            const e = new THREE.EdgesGeometry(mesh.geometry);
            mesh.add(new THREE.LineSegments(e, edgeMat));
            return mesh;
        }

        /* Ground plane */
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: 0x1a2a3a, roughness: 1 }));
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        /* Grid */
        const grid = new THREE.GridHelper(30, 20, 0x3355aa, 0x223366);
        grid.material.transparent = true; grid.material.opacity = 0.3;
        scene.add(grid);

        /* Particles */
        const pCount = 120;
        const pPositions = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount; i++) {
            pPositions[i * 3]     = (Math.random() - 0.5) * 30;
            pPositions[i * 3 + 1] = Math.random() * 15;
            pPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
        const pMesh = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x88bbff, size: 0.08, transparent: true, opacity: 0.55 }));
        scene.add(pMesh);

        /* ── Scene-specific model ── */
        const pivot = new THREE.Group();
        scene.add(pivot);

        if (type === 'office') {
            /* Immeuble R+4 personnalisé correspondant à la photo de réalisation */
            const wallGrey  = new THREE.MeshStandardMaterial({ color: 0x767d8a, roughness: 0.75, metalness: 0.05 });
            const wallWood  = new THREE.MeshStandardMaterial({ color: 0xd9865d, roughness: 0.6, metalness: 0.05 });
            const wallPink  = new THREE.MeshStandardMaterial({ color: 0xf5b2a3, roughness: 0.7, metalness: 0.05 });
            const wallGreen = new THREE.MeshStandardMaterial({ color: 0xcbeef3, roughness: 0.8, metalness: 0.02 });
            const glowCyan  = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
            const glowYellow = new THREE.MeshBasicMaterial({ color: 0xfff0aa });
            
            // Adjust scene fog to be lighter so details are visible
            if (scene.fog) {
                scene.fog.density = 0.038;
            }
            
            // Hide generic scene ground and grid to let our custom environment shine
            ground.visible = false;
            grid.visible = false;
            
            const bW = 7.5;
            const bD = 5.5;
            
            /* 1. Rez-de-chaussée (RC) - y-range: [0, 2.7] */
            const groundFloor = wireBox(box(bW, 2.7, bD, wallGrey));
            groundFloor.position.y = 1.35;
            pivot.add(groundFloor);
            
            // Portail coulissant gris/métal sur la droite
            const gate = wireBox(box(2.2, 1.8, 0.1, new THREE.MeshStandardMaterial({ color: 0xd0d5dd, roughness: 0.35, metalness: 0.75 })));
            gate.position.set(1.5, 0.9, bD/2 + 0.06);
            pivot.add(gate);
            
            // Poteaux du portail
            const post1 = box(0.2, 2.0, 0.2, concreteMat);
            post1.position.set(0.3, 1.0, bD/2 + 0.08);
            pivot.add(post1);
            const post2 = box(0.2, 2.0, 0.2, concreteMat);
            post2.position.set(2.7, 1.0, bD/2 + 0.08);
            pivot.add(post2);
            
            /* 2. Étages intermédiaires (1 à 3) */
            const fH = 2.45;
            for (let f = 0; f < 3; f++) {
                const fy = 2.7 + f * fH;
                
                // Bloc de gauche solide gris (3.5 de large)
                const leftBlock = wireBox(box(3.5, fH - 0.05, bD, wallGrey));
                leftBlock.position.set(-2.0, fy + fH/2, 0);
                pivot.add(leftBlock);
                
                // Bloc de fond arrière-droit gris (pour éviter que le bâtiment soit creux)
                const backBlock = wireBox(box(4.0, fH - 0.05, 3.9, wallGrey));
                backBlock.position.set(1.75, fy + fH/2, -bD/2 + 1.95);
                pivot.add(backBlock);
                
                // Colonne saumon verticale de la façade avant (1.2 de large, 0.8 de profondeur)
                const pinkCol = wireBox(box(1.2, fH - 0.05, 0.8, wallPink));
                pinkCol.position.set(1.1, fy + fH/2, bD/2 - 0.36);
                pivot.add(pinkCol);
                
                // Fenêtre de la colonne saumon (qui brille en jaune de l'intérieur)
                const pWin = box(0.5, 1.4, 0.1, glowYellow);
                pWin.position.set(1.1, fy + fH/2, bD/2 + 0.06);
                pivot.add(pWin);
                
                // Balcons/loggias en bois à droite (2.5 de large, 1.6 de profondeur)
                // Mur de fond de la loggia (vert clair/bleuté)
                const loggiaBack = wireBox(box(2.5, fH - 0.05, 1.6, wallGreen));
                loggiaBack.position.set(2.5, fy + fH/2, bD/2 - 1.1);
                pivot.add(loggiaBack);
                
                // Fenêtres intérieures de la loggia (jaunes lumineuses)
                const loggiaWin = box(1.2, fH - 0.8, 0.05, glowYellow);
                loggiaWin.position.set(2.5, fy + fH/2, bD/2 - 0.4);
                pivot.add(loggiaWin);
                
                // Cadre boisé extérieur du balcon (autour de la loggia)
                const outerWood = wireBox(box(2.6, fH - 0.05, 0.15, wallWood));
                outerWood.position.set(2.5, fy + fH/2, bD/2 - 0.08);
                pivot.add(outerWood);
                
                // Fenêtre vitrée latérale gauche
                const sideWin1 = box(0.1, 1.2, 0.8, glassMat);
                sideWin1.position.set(-3.76, fy + fH/2, 1.0);
                pivot.add(sideWin1);
                
                const sideWin2 = box(0.1, 1.2, 0.8, glassMat);
                sideWin2.position.set(-3.76, fy + fH/2, -1.0);
                pivot.add(sideWin2);
            }
            
            /* 3. Dernier étage (Attique / Penthouse) */
            const pty = 2.7 + 3 * fH;
            const ptH = 2.4;
            
            // Partie gauche fermée grise (chambre haute)
            const ptLeft = wireBox(box(4.5, ptH - 0.05, bD * 0.8, wallGrey));
            ptLeft.position.set(-1.5, pty + ptH/2, -bD * 0.1);
            pivot.add(ptLeft);
            
            // Fenêtre de la partie haute (lumineuse)
            const ptWin = box(1.0, 1.2, 0.08, glowYellow);
            ptWin.position.set(-1.5, pty + ptH/2, bD * 0.31);
            pivot.add(ptWin);
            
            // Partie droite ouverte (terrasse pergola avec poteaux blancs)
            const col1 = box(0.18, ptH, 0.18, whiteMat);
            col1.position.set(3.4, pty + ptH/2, bD/2 - 0.3);
            pivot.add(col1);
            
            const col2 = box(0.18, ptH, 0.18, whiteMat);
            col2.position.set(3.4, pty + ptH/2, -bD/2 + 0.3);
            pivot.add(col2);
            
            const col3 = box(0.18, ptH, 0.18, whiteMat);
            col3.position.set(1.4, pty + ptH/2, bD/2 - 0.3);
            pivot.add(col3);
            
            // Garde-corps en verre
            const balustrade = box(3.0, 0.9, 0.05, glassMat);
            balustrade.position.set(2.1, pty + 0.45, bD/2 - 0.15);
            pivot.add(balustrade);
            
            // Casquette de la pergola
            const canopy = wireBox(box(3.8, 0.35, bD * 0.9, wallGrey));
            canopy.position.set(1.9, pty + ptH - 0.125, -bD * 0.05);
            pivot.add(canopy);
            
            // Bandeau de lumière cyan brillant (caractéristique du bâtiment)
            const cyanBand = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.15, bD * 0.92), glowCyan);
            cyanBand.position.set(1.9, pty + ptH + 0.1, -bD * 0.05);
            pivot.add(cyanBand);
            
            // Toit principal gauche
            const ptRoof = wireBox(box(4.6, 0.2, bD * 0.85, wallGrey));
            ptRoof.position.set(-1.5, pty + ptH + 0.1, -bD * 0.1);
            pivot.add(ptRoof);
            
            /* 4. Environnement (Rue, Voiture blanche, Voiture rouge, Espaces verts) */
            // Route
            const street = new THREE.Mesh(new THREE.PlaneGeometry(16, 7.5), new THREE.MeshStandardMaterial({ color: 0x42474e, roughness: 0.85 }));
            street.rotation.x = -Math.PI / 2;
            street.position.set(0, 0.02, bD/2 + 3.0);
            pivot.add(street);
            
            // Trottoir
            const walk = new THREE.Mesh(new THREE.PlaneGeometry(12, 1.8), new THREE.MeshStandardMaterial({ color: 0xd2ccbd, roughness: 0.9 }));
            walk.rotation.x = -Math.PI / 2;
            walk.position.set(0.5, 0.03, bD/2 + 0.9);
            pivot.add(walk);
            
            // Voiture blanche stylisée (avec roues noires)
            const carW = new THREE.Group();
            const carWBody = box(1.8, 0.45, 0.85, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.65 }));
            carWBody.position.y = 0.25;
            carW.add(carWBody);
            const carWCabin = box(0.95, 0.35, 0.75, glassMat);
            carWCabin.position.set(-0.1, 0.65, 0);
            carW.add(carWCabin);
            
            // Roues voiture blanche
            [-0.5, 0.5].forEach(cx => {
                [-0.43, 0.43].forEach(cz => {
                    const wheel = box(0.32, 0.32, 0.12, new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 }));
                    wheel.position.set(cx, 0.16, cz);
                    wheel.rotation.y = Math.PI / 2;
                    carW.add(wheel);
                });
            });
            
            carW.position.set(2.2, 0.04, bD/2 + 2.4);
            carW.rotation.y = -Math.PI / 10;
            pivot.add(carW);
            
            // Voiture rouge stylisée (avec roues noires)
            const carR = new THREE.Group();
            const carRBody = box(1.7, 0.45, 0.8, new THREE.MeshStandardMaterial({ color: 0xb52222, roughness: 0.25, metalness: 0.65 }));
            carRBody.position.y = 0.25;
            carR.add(carRBody);
            const carRCabin = box(0.9, 0.35, 0.7, glassMat);
            carRCabin.position.set(-0.1, 0.65, 0);
            carR.add(carRCabin);
            
            // Roues voiture rouge
            [-0.48, 0.48].forEach(cx => {
                [-0.4, 0.4].forEach(cz => {
                    const wheel = box(0.32, 0.32, 0.12, new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 }));
                    wheel.position.set(cx, 0.16, cz);
                    wheel.rotation.y = Math.PI / 2;
                    carR.add(wheel);
                });
            });
            
            carR.position.set(-1.6, 0.04, bD/2 + 4.0);
            carR.rotation.y = Math.PI / 8;
            pivot.add(carR);
            
            // Pelouse et arbre à gauche
            const grass = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshStandardMaterial({ color: 0x7da470, roughness: 1.0 }));
            grass.rotation.x = -Math.PI / 2;
            grass.position.set(-6.5, 0.02, bD/2 + 2.0);
            pivot.add(grass);
            
            const treeTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.1, 5), trunkMat);
            treeTrunk.position.set(-6.0, 0.55, bD/2 + 2.0);
            pivot.add(treeTrunk);
            
            const treeFoliage = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 0), foliageMat);
            treeFoliage.position.set(-6.0, 1.5, bD/2 + 2.0);
            pivot.add(treeFoliage);
            
            // Ajustement de l'échelle et de la pose pour faire rentrer tout le modèle (bâtiment, rue et voitures) dans le cadre sans coupure
            pivot.scale.set(0.70, 0.70, 0.70);
            pivot.rotation.y = -Math.PI / 5;
            pivot.position.set(0, -3.9, 0);

        } else if (type === 'villa') {
            /* Villa duplex : maison + toit + arbres + jardin */
            const body = wireBox(box(6.5, 3.2, 4.5, concreteMat));
            body.position.y = 1.6;
            pivot.add(body);
            /* Étage */
            const floor2 = wireBox(box(5.5, 2.8, 4, concreteMat));
            floor2.position.set(0, 3.2 + 1.4, 0);
            pivot.add(floor2);
            /* Toit en pente */
            const roofGeo = new THREE.CylinderGeometry(0, 4.2, 2.2, 4);
            const roofMesh = new THREE.Mesh(roofGeo, roofMat);
            roofMesh.rotation.y = Math.PI / 4;
            roofMesh.position.y = 3.2 + 2.8 + 1.1;
            roofMesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(roofGeo), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })));
            pivot.add(roofMesh);
            /* Porte */
            const door = wireBox(box(1.0, 2.2, 0.1, darkMat));
            door.position.set(-1, 1.1, 2.26);
            pivot.add(door);
            /* Fenêtres */
            [1.5, -0.5].forEach(xw => {
                const gFrame = wireBox(box(1.1, 1.2, 0.1, darkMat));
                gFrame.position.set(xw, 1.9, 2.26);
                pivot.add(gFrame);
                const gGlass = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.95, 0.06), glassMat);
                gGlass.position.set(xw, 1.9, 2.32);
                pivot.add(gGlass);
            });
            /* Arbres stylés */
            [[-4.5, 0], [4.5, 0.5]].forEach(([tx, tz]) => {
                const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 1.2, 6), trunkMat);
                trunk.position.set(tx, 0.6, tz);
                pivot.add(trunk);
                const foliage = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 0), foliageMat);
                foliage.position.set(tx, 2.1, tz);
                pivot.add(foliage);
            });
            pivot.position.set(0, -4, 0);

        } else if (type === 'clinic') {
            /* Clinique : bâtiment allongé avec croix holographique flottante */
            const main = wireBox(box(8, 3.5, 4, concreteMat));
            main.position.y = 1.75;
            pivot.add(main);
            /* Aile latérale */
            const wing = wireBox(box(3, 4.8, 3.2, concreteMat));
            wing.position.set(-5.5, 2.4, 0);
            pivot.add(wing);
            /* Toit terrasse */
            const roof = wireBox(box(8.3, 0.25, 4.3, darkMat));
            roof.position.y = 3.5 + 0.125;
            pivot.add(roof);
            /* Façade vitrée */
            const facade = new THREE.Mesh(new THREE.BoxGeometry(8, 3.5, 0.1), glassMat);
            facade.position.set(0, 1.75, 2.05);
            facade.add(new THREE.LineSegments(new THREE.EdgesGeometry(facade.geometry), edgeMat));
            pivot.add(facade);
            /* Croix médicale flottante (holographique) */
            const crossGroup = new THREE.Group();
            const hBar = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.55, 0.12), glowMat);
            crossGroup.add(hBar);
            const vBar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 2.2, 0.12), glowMat);
            crossGroup.add(vBar);
            /* Anneaux lumineux autour de la croix */
            const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.04, 8, 40), new THREE.MeshStandardMaterial({ color: 0x44aaff, emissive: 0x224488, transparent: true, opacity: 0.6 }));
            ring1.rotation.x = Math.PI / 2;
            crossGroup.add(ring1);
            const ring2 = ring1.clone();
            ring2.rotation.set(0, 0, 0);
            crossGroup.add(ring2);
            crossGroup.position.set(2.5, 5.5, 0.5);
            pivot.add(crossGroup);
            pivot.userData.cross = crossGroup;
            pivot.position.set(-1, -4, 0);
        }

        /* ── Animation ── */
        let isHovered = false;
        let clock = 0;
        wrap.addEventListener('mouseenter', () => { isHovered = true; });
        wrap.addEventListener('mouseleave', () => { isHovered = false; });

        /* IntersectionObserver to pause off-screen */
        let isVisible = false;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { isVisible = e.isIntersecting; });
        }, { threshold: 0.1 });
        observer.observe(wrap);

        function tick() {
            requestAnimationFrame(tick);
            if (!isVisible) return;
            clock++;

            const speed = isHovered ? 0.012 : 0.004;
            pivot.rotation.y += speed;

            /* Make particle float */
            pMesh.rotation.y += 0.001;

            /* Gentle camera bob */
            camera.position.y = 4 + Math.sin(clock * 0.008) * 0.5;
            camera.lookAt(0, 1, 0);

            /* Clinic: cross animation */
            if (type === 'clinic' && pivot.userData.cross) {
                const c = pivot.userData.cross;
                c.rotation.y += 0.018;
                c.position.y = 5.5 + Math.sin(clock * 0.04) * 0.4;
            }

            /* Sun pulsation */
            sun.intensity = 1.8 + Math.sin(clock * 0.02) * 0.2;

            renderer.render(scene, camera);
        }

        /* Resize canvas when card resizes */
        const resizeObs = new ResizeObserver(() => {
            const nW = wrap.clientWidth;
            const nH = wrap.clientHeight;
            if (nW && nH) {
                renderer.setSize(nW, nH);
                camera.aspect = nW / nH;
                camera.updateProjectionMatrix();
            }
        });
        resizeObs.observe(wrap);

        tick();
    });
}

/* ═══════════════════════════════════════════════════
   PROJECT IMAGE CAROUSELS
   Auto-play · crossfade · dots · arrow nav · pause on hover
   ═══════════════════════════════════════════════════ */
function initProjectCarousels() {
    document.querySelectorAll('.project-carousel').forEach(carousel => {
        const track   = carousel.querySelector('.carousel-track');
        const images  = Array.from(track.querySelectorAll('img'));
        const dotsWrap = carousel.querySelector('.carousel-dots');
        const prevBtn  = carousel.querySelector('.carousel-prev');
        const nextBtn  = carousel.querySelector('.carousel-next');

        if (!images.length) return;

        let current   = 0;
        let timer     = null;
        const DELAY   = 4000;

        /* Build dot buttons */
        images.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Image ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        });

        function getDots() { return Array.from(dotsWrap.querySelectorAll('.carousel-dot')); }

        function goTo(idx) {
            images[current].classList.remove('active');
            getDots()[current].classList.remove('active');
            current = (idx + images.length) % images.length;
            images[current].classList.add('active');
            getDots()[current].classList.add('active');
        }

        function next() { goTo(current + 1); }
        function prev() { goTo(current - 1); }

        function startAuto() {
            stopAuto();
            timer = setInterval(next, DELAY);
        }
        function stopAuto() {
            if (timer) { clearInterval(timer); timer = null; }
        }

        /* Activate first slide */
        images[0].classList.add('active');

        /* Arrow controls */
        prevBtn.addEventListener('click', e => { e.stopPropagation(); prev(); startAuto(); });
        nextBtn.addEventListener('click', e => { e.stopPropagation(); next(); startAuto(); });

        /* Pause on hover */
        carousel.addEventListener('mouseenter', stopAuto);
        carousel.addEventListener('mouseleave', startAuto);

        /* Touch swipe support */
        let touchStartX = 0;
        carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        carousel.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); startAuto(); }
        }, { passive: true });

        startAuto();
    });
}

/* Kick it off when DOM is ready */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectCarousels);
} else {
    initProjectCarousels();
}
