import { PRODUCTS, INDUSTRIES, PROCESS, STATS } from "./data.js";

const selected = new Set();

/* ---------- render: trust strip ---------- */
function renderStats() {
  const el = document.getElementById("stats-strip");
  el.innerHTML = STATS.map(s => `
    <div class="stat">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join("");
}

/* ---------- render: product cards ---------- */
function renderProducts() {
  const el = document.getElementById("product-grid");
  el.innerHTML = PRODUCTS.map(p => `
    <article class="card" data-id="${p.id}" tabindex="0" role="button"
      aria-pressed="false" aria-label="Add ${p.name} to your stack">
      <div class="card-top">
        <span class="badge">${p.badge}</span>
        <span class="category">${p.category}</span>
      </div>
      <h3>${p.name}</h3>
      <p class="summary">${p.summary}</p>
      <ul class="features">
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <div class="card-foot">
        <span class="from">from <strong>$${p.from.toLocaleString()}</strong></span>
        <span class="add-flag">Add to stack</span>
      </div>
      ${p.id === "crm" ? `<a href="crm.html" class="card-link">View real estate &amp; manufacturing editions →</a>` : ""}
    </article>
  `).join("");

  el.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => toggleCard(card));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(card); }
    });
  });

  // prevent the "view editions" link from also toggling the stack card
  el.querySelectorAll(".card-link").forEach(link => {
    link.addEventListener("click", e => e.stopPropagation());
  });
}

function toggleCard(card) {
  const id = card.dataset.id;
  const isOn = selected.has(id);
  if (isOn) { selected.delete(id); } else { selected.add(id); }
  card.classList.toggle("is-selected", !isOn);
  card.setAttribute("aria-pressed", String(!isOn));
  const flag = card.querySelector(".add-flag");
  flag.textContent = !isOn ? "✓ Added" : "Add to stack";
  updateStackBar();
}

/* ---------- render: industries ---------- */
function renderIndustries() {
  const el = document.getElementById("industry-grid");
  el.innerHTML = INDUSTRIES.map(i => `
    <div class="industry-tile">
      <h4>${i.name}</h4>
      <p>${i.note}</p>
    </div>
  `).join("");
}

/* ---------- render: process ---------- */
function renderProcess() {
  const el = document.getElementById("process-list");
  el.innerHTML = PROCESS.map(s => `
    <div class="process-step">
      <span class="step-num">${s.step}</span>
      <div>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join("");
}

/* ---------- stack builder summary bar ---------- */
function updateStackBar() {
  const bar = document.getElementById("stack-bar");
  const countEl = document.getElementById("stack-count");
  const totalEl = document.getElementById("stack-total");
  const listEl = document.getElementById("stack-names");

  if (selected.size === 0) {
    bar.classList.remove("is-visible");
    return;
  }

  const items = PRODUCTS.filter(p => selected.has(p.id));
  const total = items.reduce((sum, p) => sum + p.from, 0);

  countEl.textContent = items.length;
  totalEl.textContent = `$${total.toLocaleString()}+`;
  listEl.textContent = items.map(p => p.name).join(", ");
  bar.classList.add("is-visible");
}

document.getElementById("stack-bar-clear").addEventListener("click", () => {
  selected.clear();
  document.querySelectorAll(".card.is-selected").forEach(c => {
    c.classList.remove("is-selected");
    c.setAttribute("aria-pressed", "false");
  });
  updateStackBar();
});

document.getElementById("stack-bar-request").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  syncFormWithStack();
  document.getElementById("name").focus({ preventScroll: true });
});

/* ---------- contact form → mailto ---------- */
function syncFormWithStack() {
  const field = document.getElementById("interested-in");
  const items = PRODUCTS.filter(p => selected.has(p.id)).map(p => p.name);
  field.value = items.length ? items.join(", ") : "";
}

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const company = document.getElementById("company").value.trim();
  const interested = document.getElementById("interested-in").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Zoho stack enquiry — ${company || name || "New enquiry"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n` +
    `Interested in: ${interested || "General enquiry"}\n\n${message}`
  );

  window.location.href = `mailto:info@csp4tech.com?subject=${subject}&body=${body}`;
});

/* ---------- footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- init ---------- */
renderStats();
renderProducts();
renderIndustries();
renderProcess();
