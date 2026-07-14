/**
 * HSC Board Papers Software
 * HarshTech Technology
 * Main Application JavaScript
 */

// =============================================
// PAPER DATA CONFIGURATION
// =============================================
// To add a PDF link: replace "" with the URL of the PDF
// e.g., "https://your-link.com/physics_2019.pdf"
// If link is blank (""), the "Paper Not Found" popup will show.

const PAPER_DATA = {
  2019: {
    Physics:     "assets/DATA/2019/Physics_2019.pdf",
    Chemistry:   "assets/DATA/2019/Chemistry_2019.pdf",
    Mathematics: "assets/DATA/2019/Mathematics_2019.pdf",
    Biology:     "assets/DATA/2019/Biology_2019.pdf",
    English:     "",
    Geography:   "",
    Hindi:       "",
  },
  2020: {
    Physics:     "assets/DATA/2020/Physics_2020.pdf",
    Chemistry:   "assets/DATA/2020/Chemistry_2020.pdf",
    Mathematics: "assets/DATA/2020/Mathematics_2020.pdf",
    Biology:     "assets/DATA/2020/Biology_2020.pdf",
    English:     "assets/DATA/2020/English_2020.pdf",
    Geography:   "",
    Hindi:       "assets/DATA/2020/Hindi_2020.pdf",
  },
  2021: "CANCELLED", // COVID-19
  2022: {
    Physics:     "assets/DATA/2022/Physics_2022.pdf",
    Chemistry:   "assets/DATA/2022/Chemistry_2022.pdf",
    Mathematics: "assets/DATA/2022/Mathematics_2022.pdf",
    Biology:     "assets/DATA/2022/Biology_2022.pdf",
    English:     "assets/DATA/2022/English_2022.pdf",
    Geography:   "assets/DATA/2022/Geography_2022.pdf",
    Hindi:       "assets/DATA/2022/Hindi_2022.pdf",
  },
  2023: {
    Physics:     "assets/DATA/2023/Physics_2023.pdf",
    Chemistry:   "assets/DATA/2023/Chemistry_2023.pdf",
    Mathematics: "assets/DATA/2023/Mathematics_2023.pdf",
    Biology:     "assets/DATA/2023/Biology_2023.pdf",
    English:     "assets/DATA/2023/English_2023.pdf",
    Geography:   "assets/DATA/2023/Geography_2023.pdf",
    Hindi:       "assets/DATA/2023/Hindi_2023.pdf",
  },
  // 2024: has two sessions
  "2024-March": {
    Physics:     "assets/DATA/2024/2024_MARCH/Physics_2024_March.pdf",
    Chemistry:   "assets/DATA/2024/2024_MARCH/Chemistry_2024_March.pdf",
    Mathematics: "assets/DATA/2024/2024_MARCH/Mathematics_2024_March.pdf",
    Biology:     "assets/DATA/2024/2024_MARCH/Biology_2024_March.pdf",
    English:     "assets/DATA/2024/2024_MARCH/English_2024_March.pdf",
    Geography:   "assets/DATA/2024/2024_MARCH/Geography_2024_March.pdf",
    Hindi:       "",
  },
  "2024-July": {
    Physics:     "assets/DATA/2024/2024_Jully/Physics_2024_Jully.pdf",
    Chemistry:   "assets/DATA/2024/2024_Jully/Chemistry_2024_Jully.pdf",
    Mathematics: "assets/DATA/2024/2024_Jully/Mathematics_2024_Jully.pdf",
    Biology:     "assets/DATA/2024/2024_Jully/Biology_2024_Jully.pdf",
    English:     "assets/DATA/2024/2024_Jully/Englis_2024_Jully.pdf",
    Geography:   "assets/DATA/2024/2024_Jully/Geography_2024_Jully.pdf",
    Hindi:       "",
  },
  // 2025: has two sessions
  "2025-March": {
    Physics:     "assets/DATA/2025/2025_MARCH/Physics_2025_March.pdf",
    Chemistry:   "assets/DATA/2025/2025_MARCH/Chemistry_2025_March.pdf",
    Mathematics: "assets/DATA/2025/2025_MARCH/Mathematics_2025_March.pdf",
    Biology:     "assets/DATA/2025/2025_MARCH/Biology_2025_March.pdf",
    English:     "assets/DATA/2025/2025_MARCH/English_2025_March.pdf",
    Geography:   "assets/DATA/2025/2025_MARCH/Geography_2025_March_Marathi.pdf",
    Hindi:       "",
  },
  "2025-July": {
    Physics:     "assets/DATA/2025/2025_Jully/Physics_2025_Jully.pdf",
    Chemistry:   "assets/DATA/2025/2025_Jully/Chemistry_2025_Jully.pdf",
    Mathematics: "assets/DATA/2025/2025_Jully/Mathematics_2025_Jully.pdf",
    Biology:     "assets/DATA/2025/2025_Jully/Biology_2025_Jully.pdf",
    English:     "assets/DATA/2025/2025_Jully/English_2025_Jully.pdf",
    Geography:   "assets/DATA/2025/2025_Jully/Geography_2025_Jully.pdf",
    Hindi:       "",
  },
  2026: {
    Physics:     "assets/DATA/2026/Physics_2026.pdf",
    Chemistry:   "assets/DATA/2026/Chemistry_2026.pdf",
    Mathematics: "assets/DATA/2026/Mathematics_2026.pdf",
    Biology:     "assets/DATA/2026/Biology_2026.pdf",
    English:     "assets/DATA/2026/English_2026.pdf",
    Geography:   "assets/DATA/2026/Geography_2026.pdf",
    Hindi:       "assets/DATA/2026/Hindi_2026.pdf",
    "Electronics Part I": "assets/DATA/2026/e1_2026.pdf",
    "Electronics Part II": "assets/DATA/2026/e2_2026.pdf",
    Marathi:     "assets/DATA/2026/Marathi_2026.pdf",
    "Computer Science-I": "assets/DATA/2026/Compute_Science_P_I_2026.pdf",
    "Computer Science-II": "assets/DATA/2026/Computer_Science_P_II_2026.pdf",
    Sanskrit:    "assets/DATA/2026/Sanskruit_2026.pdf",
  },
  2027: "COMING_SOON",
};

