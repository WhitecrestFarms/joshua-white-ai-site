(() => {
  const PHONE_DISPLAY = "607-207-6969";
  const PHONE_LINK = "tel:16072076969";
  const EMAIL = "joshuawhite@howardhanna.com";

  const LINKS = {
    search: "#search",
    value: "https://homevalue.howardhanna.com/joshuawilliamwhite",
    mortgage: "https://mymortgageapp.1stprioritymortgage.com/dr/c/1hy1e",
    google: "https://share.google/YbejLCxPQaZYuZrGc",
    zillow: "https://www.zillow.com/profile/JoshuaWhiteRealtor",
    facebook: "https://www.facebook.com/JoshuaWhiteRealtor",
    instagram: "https://www.instagram.com/joshuawwhiterealtor/",
    youtube: "https://www.youtube.com/@joshuawhiterealtor"
  };

  const responses = [
    {
      keys: ["home value", "worth", "valuation", "cma", "sell", "selling", "seller", "list my house", "list my home"],
      answer: `Great question. For a quick starting estimate, use Joshua's Howard Hanna home value tool. For a more accurate number, Joshua can review your home's condition, updates, location, and comparable sales.\n\nStart here: ${LINKS.value}\n\nWould you like Joshua to follow up about your home value?`,
      actions: [["Get Home Value", LINKS.value], ["Email Joshua", `mailto:${EMAIL}?subject=Home Value Request`], ["Call/Text Joshua", PHONE_LINK]]
    },
    {
      keys: ["buy", "buyer", "buying", "preapproval", "pre-approval", "pre approved", "first time", "showing", "tour"],
      answer: `A strong first step is getting pre-approved, then narrowing down your area, price range, must-haves, and timeline. Joshua can help you search, compare homes, and schedule showings.\n\nWant to start by searching homes or talking mortgage options?`,
      actions: [["Search Homes", LINKS.search], ["Mortgage Help", LINKS.mortgage], ["Email Joshua", `mailto:${EMAIL}?subject=Buyer Question`]]
    },
    {
      keys: ["mortgage", "loan", "lender", "financing", "rate", "payment", "1st priority", "preapproval", "pre-approval"],
      answer: `Joshua can connect you with 1st Priority Mortgage to review loan options, affordability, payment estimates, and pre-approval steps. I can't quote rates or guarantee approval, but the lender can help with those details.`,
      actions: [["Start Mortgage Application", LINKS.mortgage], ["Email Joshua", `mailto:${EMAIL}?subject=Mortgage Question`]]
    },
    {
      keys: ["listing", "listings", "homes", "house", "property", "properties", "acreage", "land", "farm", "rent", "rental"],
      answer: `You can search homes directly on this website using Joshua's RealScout search. If you find something you like, Joshua can help confirm availability and set up a showing.`,
      actions: [["Search Homes", LINKS.search], ["My Listings", "#listings"], ["Office Listings", "#office-listings"]]
    },
    {
      keys: ["review", "reviews", "testimonial", "testimonials", "zillow", "google"],
      answer: `You can read Joshua's reviews on Google, Zillow, and Testimonial Tree.`,
      actions: [["Google Reviews", LINKS.google], ["Zillow Profile", LINKS.zillow], ["Reviews Section", "#reviews"]]
    },
    {
      keys: ["contact", "call", "text", "phone", "email", "reach", "appointment", "schedule"],
      answer: `You can reach Joshua directly by call/text at ${PHONE_DISPLAY} or email at ${EMAIL}.`,
      actions: [["Call/Text Joshua", PHONE_LINK], ["Email Joshua", `mailto:${EMAIL}?subject=Website Inquiry`], ["Contact Section", "#contact"]]
    },
    {
      keys: ["area", "service area", "where", "ny", "pa", "corning", "elmira", "horseheads", "big flats", "sayre", "athens", "wellsboro", "mansfield", "troy", "canton"],
      answer: `Joshua is licensed in New York and Pennsylvania and serves the Southern Tier of NY and Northern Tier of PA, including Corning, Painted Post, Elmira, Horseheads, Big Flats, Sayre, Athens, Wellsboro, Mansfield, Troy, Canton, and nearby communities.`,
      actions: [["Search Homes", LINKS.search], ["Contact Joshua", "#contact"]]
    },
    {
      keys: ["safe", "crime", "school", "schools", "neighborhood", "best area", "good area"],
      answer: `I can help with general area information, but I can't steer you toward or away from a neighborhood. For schools, safety, commute, and community fit, it's best to review public resources, visit the area, and decide what matches your needs. Joshua can help you compare homes and market details neutrally.`,
      actions: [["Search Homes", LINKS.search], ["Ask Joshua", `mailto:${EMAIL}?subject=Area Question`]]
    },
    {
      keys: ["facebook", "instagram", "youtube", "social"],
      answer: `You can follow Joshua on Facebook, Instagram, and YouTube for real estate updates, listings, and local content.`,
      actions: [["Facebook", LINKS.facebook], ["Instagram", LINKS.instagram], ["YouTube", LINKS.youtube]]
    }
  ];

  function createStyles() {
    const css = `
      .jw-ai-launcher{position:fixed;right:22px;bottom:22px;z-index:9999;border:0;border-radius:999px;background:#b88128;color:#fff;padding:15px 20px;font-weight:900;box-shadow:0 18px 44px rgba(14,58,50,.28);cursor:pointer;font-size:16px;display:flex;gap:9px;align-items:center}.jw-ai-launcher:hover{transform:translateY(-2px)}
      .jw-ai-window{position:fixed;right:22px;bottom:86px;z-index:9999;width:min(420px,calc(100vw - 28px));height:min(640px,calc(100vh - 120px));background:#fff;border:1px solid rgba(184,161,113,.45);border-radius:24px;box-shadow:0 24px 80px rgba(14,58,50,.28);overflow:hidden;display:none;flex-direction:column;font-family:Arial,Helvetica,sans-serif}.jw-ai-window.open{display:flex}
      .jw-ai-header{background:linear-gradient(135deg,#0e3a32,#005a4e);color:#fff;padding:18px 18px 15px;display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.jw-ai-header strong{display:block;font-size:20px}.jw-ai-header span{display:block;color:#dbcfa7;font-size:13px;margin-top:3px}.jw-ai-close{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.45);border-radius:999px;width:34px;height:34px;cursor:pointer;font-size:20px}
      .jw-ai-messages{padding:16px;overflow:auto;display:flex;flex-direction:column;gap:12px;flex:1;background:linear-gradient(180deg,#fff,#ece9d3)}.jw-msg{max-width:88%;padding:12px 14px;border-radius:18px;font-size:14px;line-height:1.45;white-space:pre-wrap}.jw-bot{background:#fff;border:1px solid rgba(184,161,113,.36);color:#2e2e2e;align-self:flex-start}.jw-user{background:#0e3a32;color:#fff;align-self:flex-end}
      .jw-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.jw-actions a,.jw-chip{border:1px solid rgba(14,58,50,.18);background:#d0e2da;color:#0e3a32;border-radius:999px;padding:8px 10px;font-weight:800;font-size:12px;text-decoration:none;cursor:pointer}.jw-actions a:hover,.jw-chip:hover{background:#9fc8bd}.jw-quick{padding:12px 14px;border-top:1px solid rgba(184,161,113,.30);display:flex;gap:8px;flex-wrap:wrap;background:#fff}
      .jw-ai-form{display:flex;gap:8px;padding:12px;background:#fff;border-top:1px solid rgba(184,161,113,.30)}.jw-ai-input{flex:1;border:1px solid rgba(14,58,50,.22);border-radius:999px;padding:12px 14px;font-size:14px}.jw-ai-send{border:0;border-radius:999px;background:#b88128;color:#fff;font-weight:900;padding:0 16px;cursor:pointer}
      @media(max-width:620px){.jw-ai-window{right:14px;bottom:78px;height:72vh}.jw-ai-launcher{right:14px;bottom:14px}.jw-ai-launcher span:last-child{display:none}}
    `;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  function botResponse(text) {
    const q = text.toLowerCase();
    const match = responses.find(item => item.keys.some(key => q.includes(key)));
    return match || {
      answer: `I can help with buying, selling, home values, home search, mortgage options, reviews, and contacting Joshua.\n\nFor anything specific, Joshua can help directly at ${PHONE_DISPLAY} or ${EMAIL}.`,
      actions: [["Search Homes", LINKS.search], ["Home Value", LINKS.value], ["Contact Joshua", "#contact"]]
    };
  }

  function addMessage(container, type, text, actions = []) {
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
    launcher.innerHTML = `<span>💬</span><span>Ask Joshua AI</span>`;
    const windowEl = document.createElement("section");
    windowEl.className = "jw-ai-window";
    windowEl.setAttribute("aria-label", "Joshua AI chat assistant");
    windowEl.innerHTML = `
      <div class="jw-ai-header"><div><strong>Joshua AI</strong><span>Real estate assistant for Joshua White</span></div><button class="jw-ai-close" aria-label="Close Joshua AI">×</button></div>
      <div class="jw-ai-messages"></div>
      <div class="jw-quick"><button class="jw-chip" data-question="I want to search homes">Search homes</button><button class="jw-chip" data-question="What is my home worth?">Home value</button><button class="jw-chip" data-question="I want to buy a home">Buying</button><button class="jw-chip" data-question="I want mortgage help">Mortgage</button></div>
      <form class="jw-ai-form"><input class="jw-ai-input" type="text" placeholder="Ask about buying, selling, homes, or value..." /><button class="jw-ai-send" type="submit">Send</button></form>
    `;
    document.body.appendChild(windowEl);
    document.body.appendChild(launcher);
    const messages = windowEl.querySelector(".jw-ai-messages");
    const form = windowEl.querySelector(".jw-ai-form");
    const input = windowEl.querySelector(".jw-ai-input");
    addMessage(messages, "bot", `Hi, I'm Joshua AI — Joshua White's digital real estate assistant. I can help with home search, home values, buying, selling, mortgage options, reviews, or connecting you with Joshua. What can I help with today?`, [["Search Homes", LINKS.search], ["Home Value", LINKS.value], ["Contact Joshua", "#contact"]]);
    launcher.addEventListener("click", () => { windowEl.classList.toggle("open"); if (windowEl.classList.contains("open")) input.focus(); });
    windowEl.querySelector(".jw-ai-close").addEventListener("click", () => windowEl.classList.remove("open"));
    windowEl.querySelectorAll(".jw-chip").forEach(chip => chip.addEventListener("click", () => {
      const question = chip.getAttribute("data-question");
      addMessage(messages, "user", question);
      const reply = botResponse(question);
      setTimeout(() => addMessage(messages, "bot", reply.answer, reply.actions), 250);
    }));
    form.addEventListener("submit", e => {
      e.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      input.value = "";
      addMessage(messages, "user", question);
      const reply = botResponse(question);
      setTimeout(() => addMessage(messages, "bot", reply.answer, reply.actions), 300);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildWidget);
  else buildWidget();
})();
