(() => {
  const appUrl = "https://apps.apple.com/us/app/hometrackr-home-log/id6785076449";

  function addHomeTrackrShortcut() {
    const quickBar = document.querySelector(".jw-quick");
    if (!quickBar || quickBar.querySelector("[data-hometrackr-addon]")) return;

    const button = document.createElement("button");
    button.className = "jw-chip";
    button.type = "button";
    button.dataset.hometrackrAddon = "true";
    button.textContent = "HomeTrackr";
    button.addEventListener("click", () => {
      const messages = document.querySelector(".jw-ai-messages");
      if (!messages) return;
      const bot = document.createElement("div");
      bot.className = "jw-msg jw-bot";
      bot.textContent = "HomeTrackr is Joshua's home log app, now live on the App Store. It helps homeowners, buyers, sellers, and renters organize home projects, maintenance, paint colors, appliances, warranties, receipts, photos, vehicles, and more.";
      const actions = document.createElement("div");
      actions.className = "jw-actions";
      actions.innerHTML = `<a href="${appUrl}" target="_blank" rel="noopener">Download HomeTrackr</a><a href="#hometrackr">HomeTrackr Section</a>`;
      bot.appendChild(actions);
      messages.appendChild(bot);
      messages.scrollTop = messages.scrollHeight;
    });

    quickBar.appendChild(button);
  }

  const timer = setInterval(addHomeTrackrShortcut, 500);
  setTimeout(() => clearInterval(timer), 8000);
})();