// Subject meta information
const SUBJECT_META = {
  Physics: {
    icon: "⚛️",
    desc: "Mechanics, Waves, Electricity & Modern Physics",
    color: "#1a73e8",
    bg: "rgba(26,115,232,0.1)",
  },
  Chemistry: {
    icon: "🧪",
    desc: "Organic, Inorganic & Physical Chemistry",
    color: "#34a853",
    bg: "rgba(52,168,83,0.1)",
  },
  Mathematics: {
    icon: "📐",
    desc: "Algebra, Calculus, Statistics & Geometry",
    color: "#a142f4",
    bg: "rgba(161,66,244,0.1)",
  },
  Biology: {
    icon: "🧬",
    desc: "Botany, Zoology & Human Physiology",
    color: "#34a853",
    bg: "rgba(52,168,83,0.1)",
  },
  English: {
    icon: "📖",
    desc: "Literature, Writing & Grammar",
    color: "#fa7b17",
    bg: "rgba(250,123,23,0.1)",
  },
  Geography: {
    icon: "🌍",
    desc: "Physical & Human Geography",
    color: "#0097a7",
    bg: "rgba(0,151,167,0.1)",
  },
  Hindi: {
    icon: "🔤",
    desc: "Hindi Language & Literature",
    color: "#ea4335",
    bg: "rgba(234,67,53,0.1)",
  },
  "Electronics Part I": {
    icon: "⚡",
    desc: "Applied Electronics, Semiconductors & Instruments",
    color: "#00796b",
    bg: "rgba(0,121,107,0.1)",
  },
  "Electronics Part II": {
    icon: "📟",
    desc: "Digital Electronics, Gates & Microprocessors",
    color: "#e65100",
    bg: "rgba(230,81,0,0.1)",
  },
  Marathi: {
    icon: "✍️",
    desc: "Marathi Language & Literature",
    color: "#e040fb",
    bg: "rgba(224,64,251,0.1)",
  },
  "Computer Science-I": {
    icon: "💻",
    desc: "CS Paper I — Software & HTML",
    color: "#00e676",
    bg: "rgba(0,230,118,0.1)",
  },
  "Computer Science-II": {
    icon: "🖥️",
    desc: "CS Paper II — Hardware & Microprocessors",
    color: "#29b6f6",
    bg: "rgba(41,182,246,0.1)",
  },
  Sanskrit: {
    icon: "📜",
    desc: "Sanskrit Language & Literature",
    color: "#ff9100",
    bg: "rgba(255,145,0,0.1)",
  },
};

const YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
const YEAR_ICONS = {
  2019: "📂", 2020: "📂", 2021: "🚫", 2022: "📂",
  2023: "📂", 2024: "📁", 2025: "📁", 2026: "📂", 2027: "🆕",
};

// APP STATE
// =============================================
const App = {
  currentPage: "home",
  currentYear: null,
  currentSession: null,
};

// =============================================
// PAGE MANAGEMENT
// =============================================
function showPage(pageId) {
  document.querySelectorAll(".app-page").forEach((p) => {
    p.classList.add("hidden");
  });
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("page-section");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  App.currentPage = pageId;
  updateNavActive(pageId);
}

function updateNavActive(pageId) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === pageId) {
      link.classList.add("active");
    }
  });
}

// =============================================
// HOME PAGE — YEAR CARDS
// =============================================
function renderYearGrid() {
  const grid = document.getElementById("yearGrid");
  if (!grid) return;
  grid.innerHTML = "";

  YEARS.forEach((year) => {
    const card = document.createElement("div");
    const isCancelled = PAPER_DATA[year] === "CANCELLED";
    const isMultiSession = year === 2024 || year === 2025;
    const isFuture = PAPER_DATA[year] === "COMING_SOON";

    let extraClass = "";
    let label = "View Papers";
    if (isCancelled) {
      extraClass = "cancelled";
      label = "Cancelled";
    } else if (isMultiSession) {
      extraClass = "active";
      label = "2 Sessions";
    } else if (isFuture) {
      extraClass = "future";
      label = "Coming Soon";
    }

    card.className = `year-card ${extraClass}`;
    card.dataset.year = year;
    card.innerHTML = `
      <span class="year-icon">${YEAR_ICONS[year] || "📂"}</span>
      <span class="year-number">${year}</span>
      <span class="year-label">${label}</span>
    `;

    if (!isFuture) {
      card.addEventListener("click", () => handleYearClick(year));
    }

    grid.appendChild(card);
  });
}

function handleYearClick(year) {
  App.currentYear = year;
  App.currentSession = null;

  if (PAPER_DATA[year] === "CANCELLED") {
    showCovidModal();
    return;
  }

  if (year === 2024 || year === 2025) {
    renderSessionPage(year);
    showPage("sessionPage");
    return;
  }

  renderSubjectPage(year, null);
  showPage("subjectPage");
}

