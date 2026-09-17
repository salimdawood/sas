/*
  SAS portfolio configuration
  ---------------------------
  Most copy, service cards, process steps, testimonials and contact details are
  defined here so they can be changed without touching the HTML structure.
*/
const CONFIG = {
  company: {
    name: "SAS",
    slogan: "Secure · Advanced · Success",
    phone: "+961 76 340 160",
    email: "salimdawoodcareer@gmail.com",
    location: "Beirut, Lebanon"
  },
  services: [
    {
      icon: "monitor-smartphone",
      en: ["Web Development", "Fast, responsive websites and web applications designed around your business and your users."],
      ar: ["تطوير الويب", "مواقع وتطبيقات ويب سريعة ومتجاوبة، مصممة حول احتياجات عملك والمستخدمين."]
    },
    {
      icon: "smartphone",
      en: ["Android Applications", "Focused Android experiences, from product flow and interface design to development and release."],
      ar: ["تطبيقات أندرويد", "تجارب أندرويد واضحة، من مسار المنتج وتصميم الواجهة إلى التطوير والإطلاق."]
    },
    {
      icon: "server-cog",
      en: ["IT Solutions", "Integrations, deployment, technical support and tailored systems that make operations easier."],
      ar: ["حلول تقنية", "تكاملات ونشر ودعم تقني وأنظمة مخصصة تجعل العمل اليومي أسهل."]
    },
    {
      icon: "pen-tool",
      en: ["Design & Branding", "UI/UX, visual identity and digital assets that give your company a consistent professional presence."],
      ar: ["التصميم والهوية", "UI/UX وهوية بصرية ومحتوى رقمي يمنح شركتك حضوراً احترافياً ومتناسقاً."]
    }
  ],
  aboutPoints: {
    en: ["Direct communication", "Modern practical stack", "Responsive by default", "Support after launch"],
    ar: ["تواصل مباشر", "تقنيات حديثة وعملية", "تصميم متجاوب دائماً", "دعم بعد الإطلاق"]
  },
  whyWork: [
    {
      icon: "messages-square",
      en: ["Direct access to the team", "You work with the people shaping and building the product, keeping feedback fast and decisions clear."],
      ar: ["تواصل مباشر مع الفريق", "تتعامل مع الأشخاص الذين يصممون ويبنون المنتج، مما يجعل الملاحظات أسرع والقرارات أوضح."]
    },
    {
      icon: "layers-3",
      en: ["Design and development together", "Brand, interface and code move in the same direction, so the final experience feels consistent."],
      ar: ["التصميم والتطوير معاً", "تتحرك الهوية والواجهة والبرمجة بالاتجاه نفسه، لتكون التجربة النهائية متناسقة."]
    },
    {
      icon: "shield-check",
      en: ["Built for reliability", "We focus on clean structure, security-minded choices and support after launch."],
      ar: ["مبني للموثوقية", "نركز على بنية واضحة، وخيارات تراعي الأمان، ودعم بعد الإطلاق."]
    },
    {
      icon: "rocket",
      en: ["Launch without the fog", "You get practical checkpoints, visible progress and a delivery path that stays easy to follow."],
      ar: ["إطلاق بدون غموض", "تحصل على نقاط مراجعة عملية، وتقدم واضح، ومسار تسليم سهل المتابعة."]
    }
  ],
  process: [
    {
      icon: "search-check",
      en: ["Listen & understand", "We start with your goals, audience, budget and current challenges, then turn the conversation into a clear project direction."],
      ar: ["نسمع ونفهم", "نبدأ من أهدافك وجمهورك وميزانيتك والتحديات الحالية، ثم نحول النقاش إلى اتجاه واضح للمشروع."]
    },
    {
      icon: "ruler",
      en: ["Shape only what matters", "We define the right scope for your need: the essential screens, features and technical choices without unnecessary extras."],
      ar: ["نحدد ما يهم فقط", "نحدد النطاق المناسب لحاجتك: الشاشات والميزات والاختيارات التقنية الأساسية بدون إضافات غير ضرورية."]
    },
    {
      icon: "code-2",
      en: ["Design, build and review", "We create the interface, develop the product and review progress with you in practical checkpoints before moving forward."],
      ar: ["نصمم ونبني ونراجع", "نصمم الواجهة ونطور المنتج ونراجع التقدم معك من خلال نقاط واضحة قبل الانتقال للخطوة التالية."]
    },
    {
      icon: "rocket",
      en: ["Launch with support", "We prepare the final release, help you go live smoothly and stay available for fixes, improvements and next steps."],
      ar: ["نطلق مع الدعم", "نجهز النسخة النهائية ونساعدك على الإطلاق بسلاسة ونبقى متاحين للإصلاحات والتحسينات والخطوات القادمة."]
    }
  ],
  testimonials: [
    {
      avatar: "./assets/avatar-1.svg",
      en: ["Clear communication is part of the product.", "Sample client voice", "Product & operations"],
      ar: ["التواصل الواضح هو جزء من المنتج نفسه.", "رأي عميل تجريبي", "المنتج والعمليات"]
    },
    {
      avatar: "./assets/avatar-2.svg",
      en: ["We value solutions that solve the need without adding unnecessary complexity.", "Sample client voice", "Growing business"],
      ar: ["نقدّر الحلول التي تعالج الحاجة من دون إضافة تعقيد غير ضروري.", "رأي عميل تجريبي", "شركة نامية"]
    },
    {
      avatar: "./assets/avatar-3.svg",
      en: ["Good design should make the experience easier, not just look better.", "Sample client voice", "Digital services"],
      ar: ["التصميم الجيد يجب أن يجعل التجربة أسهل، لا أن يجعلها أجمل فقط.", "رأي عميل تجريبي", "خدمات رقمية"]
    },
    {
      avatar: "./assets/avatar-4.svg",
      en: ["One team handling design and development keeps decisions faster and more consistent.", "Sample client voice", "SME"],
      ar: ["وجود فريق واحد للتصميم والتطوير يجعل القرارات أسرع وأكثر تناسقاً.", "رأي عميل تجريبي", "شركة صغيرة ومتوسطة"]
    }
  ]
};

