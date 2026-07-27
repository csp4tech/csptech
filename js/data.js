/**
 * data.js
 * ------------------------------------------------------------
 * Every piece of editable content on the site lives here.
 * Add, remove, or reorder items in these arrays and the page
 * rebuilds itself — no HTML edits required.
 * ------------------------------------------------------------
 */

// One entry per Zoho product CSP4TECH resells & implements.
export const PRODUCTS = [
  {
    id: "crm",
    badge: "CRM",
    name: "Zoho CRM",
    category: "Sales & Pipeline",
    summary: "Lead-to-cash pipelines, territory rules and deal automation built around how your sales team actually works.",
    features: ["Custom modules & layouts", "Deal/lead automation (Deluge)", "WhatsApp & voice integration"],
    from: 1200
  },
  {
    id: "creator",
    badge: "CR",
    name: "Zoho Creator",
    category: "Custom Apps",
    summary: "Bespoke low-code applications — dashboards, portals, and workflow apps tailored to your process, not the other way round.",
    features: ["Custom Deluge workflows", "Role-based portals", "Third-party API integration"],
    from: 2500
  },
  {
    id: "books",
    badge: "BK",
    name: "Zoho Books",
    category: "Finance",
    summary: "Accounting, invoicing and multi-branch financial reporting configured to local tax and compliance requirements.",
    features: ["Multi-branch chart of accounts", "VAT/compliance setup", "CRM ↔ Books sync"],
    from: 900
  },
  {
    id: "salesiq",
    badge: "IQ",
    name: "Zoho SalesIQ",
    category: "Conversational AI",
    summary: "Chatbots for web and Instagram/WhatsApp DMs that qualify, match and hand off leads without a human on standby.",
    features: ["Instagram/WhatsApp bots", "Lead qualification logic", "Live handoff to CRM"],
    from: 1500
  },
  {
    id: "desk",
    badge: "DK",
    name: "Zoho Desk",
    category: "Support",
    summary: "Ticketing and SLA workflows so every customer conversation lands with the right team, on time.",
    features: ["SLA & escalation rules", "Multi-channel inbox", "Knowledge base setup"],
    from: 900
  },
  {
    id: "people",
    badge: "PP",
    name: "Zoho People",
    category: "HR & Payroll",
    summary: "HR records, attendance, and payroll processes consolidated into one system your HR team can actually run.",
    features: ["Payroll & attendance rules", "Approval hierarchies", "Self-service portal"],
    from: 1100
  },
  {
    id: "fsm",
    badge: "FS",
    name: "Zoho FSM",
    category: "Field Service",
    summary: "Job sheets, technician scheduling and GPS-tracked dispatch for teams that work outside the office.",
    features: ["Job sheet automation", "GPS-based dispatch", "Arabic-ready templates"],
    from: 1800
  },
  {
    id: "projects",
    badge: "PJ",
    name: "Zoho Projects",
    category: "Delivery",
    summary: "Blueprints, task templates and phase tracking for teams delivering multi-stage builds and rollouts.",
    features: ["Blueprint automation", "Template inheritance", "Cross-team visibility"],
    from: 1000
  },
  {
    id: "procurement",
    badge: "PR",
    name: "Zoho Procurement",
    category: "Sourcing",
    summary: "Vendor pipelines, tender dashboards and approval chains that make sourcing decisions auditable.",
    features: ["Vendor pipeline dashboards", "Tender/bid tracking", "Role-based approvals"],
    from: 1600
  },
  {
    id: "analytics",
    badge: "AN",
    name: "Zoho Analytics",
    category: "Reporting",
    summary: "Cross-product dashboards that turn CRM, Books and Creator data into one board-ready view.",
    features: ["Cross-module dashboards", "Scheduled reports", "Embedded analytics"],
    from: 1300
  }
];

// Verticals CSP4TECH has delivered into — used in the Industries section.
export const INDUSTRIES = [
  { name: "Real Estate", note: "Property, deal & lease pipelines across Property/Land modules" },
  { name: "Healthcare", note: "Multi-branch feasibility, patient & staff workflows" },
  { name: "F&B & Hospitality", note: "POS, payroll and multi-branch finance" },
  { name: "Logistics & Fleet", note: "Loading requests, fleet dashboards, Books pipelines" },
  { name: "Procurement & Manufacturing", note: "Tendering, vendor pipelines, approvals" },
  { name: "Automotive Retail", note: "CRM, inventory, and AI voice front-desk" }
];

// The delivery process — a genuine sequence, so numbering is meaningful here.
export const PROCESS = [
  { step: "01", title: "Discovery & BRD", desc: "We document your process into a scoped requirements brief before anything is configured." },
  { step: "02", title: "Configuration", desc: "Modules, workflows and Deluge automations are built against the agreed scope." },
  { step: "03", title: "Migration", desc: "Existing data is mapped and moved across, validated line by line." },
  { step: "04", title: "Go live", desc: "Phased rollout with your team, not a link and a login." },
  { step: "05", title: "Support", desc: "Ongoing tuning as your process changes — we stay on as the implementation partner of record." }
];

// Zoho CRM — Real Estate edition: feature grid on crm.html
export const CRM_REAL_ESTATE = [
  {
    title: "Property & Land Pipeline",
    desc: "Every listing tracked as a deal stage, from enquiry to signed sale — across both Property and Land modules."
  },
  {
    title: "Deal ↔ Property Sync",
    desc: "Property status updates automatically when a linked deal moves stage, so listings never go stale."
  },
  {
    title: "Site Visit Scheduling",
    desc: "Book, reschedule and remind clients and agents about site visits directly from the deal record."
  },
  {
    title: "Broker & Agent Commission",
    desc: "Commission splits calculated and tracked per deal, ready to hand off to Books at close."
  },
  {
    title: "Lease & Renewal Reminders",
    desc: "Automated alerts ahead of lease expiry so renewals get handled before a tenant walks."
  },
  {
    title: "Buyer Requirement Matching",
    desc: "Incoming buyer requirements matched automatically against live inventory by budget, type and location."
  }
];

// Zoho CRM — Manufacturing edition: feature grid on crm.html
export const CRM_MANUFACTURING = [
  {
    title: "Quote-to-Order Pipeline",
    desc: "RFQs tracked from first enquiry through quotation, purchase order and delivery in one pipeline."
  },
  {
    title: "Vendor & Supplier Records",
    desc: "Supplier pricing, lead times and performance history attached directly to the deals that depend on them."
  },
  {
    title: "Production Order Tracking",
    desc: "Order status visible against production stage, so sales can answer 'where's my order' without asking the floor."
  },
  {
    title: "Multi-branch Inventory Sync",
    desc: "Stock levels shared across branches and synced with Books, so quotes reflect what's actually available."
  },
  {
    title: "Service & Warranty Tickets",
    desc: "Post-sale service requests linked back to the original order and equipment record."
  },
  {
    title: "Dealer & Distributor Portal",
    desc: "A branded portal for dealers to place orders and track fulfilment without emailing your sales team."
  }
];

// Company facts used in the trust strip.
export const STATS = [
  { value: "10+", label: "Zoho products deployed" },
  { value: "GCC & Levant", label: "Regions served" },
  { value: "Authorised", label: "Zoho Partner status" }
];