// =============================================
// COVID CANCELLED MODAL
// =============================================
function showCovidModal() {
  const overlay = document.getElementById("covidModalOverlay");
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function hideCovidModal() {
  const overlay = document.getElementById("covidModalOverlay");
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
}

// =============================================
// SESSION PAGE (2024 / 2025)
// =============================================
function renderSessionPage(year) {
  const container = document.getElementById("sessionContent");
  if (!container) return;

  document.getElementById("sessionPageYear").textContent = year;
  const yearLabel = document.getElementById("sessionPageYearLabel");
  if (yearLabel) yearLabel.textContent = year;

  container.innerHTML = `
    <div class="exam-type-grid animate-stagger">
      <div class="exam-type-card main-exam" id="sessionMarchCard" data-session="March">
        <span class="et-badge">🗓️ Main Exam</span>
        <span class="et-icon">📅</span>
        <div class="et-title">March ${year}</div>
        <span class="et-arrow">→</span>
      </div>
      <div class="exam-type-card supp-exam" id="sessionJulyCard" data-session="July">
        <span class="et-badge">📋 Supplementary</span>
        <span class="et-icon">📝</span>
        <div class="et-title">July ${year}</div>
        <div class="et-desc">
          <strong>Supplementary Exam Papers</strong> — These are the additional exam papers
          provided for students who need a second opportunity to clear their subjects.
          Also known as the July Re-Examination.
        </div>
        <span class="et-arrow">→</span>
      </div>
    </div>
  `;

  container.querySelectorAll(".exam-type-card").forEach((card) => {
    card.addEventListener("click", () => {
      const session = card.dataset.session;
      App.currentSession = session;
      renderSubjectPage(year, session);
      showPage("subjectPage");
    });
  });
}

// =============================================
// SUBJECT PAGE
// =============================================
function renderSubjectPage(year, session) {
  const container = document.getElementById("subjectGrid");
  const headerYear = document.getElementById("subjectPageYear");
  const headerTitle = document.getElementById("subjectPageTitle");
  const backBtn = document.getElementById("subjectBackBtn");
  const breadcrumbSession = document.getElementById("breadcrumbSession");
  if (!container) return;

  const sessionKey = session ? `${year}-${session}` : year;
  const papers = PAPER_DATA[sessionKey] || PAPER_DATA[year] || {};
  const displayYear = session ? `${session} ${year}` : `${year}`;
  const sessionType = session === "July" ? "Supplementary" : session ? "Main Exam" : "Board Exam";

  if (headerYear) headerYear.textContent = displayYear;
  if (headerTitle) headerTitle.textContent = `${year} ${sessionType} — Question Papers`;
  const breadcrumbYear = document.getElementById("breadcrumbYear");
  if (breadcrumbYear) breadcrumbYear.textContent = String(year);
  if (breadcrumbSession) {
    breadcrumbSession.textContent = session ? ` › ${session} ${year}` : "";
  }

  // Back button logic
  if (backBtn) {
    backBtn.onclick = () => {
      if (session) {
        showPage("sessionPage");
      } else {
        showPage("home");
      }
    };
  }

  container.innerHTML = "";
  let subjects = ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Geography", "Hindi"];
  if (String(year) === "2026") {
    subjects.push(
      "Electronics Part I", "Electronics Part II",
      "Marathi", "Computer Science-I", "Computer Science-II", "Sanskrit"
    );
  }

  subjects.forEach((subject) => {
    const meta = SUBJECT_META[subject];
    const link = papers[subject];
    const card = document.createElement("div");
    card.className = "subject-card animate-fade-in";
    card.style.setProperty("--card-color", meta.color);
    card.style.setProperty("--card-bg", meta.bg);
    card.innerHTML = `
      <div class="subject-icon">${meta.icon}</div>
      <div>
        <div class="subject-name">${subject}</div>
        <div class="subject-desc">${meta.desc}</div>
      </div>
      <div class="subject-arrow">→</div>
    `;
    card.addEventListener("click", () => handleSubjectClick(link, subject, displayYear));
    container.appendChild(card);
  });

  // Stagger animation
  container.querySelectorAll(".subject-card").forEach((card, i) => {
    card.style.animationDelay = `${i * 0.07}s`;
  });
}

function handleSubjectClick(link, subject, year) {
  if (!link || link.trim() === "") {
    showNotFoundPopup(subject, year);
  } else {
    window.open(link, "_blank");
  }
}

// =============================================
// NOT FOUND POPUP
// =============================================
function showNotFoundPopup(subject, year) {
  const existing = document.getElementById("notFoundPopup");
  if (existing) existing.remove();

  const popup = document.createElement("div");
  popup.className = "not-found-popup";
  popup.id = "notFoundPopup";
  popup.innerHTML = `
    <div class="not-found-box">
      <div class="nf-icon">🔍</div>
      <h3>Paper Not Found</h3>
      <p>
        The <strong>${subject}</strong> question paper for <strong>${year}</strong>
        is currently not available.<br><br>
        Please check back later or contact us for assistance.
        The paper will be uploaded by the developer soon.
      </p>
      <button class="close-popup-btn" id="closeNotFoundBtn">
        ✕ &nbsp; Close
      </button>
    </div>
  `;

  document.body.appendChild(popup);
  document.body.style.overflow = "hidden";

  document.getElementById("closeNotFoundBtn").addEventListener("click", () => {
    popup.remove();
    document.body.style.overflow = "";
  });

  // Click outside to close
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.remove();
      document.body.style.overflow = "";
    }
  });
}

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
  const hamburger = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      const spans = hamburger.querySelectorAll("span");
      if (mobileMenu.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";
      }
    });
  }

  // Nav link routing
  document.querySelectorAll("[data-page]").forEach((el) => {
    el.addEventListener("click", () => {
      const page = el.dataset.page;
      if (page === "home") {
        showPage("home");
      } else if (page === "about") {
        showPage("about");
      } else if (page === "contact") {
        showPage("contact");
      }
      // Close mobile menu if open
      if (mobileMenu && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
      }
    });
  });
}