const EMAILJS_CONFIG = {
  serviceId: "service_k3y94j3",
  templateId: "template_mnj21pm",
  publicKey: "7so75PsrCSu35_SJ-"
};

const I18N = {
  en: {
    "nav.services": "Services", "nav.work": "Work", "nav.about": "About", "nav.process": "Process", "nav.why": "Why us", "nav.contact": "Contact", "nav.cta": "Start a project",
    "hero.eyebrow": "Software solutions from Beirut to anywhere.",
    "hero.title": "Digital products built to feel simple, sharp and reliable.",
    "hero.text": "We create websites, Android applications, IT solutions and visual identities for businesses that want to move forward.",
    "hero.primary": "Start a project", "hero.secondary": "See what we build",
    "hero.trust": "One practical partner across product, technology and design.",
    "slogan.secure": "Secure", "slogan.advanced": "Advanced", "slogan.success": "Success",
    "services.kicker": "What we do", "services.title": "A compact team for your whole digital presence.",
    "services.intro": "From the first screen to deployment and support, we combine product thinking, development and design under one roof.",
    "work.kicker": "Selected capabilities", "work.title": "Real examples of what we can build for your business.",
    "work.intro": "From public websites to internal systems, each solution is planned around the workflow, audience and budget behind it.",
    "work.webType": "Web platform", "work.webTitle": "Business dashboards & portals", "work.webText": "Operational web platforms for companies that need clearer data, faster workflows and one place to manage daily work.",
    "work.webPoint1": "Admin panels for teams, branches and daily operations", "work.webPoint2": "Reports, filters, exports and decision-ready views", "work.webPoint3": "Payments, forms, APIs and third-party integrations",
    "work.mobileType": "Android", "work.mobileTitle": "Mobile apps that stay focused", "work.mobileText": "Android apps for customers, staff or field teams, built around the few actions people need to complete quickly.",
    "work.mobilePoint1": "Useful notifications and account flows", "work.mobilePoint2": "Booking, delivery, location and service journeys",
    "work.brandType": "Brand & Design", "work.brandTitle": "Identity systems that stay consistent", "work.brandText": "Visual systems that make your business look consistent across websites, apps, social media and printed material.",
    "work.brandPoint1": "Logo, colors, typography and digital assets", "work.brandPoint2": "Reusable UI components for websites and apps",
    "work.example1Title": "Online stores", "work.example1Text": "Product catalogs, checkout flows, order tracking and owner dashboards.",
    "work.example2Title": "Booking systems", "work.example2Text": "Appointments, availability, reminders and customer management.",
    "work.example3Title": "Company portals", "work.example3Text": "Internal tools for staff, branches, tasks, files and approvals.",
    "work.example4Title": "Launch identities", "work.example4Text": "Brand kits, landing pages, social assets and presentation-ready visuals.",
    "about.kicker": "About SAS", "about.title": "Small enough to stay close. Skilled enough to deliver.",
    "about.p1": "SAS is a software solutions company based in Beirut, serving businesses in Lebanon and beyond.",
    "about.p2": "We keep communication direct, make technical choices practical and design every project around the real goal — not around technology for its own sake.",
    "about.locationLabel": "Based in",
    "process.kicker": "How we work", "process.title": "A clear path from idea to launch.", "process.intro": "We keep the work transparent and practical, with affordable pricing shaped around exactly what your project needs.", "process.stepLabel": "Step",
    "process.priceTitle": "Affordable, tailored pricing", "process.priceText": "Every proposal is shaped around the client need: no inflated packages, no missing essentials, no more and no less.",
    "why.kicker": "Why work with us", "why.title": "A partner that keeps the work clear, practical and moving.", "why.intro": "We combine planning, design and development so your project has fewer handoffs, clearer decisions and a smoother path from idea to launch.",
    "voices.kicker": "How we want clients to feel", "voices.title": "Clear, supported and confident.",
    "faq.kicker": "FAQ", "faq.title": "Quick answers before we start.",
    "faq.q1": "How much does a project cost?", "faq.a1": "Pricing depends on the size and features of the project. We keep it practical and build the offer around what you need.",
    "faq.q2": "How long does delivery take?", "faq.a2": "Small websites can move quickly. Larger apps or systems need a clearer plan, so we share a timeline before starting.",
    "faq.q3": "Do you support projects after launch?", "faq.a3": "Yes. We stay available for fixes, updates and next steps after the project goes live.",
    "contact.kicker": "Let’s build something useful", "contact.title": "Tell us what you have in mind.",
    "contact.text": "Whether it is a website, app, IT need or visual identity, send us the idea and we can start from there.",
    "contact.cta": "Send a project inquiry", "contact.phone": "Phone", "contact.email": "Email", "contact.location": "Location",
    "footer.ctaTitle": "Let’s build something useful", "footer.ctaButton": "Contact us",
    "footer.formKicker": "Contact", "footer.formTitle": "Tell us about your project.",
    "footer.text": "Whether it is a website, app, IT need or visual identity, send us the idea and we can start from there.",
    "footer.responseTime": "We usually reply within 2 hours.",
    "footer.name": "Name", "footer.email": "Email", "footer.message": "Message",
    "footer.namePlaceholder": "Your name", "footer.emailPlaceholder": "you@example.com", "footer.messagePlaceholder": "A few details about what you need",
    "footer.submit": "Send message", "footer.sending": "Sending...", "footer.success": "Thanks. Your message was sent.", "footer.error": "Sorry, the message could not be sent. Please try again or email us directly.", "footer.configError": "Contact form is not connected yet. Please add the EmailJS service ID, template ID and public key.", "footer.phoneValue": "+961 76 340 160", "footer.whatsappValue": "+961 76 340 160", "footer.locationValue": "Beirut, Lebanon", "footer.rights": "All rights reserved."
  },
  ar: {
    "nav.services": "الخدمات", "nav.work": "أعمالنا", "nav.about": "من نحن", "nav.process": "طريقة العمل", "nav.why": "لماذا نحن", "nav.contact": "تواصل", "nav.cta": "ابدأ مشروعاً",
    "hero.eyebrow": "حلول برمجية من بيروت إلى أي مكان.",
    "hero.title": "منتجات رقمية بسيطة، حديثة وموثوقة.",
    "hero.text": "نصمّم ونطوّر مواقع، تطبيقات أندرويد، حلول تقنية وهويات بصرية للشركات التي تريد أن تتقدم.",
    "hero.primary": "ابدأ مشروعاً", "hero.secondary": "شاهد ما نبنيه",
    "hero.trust": "شريك عملي واحد للمنتج والتقنية والتصميم.",
    "slogan.secure": "آمن", "slogan.advanced": "متقدم", "slogan.success": "نجاح",
    "services.kicker": "ماذا نقدم", "services.title": "فريق واحد لحضورك الرقمي بالكامل.",
    "services.intro": "من أول شاشة إلى النشر والدعم، نجمع التفكير بالمنتج والتطوير والتصميم تحت سقف واحد.",
    "work.kicker": "قدرات مختارة", "work.title": "أمثلة حقيقية لما يمكننا بناؤه لعملك.",
    "work.intro": "من المواقع العامة إلى الأنظمة الداخلية، يتم تخطيط كل حل حسب سير العمل والجمهور والميزانية خلفه.",
    "work.webType": "منصة ويب", "work.webTitle": "لوحات تحكم وبوابات أعمال", "work.webText": "منصات ويب تشغيلية للشركات التي تحتاج بيانات أوضح، ومسارات عمل أسرع، ومكاناً واحداً لإدارة العمل اليومي.",
    "work.webPoint1": "لوحات إدارة للفرق والفروع والعمليات اليومية", "work.webPoint2": "تقارير وفلاتر وتصدير وواجهات تساعد على اتخاذ القرار", "work.webPoint3": "مدفوعات ونماذج وواجهات API وتكاملات خارجية",
    "work.mobileType": "أندرويد", "work.mobileTitle": "تطبيقات موبايل واضحة", "work.mobileText": "تطبيقات أندرويد للعملاء أو الموظفين أو فرق العمل الميدانية، مبنية حول الإجراءات التي يحتاج الناس لإنجازها بسرعة.",
    "work.mobilePoint1": "إشعارات مفيدة ومسارات حساب واضحة", "work.mobilePoint2": "حجوزات وتوصيل وموقع ورحلات خدمات",
    "work.brandType": "هوية وتصميم", "work.brandTitle": "هوية بصرية متناسقة", "work.brandText": "أنظمة بصرية تجعل عملك متناسقاً على المواقع والتطبيقات والسوشيال ميديا والمواد المطبوعة.",
    "work.brandPoint1": "شعار وألوان وخطوط وأصول رقمية", "work.brandPoint2": "مكونات واجهة قابلة لإعادة الاستخدام للمواقع والتطبيقات",
    "work.example1Title": "متاجر إلكترونية", "work.example1Text": "كتالوجات منتجات، مسارات دفع، تتبع طلبات ولوحات إدارة.",
    "work.example2Title": "أنظمة حجز", "work.example2Text": "مواعيد، توافر، تذكيرات وإدارة عملاء.",
    "work.example3Title": "بوابات شركات", "work.example3Text": "أدوات داخلية للموظفين والفروع والمهام والملفات والموافقات.",
    "work.example4Title": "هويات إطلاق", "work.example4Text": "حزم علامة تجارية، صفحات هبوط، أصول سوشيال ومظهر جاهز للعرض.",
    "about.kicker": "عن SAS", "about.title": "قريبون بما يكفي لفهمك، ومجهزون بما يكفي للتنفيذ.",
    "about.p1": "SAS شركة حلول برمجية مقرها بيروت، تخدم الشركات في لبنان وخارجه.",
    "about.p2": "نحافظ على تواصل مباشر، ونختار التقنية بشكل عملي، ونبني كل مشروع حول الهدف الحقيقي لا حول التقنية بحد ذاتها.",
    "about.locationLabel": "مقرنا في",
    "process.kicker": "كيف نعمل", "process.title": "طريق واضح من الفكرة إلى الإطلاق.", "process.intro": "نحافظ على وضوح العمل وعمليته، مع أسعار مناسبة مبنية على ما يحتاجه مشروعك بالضبط.", "process.stepLabel": "خطوة",
    "process.priceTitle": "أسعار مناسبة ومخصصة", "process.priceText": "كل عرض يتم بناؤه حسب حاجة العميل: بدون باقات مبالغ فيها، وبدون نقص في الأساسيات، لا أكثر ولا أقل.",
    "why.kicker": "لماذا تعمل معنا", "why.title": "شريك يحافظ على وضوح العمل وعمليته وتقدمه.", "why.intro": "نجمع التخطيط والتصميم والتطوير ليكون مشروعك أقل تشتتاً، وقراراته أوضح، وطريقه من الفكرة إلى الإطلاق أسلس.",
    "voices.kicker": "كيف نريد أن يشعر عملاؤنا", "voices.title": "وضوح، دعم وثقة.",
    "faq.kicker": "أسئلة", "faq.title": "إجابات سريعة قبل أن نبدأ.",
    "faq.q1": "كم تكلفة المشروع؟", "faq.a1": "تختلف التكلفة حسب حجم المشروع وميزاته. نبني العرض حول ما تحتاجه فعلاً.",
    "faq.q2": "كم يحتاج المشروع من وقت؟", "faq.a2": "المواقع الصغيرة يمكن تنفيذها بسرعة. التطبيقات أو الأنظمة الأكبر تحتاج خطة أوضح نشاركها قبل البدء.",
    "faq.q3": "هل تقدمون دعماً بعد الإطلاق؟", "faq.a3": "نعم. نبقى متاحين للإصلاحات والتحديثات والخطوات التالية بعد الإطلاق.",
    "contact.kicker": "لنبنِ شيئاً مفيداً", "contact.title": "خبرنا ما الذي تفكر به.",
    "contact.text": "سواء كان موقعاً أو تطبيقاً أو حاجة تقنية أو هوية بصرية، أرسل لنا الفكرة ونبدأ من هناك.",
    "contact.cta": "أرسل استفسار مشروع", "contact.phone": "الهاتف", "contact.email": "البريد الإلكتروني", "contact.location": "الموقع",
    "footer.ctaTitle": "لنبنِ شيئاً مفيداً", "footer.ctaButton": "تواصل معنا",
    "footer.formKicker": "تواصل", "footer.formTitle": "خبرنا عن مشروعك.",
    "footer.text": "سواء كان موقعاً أو تطبيقاً أو حاجة تقنية أو هوية بصرية، أرسل لنا الفكرة ونبدأ من هناك.",
    "footer.responseTime": "نرد عادة خلال ساعتين.",
    "footer.name": "الاسم", "footer.email": "البريد", "footer.message": "الرسالة",
    "footer.namePlaceholder": "اسمك", "footer.emailPlaceholder": "you@example.com", "footer.messagePlaceholder": "بعض التفاصيل عما تحتاجه",
    "footer.submit": "أرسل الرسالة", "footer.sending": "جارٍ الإرسال...", "footer.success": "شكراً. تم إرسال رسالتك.", "footer.error": "تعذر إرسال الرسالة. حاول مرة أخرى أو راسلنا مباشرة عبر البريد.", "footer.configError": "نموذج التواصل غير متصل بعد. يرجى إضافة معلومات EmailJS.", "footer.phoneValue": "+961 76 340 160", "footer.whatsappValue": "+961 76 340 160", "footer.locationValue": "بيروت، لبنان", "footer.rights": "جميع الحقوق محفوظة."
  }
};

