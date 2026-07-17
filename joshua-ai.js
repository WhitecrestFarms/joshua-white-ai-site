(() => {
  const PHONE_DISPLAY = "607-207-6969";
  const PHONE_LINK = "tel:16072076969";
  const EMAIL = "joshuawhite@howardhanna.com";

  const LINKS = {
    search: "#search",
    value: "https://homevalue.howardhanna.com/joshuawilliamwhite",
    mortgage: "https://mymortgageapp.1stprioritymortgage.com/dr/c/1hy1e",
    findFirst: "https://joshuawilliamwhite.howardhanna.com/find-it-first",
    hannaList: "https://joshuawilliamwhite.howardhanna.com/hanna-list",
    neighborhood: "https://joshuawilliamwhite.howardhanna.com/neighborhoodnews",
    google: "https://share.google/YbejLCxPQaZYuZrGc",
    zillow: "https://www.zillow.com/profile/JoshuaWhiteRealtor",
    facebook: "https://www.facebook.com/JoshuaWhiteRealtor",
    instagram: "https://www.instagram.com/joshuawwhiterealtor/",
    youtube: "https://www.youtube.com/@joshuawhiterealtor"
  };

  const leadFormUrl = (subject, body) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const intents = [
    {
      name: "seller",
      keys: ["home value", "worth", "valuation", "cma", "sell", "selling", "seller", "list my house", "list my home", "market analysis"],
      answer: `Absolutely — I can help you start a seller plan.\n\nFor a quick estimate, use Joshua's Howard Hanna home value tool. For a real pricing strategy, Joshua should review condition, updates, location, and recent comparable sales.\n\nHelpful details to send Joshua: property address, timeline, major updates, and your preferred contact method.`,
      actions: [
        ["Get Home Value", LINKS.value],
        ["Request Seller Review", leadFormUrl("Seller / Home Value Request", "Hi Joshua, I would like a home value review.\n\nProperty address:\nTimeline:\nMajor updates:\nBest phone/email:")],
        ["Call/Text Joshua", PHONE_LINK]
      ]
    },
    {
      name: "buyer",
      keys: ["buy", "buyer", "buying", "first time", "showing", "tour", "schedule showing", "see a house", "look at homes"],
      answer: `Great — buying starts with three things: budget, location, and must-haves. A pre-approval is strongly recommended before serious showings or making an offer.\n\nTell Joshua your desired area, price range, home style, must-haves, and timeline, and he can help you narrow the search.`,
      actions: [
        ["Search Homes", LINKS.search],
        ["Mortgage Help", LINKS.mortgage],
        ["Send Buyer Details", leadFormUrl("Buyer Help Request", "Hi Joshua, I am interested in buying.\n\nDesired area:\nPrice range:\nMust-haves:\nTimeline:\nPre-approved?\nBest phone/email:")]
      ]
    },
    {
      name: "mortgage",
      keys: ["mortgage", "loan", "lender", "financing", "rate", "payment", "1st priority", "preapproval", "pre-approval", "pre approved", "afford"],
      answer: `Joshua can connect you with 1st Priority Mortgage to review loan options, affordability, payment estimates, and pre-approval steps.\n\nI can explain general steps, but I can't quote rates, guarantee approval, or give lending advice.`,
      actions: [["Start Mortgage Application", LINKS.mortgage], ["Ask Joshua", leadFormUrl("Mortgage Question", "Hi Joshua, I have a mortgage/pre-approval question.\n\nQuestion:\nBest phone/email:")]]
    },
    {
      name: "search",
      keys: ["listing", "listings", "homes", "house", "property", "properties", "acreage", "land", "farm", "rent", "rental", "mls", "search"],
      answer: `You can search homes directly on this website using Joshua's RealScout search.\n\nIf you find a property you like, Joshua can help confirm availability, review details, and set up a showing.`,
      actions: [["Search Homes", LINKS.search], ["My Listings", "#listings"], ["Office Listings", "#office-listings"], ["Find It First", LINKS.findFirst]]
    },
    {
      name: "reviews",
      keys: ["review", "reviews", "testimonial", "testimonials", "zillow", "google", "rating"],
      answer: `You can read Joshua's reviews on Google, Zillow, and the testimonials section of this website.`,
      actions: [["Google Reviews", LINKS.google], ["Zillow Profile", LINKS.zillow], ["Testimonials", "#reviews"]]
    },
    {
      name: "contact",
      keys: ["contact", "call", "text", "phone", "email", "reach", "appointment", "schedule", "meet", "consultation"],
      answer: `You can reach Joshua directly by call/text at ${PHONE_DISPLAY} or email at ${EMAIL}.\n\nIf you want, send your name, preferred contact method, and what you need help with.`,
      actions: [["Call/Text Joshua", PHONE_LINK], ["Email Joshua", leadFormUrl("Website Inquiry", "Hi Joshua, I visited your website and would like help with:\n\nName:\nPhone:\nEmail:\nQuestion:")], ["Contact Section", "#contact"]]
    },
    {
      name: "area",
      keys: ["area", "service area", "where", "ny", "pa", "corning", "painted post", "elmira", "horseheads", "big flats", "sayre", "athens", "wellsboro", "mansfield", "troy", "canton", "westfield", "knoxville", "millerton"],
      answer: `Joshua is licensed in New York and Pennsylvania and serves the Southern Tier of NY and Northern Tier of PA, including Corning, Painted Post, Elmira, Horseheads, Big Flats, Sayre, Athens, Wellsboro, Mansfield, Troy, Canton, and nearby communities.`,
      actions: [["Search Homes", LINKS.search], ["Neighborhood News", LINKS.neighborhood], ["Contact Joshua", "#contact"]]
    },
    {
      name: "fairhousing",
      keys: ["safe", "crime", "school", "schools", "neighborhood", "best area", "good area", "bad area", "family friendly", "demographics"],
      answer: `I can help with general area and market information, but I can't steer anyone toward or away from a neighborhood.\n\nFor schools, safety, commute, and community fit, review public resources, visit areas personally, and decide what matches your needs. Joshua can help compare homes and market details neutrally.`,
      actions: [["Neighborhood News", LINKS.neighborhood], ["Search Homes", LINKS.search], ["Fair Housing", "#fair-housing"]]
    },
    {
      name: "app",
      keys: ["app", "download", "mobile app", "howard hanna app"],
      answer: `You can download Joshua's Howard Hanna app from the app section of this website. It helps keep your home search handy on your phone.`,
      actions: [["App Section", "#app"], ["Search Homes", LINKS.search]]
    },
    {
      name: "social",
      keys: ["facebook", "instagram", "youtube", "social", "video"],
      answer: `You can follow Joshua on Facebook, Instagram, and YouTube for listings, real estate updates, local content, and video tips.`,
      actions: [["Facebook", LINKS.facebook], ["Instagram", LINKS.instagram], ["YouTube", LINKS.youtube]]
    }
  ];

  function createStyles() {
    const css = `
      .jw-ai-launcher{position:fixed;right:22px;bottom:22px;z-index:9999;border:0;border-radius:999px;background:#b88128;color:#fff;padding:15px 20px;font-weight:900;box-shadow:0 18px 44px rgba(14,58,50,.28);cursor:pointer;font-size:16px;display:flex;gap:9px;align-items:center;transition:transform .2s ease,box-shadow .2s ease}.jw-ai-launcher:hover{transform:translateY(-2px);box-shadow:0 22px 54px rgba(14,58,50,.34)}
      .jw-ai-window{position:fixed;right:22px;bottom:86px;z-index:9999;width:min(460px,calc(100vw - 28px));height:min(700px,calc(100vh - 118px));background:#fff;border:1px solid rgba(184,161,113,.45);border-radius:24px;box-shadow:0 24px 80px rgba(14,58,50,.28);overflow:hidden;display:none;flex-direction:column;font-family:Arial,Helvetica,sans-serif}.jw-ai-window.open{display:flex}
      .jw-ai-header{background:linear-gradient(135deg,#0e3a32,#005a4e);color:#fff;padding:18px 18px 15px;display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.jw-ai-header strong{display:block;font-size:21px}.jw-ai-header span{display:block;color:#dbcfa7;font-size:13px;margin-top:3px}.jw-ai-close{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.45);border-radius:999px;width:34px;height:34px;cursor:pointer;font-size:20px}
      .jw-ai-intro{background:#ece9d3;border-bottom:1px solid rgba(184,161,113,.30);padding:12px 16px;color:#0e3a32;font-weight:800;font-size:13px;display:flex;gap:8px;align-items:center}
      .jw-ai-messages{padding:16px;overflow:auto;display:flex;flex-direction:column;gap:12px;flex:1;background:linear-gradient(180deg,#fff,#ece9d3)}.jw-msg{max-width:90%;padding:12px 14px;border-radius:18px;font-size:14px;line-height:1.45;white-space:pre-wrap}.jw-bot{background:#fff;border:1px solid rgba(184,161,113,.36);color:#2e2e2e;align-self:flex-start}.jw-user{background:#0e3a32;color:#fff;align-self:flex-end}
      .jw-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:9px}.jw-actions a,.jw-chip{border:1px solid rgba(14,58,50,.18);background:#d0e2da;color:#0e3a32;border-radius:999px;padding:8px 10px;font-weight:800;font-size:12px;text-decoration:none;cursor:pointer}.jw-actions a:hover,.jw-chip:hover{background:#9fc8bd}.jw-quick{padding:12px 14px;border-top:1px solid rgba(184,161,113,.30);display:flex;gap:8px;flex-wrap:wrap;background:#fff}
      .jw-lead-panel{display:none;padding:12px 14px;border-top:1px solid rgba(184,161,113,.30);background:#fff}.jw-lead-panel.open{display:block}.jw-lead-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.jw-lead-panel input,.jw-lead-panel select,.jw-lead-panel textarea{width:100%;border:1px solid rgba(14,58,50,.22);border-radius:12px;padding:10px;font-size:13px}.jw-lead-panel textarea{grid-column:1/-1;min-height:64px}.jw-lead-actions{display:flex;gap:8px;margin-top:8px}.jw-lead-actions a,.jw-lead-actions button{flex:1;text-align:center;border:0;border-radius:999px;padding:10px 12px;font-weight:900;text-decoration:none;cursor:pointer}.jw-lead-send{background:#b88128;color:#fff}.jw-lead-close{background:#d0e2da;color:#0e3a32}
      .jw-ai-form{display:flex;gap:8px;padding:12px;background:#fff;border-top:1px solid rgba(184,161,113,.30)}.jw-ai-input{flex:1;border:1px solid rgba(14,58,50,.22);border-radius:999px;padding:12px 14px;font-size:14px}.jw-ai-send{border:0;border-radius:999px;background:#b88128;color:#fff;font-weight:900;padding:0 16px;cursor:pointer}
      @media(max-width:620px){.jw-ai-window{right:14px;bottom:78px;height:76vh}.jw-ai-launcher{right:14px;bottom:14px}.jw-ai-launcher span:last-child{display:none}.jw-lead-grid{grid-template-columns:1fr}}
    `;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  function botResponse(text) {
    const q = text.toLowerCase();
    const score = intents.map(intent => ({
      intent,
      score: intent.keys.reduce((total, key) => total + (q.includes(key) ? key.length : 0), 0)
    })).sort((a, b) => b.score - a.score)[0];

    return score && score.score > 0 ? score.intent : {
      answer: `I can help with buying, selling, home values, home search, mortgage options, reviews, local areas, or connecting you with Joshua.\n\nWhat are you hoping to do next — buy, sell, search, or ask Joshua a question?`,
      actions: [["Search Homes", LINKS.search], ["Home Value", LINKS.value], ["Contact Joshua", "#contact"], ["Open Lead Form", "#lead-form"]]
    };
  }

  function addMessage(container, type, text, actions = [], openLeadForm) {
    const msg = document.createElement("div");
    msg.className = `jw-msg ${type === "user" ? "jw-user" : "jw-bot"}`;
    msg.textContent = text;
    if (actions.length) {
      const actionWrap = document.createElement("div");
      actionWrap.className = "jw-actions";
      actions.forEach(([label, href]) => {
        const a = document.createElement("a");
        a.textContent = label;
        a.href = href;
        if (href === "#lead-form") {
          a.addEventListener("click", e => { e.preventDefault(); openLeadForm(); });
        }
        if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
        actionWrap.appendChild(a);
      });
      msg.appendChild(actionWrap);
    }
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function buildWidget() {
    createStyles();
    const launcher = document.createElement("button");
    launcher.className = "jw-ai-launcher";
    launcher.innerHTML = `<span>💬</span><span>Ask Kiki</span>`;
    const windowEl = document.createElement("section");
    windowEl.className = "jw-ai-window";
    windowEl.setAttribute("aria-label", "Kiki, Joshua's AI assistant");
    windowEl.innerHTML = `
      <div class="jw-ai-header"><div><strong>Kiki</strong><span>Joshua's AI Assistant</span></div><button class="jw-ai-close" aria-label="Close Kiki">×</button></div>
      <div class="jw-ai-intro">✨ Try: “What is my home worth?” or “I want to buy in Corning.”</div>
      <div class="jw-ai-messages"></div>
      <div class="jw-quick">
        <button class="jw-chip" data-question="I want to search homes">Search homes</button>
        <button class="jw-chip" data-question="What is my home worth?">Home value</button>
        <button class="jw-chip" data-question="I want to buy a home">Buying</button>
        <button class="jw-chip" data-question="I want to sell my house">Selling</button>
        <button class="jw-chip" data-question="I want mortgage help">Mortgage</button>
        <button class="jw-chip" data-lead="true">Send Joshua my info</button>
      </div>
      <div class="jw-lead-panel">
        <div class="jw-lead-grid">
          <input class="jw-lead-name" placeholder="Name" />
          <input class="jw-lead-phone" placeholder="Phone or email" />
          <select class="jw-lead-type"><option>Buying</option><option>Selling</option><option>Home value</option><option>Showing request</option><option>Mortgage</option><option>General question</option></select>
          <input class="jw-lead-area" placeholder="Area / property address" />
          <textarea class="jw-lead-notes" placeholder="What can Joshua help with?"></textarea>
        </div>
        <div class="jw-lead-actions"><a class="jw-lead-send" href="#">Email Joshua</a><button class="jw-lead-close" type="button">Close</button></div>
      </div>
      <form class="jw-ai-form"><input class="jw-ai-input" type="text" placeholder="Ask about buying, selling, homes, or value..." /><button class="jw-ai-send" type="submit">Send</button></form>
    `;
    document.body.appendChild(windowEl);
    document.body.appendChild(launcher);
    const messages = windowEl.querySelector(".jw-ai-messages");
    const form = windowEl.querySelector(".jw-ai-form");
    const input = windowEl.querySelector(".jw-ai-input");
    const leadPanel = windowEl.querySelector(".jw-lead-panel");
    const openLeadForm = () => leadPanel.classList.add("open");
    const closeLeadForm = () => leadPanel.classList.remove("open");

    const updateLeadMail = () => {
      const name = windowEl.querySelector(".jw-lead-name").value;
      const phone = windowEl.querySelector(".jw-lead-phone").value;
      const type = windowEl.querySelector(".jw-lead-type").value;
      const area = windowEl.querySelector(".jw-lead-area").value;
      const notes = windowEl.querySelector(".jw-lead-notes").value;
      windowEl.querySelector(".jw-lead-send").href = leadFormUrl(`Kiki AI Lead - ${type}`, `Name: ${name}\nPhone/Email: ${phone}\nNeed: ${type}\nArea/Address: ${area}\n\nNotes:\n${notes}`);
    };

    windowEl.querySelectorAll(".jw-lead-panel input,.jw-lead-panel select,.jw-lead-panel textarea").forEach(el => el.addEventListener("input", updateLeadMail));
    windowEl.querySelector(".jw-lead-close").addEventListener("click", closeLeadForm);

    addMessage(messages, "bot", `Hi, I'm Kiki — Joshua White's digital real estate assistant. I can help with home search, home values, buying, selling, mortgage options, reviews, or connecting you with Joshua. What can I help with today?`, [["Search Homes", LINKS.search], ["Home Value", LINKS.value], ["Send Joshua My Info", "#lead-form"]], openLeadForm);

    launcher.addEventListener("click", () => { windowEl.classList.toggle("open"); if (windowEl.classList.contains("open")) input.focus(); });
    windowEl.querySelector(".jw-ai-close").addEventListener("click", () => windowEl.classList.remove("open"));
    windowEl.querySelectorAll(".jw-chip").forEach(chip => chip.addEventListener("click", () => {
      if (chip.dataset.lead) { openLeadForm(); return; }
      const question = chip.getAttribute("data-question");
      addMessage(messages, "user", question, [], openLeadForm);
      const reply = botResponse(question);
      setTimeout(() => addMessage(messages, "bot", reply.answer, reply.actions, openLeadForm), 250);
    }));
    form.addEventListener("submit", e => {
      e.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      input.value = "";
      addMessage(messages, "user", question, [], openLeadForm);
      const reply = botResponse(question);
      setTimeout(() => addMessage(messages, "bot", reply.answer, reply.actions, openLeadForm), 300);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildWidget);
  else buildWidget();
})();