// =============================================
// FOOTER VIDEO
// =============================================
function initFooterVideo() {
  const video = document.getElementById("footerVideo");
  if (video) {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});
  }
}

// =============================================
// ALL THE BEST PARTICLES
// =============================================
function initParticles() {
  const container = document.getElementById("atbParticles");
  if (!container) return;
  const count = 12;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "atb-particle";
    p.style.setProperty("--x", `${Math.random() * 100}%`);
    p.style.setProperty("--y", `${Math.random() * 100}%`);
    p.style.setProperty("--dur", `${2 + Math.random() * 2}s`);
    p.style.setProperty("--delay", `${Math.random() * 2}s`);
    container.appendChild(p);
  }
}

// =============================================
// CONTACT LINK
// =============================================
// Set your contact page external link here:
const CONTACT_LINK = "https://harshadteli.github.io/contactharshadteli/"; // e.g., "https://forms.google.com/your-form"

function initContactPage() {
  const contactBtn = document.getElementById("contactExternalBtn");
  if (!contactBtn) return;

  if (CONTACT_LINK && CONTACT_LINK.trim() !== "") {
    contactBtn.href = CONTACT_LINK;
    contactBtn.target = "_blank";
  } else {
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Contact link will be available soon!");
    });
  }
}

// =============================================
// TOAST
// =============================================
function showToast(message) {
  const existing = document.getElementById("appToast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.id = "appToast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// =============================================
// ABOUT DEVELOPER — Profile Image
// =============================================
function initDeveloperProfile() {
  const img = document.getElementById("developerProfileImg");
  if (!img) return;

  // Fallback: if the external profile URL fails to load, show emoji avatar
  img.onerror = () => {
    img.style.display = "none";
    // Create a simple text-avatar fallback
    const wrap = img.parentElement;
    if (wrap) {
      const fallback = document.createElement("div");
      fallback.style.cssText = `
        width:100px;height:100px;border-radius:50%;border:4px solid #fff;
        background:linear-gradient(135deg,#1a73e8,#34a853);
        display:flex;align-items:center;justify-content:center;
        font-size:2.5rem;box-shadow:0 2px 8px rgba(0,0,0,0.15);
      `;
      fallback.textContent = "👨‍💻";
      wrap.appendChild(fallback);
    }
  };
}

// =============================================
// GOOGLE CHATBOT CONTROLLER
// =============================================
let chatbotTtsEnabled = false;

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

function toggleTts() {
  chatbotTtsEnabled = !chatbotTtsEnabled;
  const toggleIcon = document.getElementById("ttsToggleIcon");
  const toggleBtn = document.getElementById("chatbotTtsToggle");
  if (!toggleIcon || !toggleBtn) return;
  
  if (chatbotTtsEnabled) {
    toggleBtn.title = "Toggle Text-to-Speech (Enabled)";
    toggleIcon.classList.remove("muted");
    toggleIcon.classList.add("active");
    toggleIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    showToast("Text-to-speech auto-read enabled!");
  } else {
    toggleBtn.title = "Toggle Text-to-Speech (Muted)";
    toggleIcon.classList.remove("active");
    toggleIcon.classList.add("muted");
    toggleIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-11 7.77v2h4l5 5V5l-5 5H3z"/>`;
    window.speechSynthesis.cancel();
    showToast("Text-to-speech auto-read muted!");
  }
}

function initChatbot() {
  const toggleBtn = document.getElementById("chatbotToggleBtn");
  const closeBtn = document.getElementById("chatbotCloseBtn");
  const chatWindow = document.getElementById("chatbotWindow");
  const inputForm = document.getElementById("chatbotInputForm");
  const ttsToggle = document.getElementById("chatbotTtsToggle");

  if (!toggleBtn || !chatWindow) return;

  toggleBtn.addEventListener("click", () => {
    chatWindow.classList.toggle("open");
    if (chatWindow.classList.contains("open")) {
      const inputEl = document.getElementById("chatbotInput");
      if (inputEl) inputEl.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      chatWindow.classList.remove("open");
    });
  }

  if (ttsToggle) {
    ttsToggle.addEventListener("click", toggleTts);
  }

  if (inputForm) {
    inputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleUserSendMessage();
    });
  }

  renderBotMessage(
    "👋 Hello! I am your **HSC Papers Assistant**.\n\n" +
    "How can I help you today? Here's how to search:\n" +
    "• Type a **year** (e.g. `2022`) to list all subject papers for that year.\n" +
    "• Type a **subject** (e.g. `Physics`, `Marathi`, `Computer Science`) to find papers across all years.\n" +
    "• **Direct PDF:** Type `[Subject]-[Year]` (e.g. `Physics-2019`, `Chemistry-2023`) to open the PDF directly.\n\n" +
    "📌 **Note for 2024 & 2025:** March = Main Exam | July = Supplementary Exam.\n" +
    "📌 **2026 subjects include:** Electronics I & II, Marathi, Computer Science I & II, Sanskrit.",
    false
  );
}