let lang = localStorage.getItem("sas-language") || "en";
let theme = localStorage.getItem("sas-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
let swiperInstance = null;

const q = (s) => document.querySelector(s);
const qa = (s) => [...document.querySelectorAll(s)];

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function renderServices() {
  q("#servicesGrid").innerHTML = CONFIG.services.map((item, index) => `
    <article class="service-card">
      <div class="service-icon">${icon(item.icon)}</div>
      <h3>${item[lang][0]}</h3>
      <p>${item[lang][1]}</p>
      <span class="service-no">0${index + 1}</span>
    </article>
  `).join("");
}

function renderAboutPoints() {
  q("#aboutList").innerHTML = CONFIG.aboutPoints[lang].map(text => `
    <div class="about-point">${icon("circle-check-big")}<span>${text}</span></div>
  `).join("");
}

function renderProcess() {
  q("#processGrid").innerHTML = CONFIG.process.map((step, index) => `
    <article class="process-card">
      <div class="process-icon">${icon(step.icon)}</div>
      <span class="process-no">${I18N[lang]["process.stepLabel"]} 0${index + 1}</span>
      <h3>${step[lang][0]}</h3>
      <p>${step[lang][1]}</p>
    </article>
  `).join("");
}

function renderWhyWork() {
  q("#whyWorkList").innerHTML = CONFIG.whyWork.map((item, index) => `
    <article class="why-card">
      <div class="why-icon">${icon(item.icon)}</div>
      <span class="why-no">0${index + 1}</span>
      <h3>${item[lang][0]}</h3>
      <p>${item[lang][1]}</p>
    </article>
  `).join("");
}

function renderTestimonials() {
  q("#testimonialTrack").innerHTML = CONFIG.testimonials.map(item => `
    <article class="swiper-slide testimonial-card">
      <p class="quote">“${item[lang][0]}”</p>
      <div class="person">
        <img src="${item.avatar}" alt="" />
        <div><strong>${item[lang][1]}</strong><span>${item[lang][2]}</span></div>
      </div>
    </article>
  `).join("");

  if (swiperInstance) swiperInstance.destroy(true, true);
  if (window.Swiper) {
    swiperInstance = new Swiper(".testimonial-swiper", {
      slidesPerView: 1.08,
      spaceBetween: 14,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 700: { slidesPerView: 2.05 }, 1050: { slidesPerView: 3 } }
    });
  }
}

