import { CRM_REAL_ESTATE, CRM_MANUFACTURING } from "./data.js";

function renderGrid(elId, items) {
  const el = document.getElementById(elId);
  el.innerHTML = items.map(f => `
    <article class="card feature-card">
      <h3>${f.title}</h3>
      <p class="summary">${f.desc}</p>
    </article>
  `).join("");
}

renderGrid("grid-real-estate", CRM_REAL_ESTATE);
renderGrid("grid-manufacturing", CRM_MANUFACTURING);

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