function formatBotText(text) {
  let html = text.replace(/\n/g, "<br>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/• /g, "&bull; ");
  return html;
}

function renderBotMessage(text, speak = true) {
  const container = document.getElementById("chatbotMessages");
  if (!container) return;

  const row = document.createElement("div");
  row.className = "chat-message-row bot animate-fade-in";

  const formattedText = formatBotText(text);

  row.innerHTML = `
    <div class="chat-bubble">
      <div>${formattedText}</div>
      <div class="chat-bubble-actions">
        <button class="chat-speech-btn" title="Speak Message">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  const speakBtn = row.querySelector(".chat-speech-btn");
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = formattedText;
  const plainText = tempDiv.textContent || tempDiv.innerText;

  if (speakBtn) {
    speakBtn.addEventListener("click", () => {
      speakText(plainText);
    });
  }

  container.appendChild(row);
  container.scrollTop = container.scrollHeight;

  if (speak && chatbotTtsEnabled) {
    speakText(plainText);
  }
}

function renderUserMessage(text) {
  const container = document.getElementById("chatbotMessages");
  if (!container) return;

  const row = document.createElement("div");
  row.className = "chat-message-row user animate-fade-in";
  row.innerHTML = `
    <div class="chat-bubble">
      ${text}
    </div>
  `;

  container.appendChild(row);
  container.scrollTop = container.scrollHeight;
}

function handleUserSendMessage() {
  const inputEl = document.getElementById("chatbotInput");
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (text === "") return;

  renderUserMessage(text);
  inputEl.value = "";

  setTimeout(() => {
    processChatbotQuery(text);
  }, 400);
}

function processChatbotQuery(query) {
  const normalized = query.trim().toLowerCase();

  // 1. Direct match: e.g. physics-2019
  if (normalized.includes("-")) {
    const parts = normalized.split("-");
    if (parts.length === 2) {
      const subQuery = parts[0].trim();
      const yearQuery = parts[1].trim();
      const year = parseInt(yearQuery);
      const subject = normalizeSubject(subQuery);

      if (year && subject) {
        if (!YEARS.includes(year)) {
          renderBotMessage(`Sorry, the year **${year}** is outside of the supported range (2019-2027).`);
          return;
        }

        if (year === 2021) {
          renderBotMessage(`The HSC Board Exams for **2021** were cancelled due to the COVID-19 pandemic. No question papers are available.`);
          return;
        }

        if (year === 2027) {
          renderBotMessage(`The year **2027** papers are **Coming Soon!** They have not been released yet. Please check back later.`);
          return;
        }

        if (year === 2024 || year === 2025) {
          const sessionMarch = `${year}-March`;
          const sessionJuly = `${year}-July`;
          const urlMarch = PAPER_DATA[sessionMarch] ? PAPER_DATA[sessionMarch][subject] : "";
          const urlJuly = PAPER_DATA[sessionJuly] ? PAPER_DATA[sessionJuly][subject] : "";

          let reply = `For the year **${year}**, there are two exam sessions available:\n\n`;
          let linksHtml = `<div class="chat-links-list">`;

          if (urlMarch) {
            linksHtml += `<a href="${urlMarch}" target="_blank" class="chat-pdf-link">📄 March ${year} (Main Exam) - ${subject} PDF</a>`;
          } else {
            linksHtml += `<span style="font-size:0.8rem;color:var(--text-hint);">📄 March ${year} Main Exam - Not Uploaded</span><br>`;
          }

          if (urlJuly) {
            linksHtml += `<a href="${urlJuly}" target="_blank" class="chat-pdf-link">📄 July ${year} (Supplementary) - ${subject} PDF</a>`;
          } else {
            linksHtml += `<span style="font-size:0.8rem;color:var(--text-hint);">📄 July ${year} Supplementary - Not Uploaded</span><br>`;
          }
          linksHtml += `</div>`;

          renderBotMessage(reply);
          
          const messagesContainer = document.getElementById("chatbotMessages");
          const botRow = messagesContainer.lastElementChild;
          if (botRow) {
            const bubble = botRow.querySelector(".chat-bubble");
            if (bubble) {
              const actionsDiv = bubble.querySelector(".chat-bubble-actions");
              const linksContainer = document.createElement("div");
              linksContainer.innerHTML = linksHtml;
              bubble.insertBefore(linksContainer, actionsDiv);
            }
          }
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
          return;
        }

        const papers = PAPER_DATA[year] || {};
        const url = papers[subject];

        if (url && url.trim() !== "") {
          window.open(url, "_blank");
          renderBotMessage(`Opening **${subject}** question paper for the year **${year}** in a new tab!`);
        } else {
          renderBotMessage(`The **${subject}** question paper for the year **${year}** is currently not available or blank. Please check back later.`);
        }
        return;
      }
    }
  }

  // 2. Year Match (e.g. 2020)
  const possibleYear = parseInt(normalized);
  if (possibleYear && YEARS.includes(possibleYear)) {
    if (possibleYear === 2021) {
      renderBotMessage(`The HSC Board Exams for **2021** were cancelled due to the COVID-19 pandemic. Alternative evaluation was used, so no papers exist.`);
      return;
    }

    if (possibleYear === 2027) {
      renderBotMessage(`The **2027** HSC Board papers are **Coming Soon!** They haven't been released yet. Stay tuned! 📅`);
      return;
    }

    if (possibleYear === 2024 || possibleYear === 2025) {
      renderBotMessage(
        `The year **${possibleYear}** has two exam sessions:\n` +
        `• **March ${possibleYear}** — Main Exam\n` +
        `• **July ${possibleYear}** — Supplementary Exam\n\n` +
        `Use the format \`[Subject]-${possibleYear}\` (e.g. \`Physics-${possibleYear}\`) to get direct links for both!`
      );
      return;
    }

    const papers = PAPER_DATA[possibleYear] || {};
    let reply = `Here are the available papers for **${possibleYear}**:\n`;
    let linksHtml = `<div class="chat-links-list">`;
    
    let subjectsList = ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Geography", "Hindi"];
    if (possibleYear === 2026) {
      subjectsList.push(
        "Electronics Part I", "Electronics Part II",
        "Marathi", "Computer Science-I", "Computer Science-II", "Sanskrit"
      );
    }

    subjectsList.forEach((sub) => {
      const url = papers[sub];
      if (url && url.trim() !== "") {
        linksHtml += `<a href="${url}" target="_blank" class="chat-pdf-link">📄 ${sub} ${possibleYear} PDF</a>`;
      } else {
        linksHtml += `<span style="font-size:0.8rem;color:var(--text-hint);">${sub} - Not Available</span><br>`;
      }
    });
    linksHtml += `</div>`;

    renderBotMessage(reply);
    
    const messagesContainer = document.getElementById("chatbotMessages");
    const botRow = messagesContainer.lastElementChild;
    if (botRow) {
      const bubble = botRow.querySelector(".chat-bubble");
      if (bubble) {
        const actionsDiv = bubble.querySelector(".chat-bubble-actions");
        const linksContainer = document.createElement("div");
        linksContainer.innerHTML = linksHtml;
        bubble.insertBefore(linksContainer, actionsDiv);
      }
    }
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return;
  }

  // 3. Subject Match (e.g. chemistry)
  const matchedSubject = normalizeSubject(normalized);
  if (matchedSubject) {
    let reply = `Here are the available years for **${matchedSubject}**:\n`;
    let linksHtml = `<div class="chat-links-list">`;

    YEARS.forEach((yr) => {
      if (yr === 2021) return;

      if (yr === 2027) return; // Coming Soon — skip in listings

      if (yr === 2024 || yr === 2025) {
        const urlMarch = PAPER_DATA[`${yr}-March`] ? PAPER_DATA[`${yr}-March`][matchedSubject] : "";
        const urlJuly = PAPER_DATA[`${yr}-July`] ? PAPER_DATA[`${yr}-July`][matchedSubject] : "";

        if (urlMarch) {
          linksHtml += `<a href="${urlMarch}" target="_blank" class="chat-pdf-link">📄 March ${yr} (Main Exam) - ${matchedSubject} PDF</a>`;
        }
        if (urlJuly) {
          linksHtml += `<a href="${urlJuly}" target="_blank" class="chat-pdf-link">📄 July ${yr} (Supplementary) - ${matchedSubject} PDF</a>`;
        }
        return;
      }

      const papers = PAPER_DATA[yr] || {};
      const url = papers[matchedSubject];
      if (url && url.trim() !== "") {
        linksHtml += `<a href="${url}" target="_blank" class="chat-pdf-link">📄 ${yr} Board Exam - ${matchedSubject} PDF</a>`;
      }
    });
    linksHtml += `</div>`;

    renderBotMessage(reply);
    
    const messagesContainer = document.getElementById("chatbotMessages");
    const botRow = messagesContainer.lastElementChild;
    if (botRow) {
      const bubble = botRow.querySelector(".chat-bubble");
      if (bubble) {
        const actionsDiv = bubble.querySelector(".chat-bubble-actions");
        const linksContainer = document.createElement("div");
        linksContainer.innerHTML = linksHtml;
        bubble.insertBefore(linksContainer, actionsDiv);
      }
    }
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return;
  }

  if (normalized === "help" || normalized === "hi" || normalized === "hello") {
    renderBotMessage(
      "👋 Hello! I am your **HSC Papers Assistant**.\n\n" +
      "Here's how to search:\n" +
      "• Type a **year** (e.g. `2022`) to list all subject papers for that year.\n" +
      "• Type a **subject** (e.g. `Physics`, `Marathi`, `Computer Science`) to find papers across all years.\n" +
      "• **Direct PDF:** Type `[Subject]-[Year]` (e.g. `Physics-2019`, `Chemistry-2023`) to open the PDF directly.\n\n" +
      "📌 **Note for 2024 & 2025:** March = Main Exam | July = Supplementary Exam."
    );
  } else {
    renderBotMessage(
      "I couldn't quite understand your search. 😅\n\n" +
      "Try typing a **year** (e.g. `2020`), a **subject** (e.g. `Physics` or `Marathi`), or use the direct format: `[Subject]-[Year]` (e.g. `Physics-2019`)."
    );
  }
}