function translatePage() {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  qa("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  qa("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });
  q("#langToggle").textContent = lang === "en" ? "AR" : "EN";
  renderServices();
  renderAboutPoints();
  renderProcess();
  renderWhyWork();
  renderTestimonials();
  refreshIcons();
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  const toggle = q("#themeToggle");
  toggle.innerHTML = theme === "dark" ? `${icon("sun")}<span class="fallback-icon">☀</span>` : `${icon("moon")}<span class="fallback-icon">◐</span>`;
  refreshIcons();
}

function playThemeToggleMotion() {
  const root = document.documentElement;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  root.classList.remove("theme-fading");
  void root.offsetWidth;
  root.classList.add("theme-fading");
  window.setTimeout(() => root.classList.remove("theme-fading"), 220);
}

function changeTheme(nextTheme) {
  theme = nextTheme;
  localStorage.setItem("sas-theme", theme);
  applyTheme();
  playThemeToggleMotion();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
  } else {
    qa(".fallback-icon").forEach(el => el.style.display = "inline");
  }
}

function setupInteractions() {
  q("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    localStorage.setItem("sas-language", lang);
    translatePage();
  });

  q("#themeToggle").addEventListener("click", () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  });

  q("#menuToggle").addEventListener("click", () => q("#mobileMenu").classList.toggle("open"));
  qa("#mobileMenu a").forEach(a => a.addEventListener("click", () => q("#mobileMenu").classList.remove("open")));
}