function normalizeSubject(sub) {
  sub = sub.trim().toLowerCase();
  if (sub.startsWith("phy")) return "Physics";
  if (sub.startsWith("chem")) return "Chemistry";
  if (sub.startsWith("math")) return "Mathematics";
  if (sub.startsWith("bio")) return "Biology";
  if (sub.startsWith("eng")) return "English";
  if (sub.startsWith("geo")) return "Geography";
  if (sub.startsWith("hin")) return "Hindi";
  if (sub.includes("electronics") && (sub.includes("part 2") || sub.includes("ii") || sub.includes("2") || sub.includes("two"))) return "Electronics Part II";
  if (sub.includes("electronics")) return "Electronics Part I";
  if (sub.startsWith("mar")) return "Marathi";
  if (sub.includes("computer") && (sub.includes("2") || sub.includes("ii") || sub.includes("two"))) return "Computer Science-II";
  if (sub.includes("computer") || sub.startsWith("cs")) return "Computer Science-I";
  if (sub.startsWith("san") || sub.startsWith("skr")) return "Sanskrit";
  return null;
}

// =============================================
// INIT
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  renderYearGrid();
  initNavbar();
  initFooterVideo();
  initParticles();
  initContactPage();
  initDeveloperProfile();
  initChatbot();
  showPage("home");

  // COVID Modal close button
  const covidCloseBtn = document.getElementById("covidModalCloseBtn");
  if (covidCloseBtn) {
    covidCloseBtn.addEventListener("click", hideCovidModal);
  }

  // Click overlay to close covid modal
  const covidOverlay = document.getElementById("covidModalOverlay");
  if (covidOverlay) {
    covidOverlay.addEventListener("click", (e) => {
      if (e.target === covidOverlay) hideCovidModal();
    });
  }

  // Keyboard Escape to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideCovidModal();
      const notFoundPopup = document.getElementById("notFoundPopup");
      if (notFoundPopup) {
        notFoundPopup.remove();
        document.body.style.overflow = "";
      }
    }
  });
});