function hasEmailJsConfig() {
  return Object.values(EMAILJS_CONFIG).every(value => value && !value.startsWith("YOUR_"));
}

function setFormStatus(type, message) {
  const status = q("#contactFormStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.status = type;
}

function setupContactForm() {
  const form = q("#contactForm");
  if (!form) return;

  const submitButton = form.querySelector("button[type='submit']");
  const submitLabel = submitButton?.querySelector("[data-i18n]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (!window.emailjs || !hasEmailJsConfig()) {
      setFormStatus("error", I18N[lang]["footer.configError"]);
      return;
    }

    submitButton.disabled = true;
    setFormStatus("info", I18N[lang]["footer.sending"]);
    if (submitLabel) submitLabel.textContent = I18N[lang]["footer.sending"];

    try {
      await window.emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        { publicKey: EMAILJS_CONFIG.publicKey }
      );

      form.reset();
      setFormStatus("success", I18N[lang]["footer.success"]);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setFormStatus("error", I18N[lang]["footer.error"]);
    } finally {
      submitButton.disabled = false;
      if (submitLabel) submitLabel.textContent = I18N[lang]["footer.submit"];
      refreshIcons();
    }
  });
}

function setupMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero-copy > *", { opacity: 0, y: 22, duration: .75, stagger: .08, ease: "power2.out" });
  gsap.from(".hero-art", { opacity: 0, scale: .96, y: 20, duration: .9, ease: "power2.out" });
  gsap.utils.toArray(".js-reveal").forEach((el) => {
    if (el.closest(".hero-grid")) return;
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 86%", once: true },
      opacity: 0, y: 26, duration: .7, ease: "power2.out"
    });
  });
}

q("#year").textContent = new Date().getFullYear();
setupInteractions();
setupContactForm();
applyTheme();
translatePage();
setupMotion();
