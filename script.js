// ============================================================
// EDIT THESE THREE LINES with your real details before publishing
// ============================================================
const UPI_ID = "bezubankizuban@upi";      // <-- replace with your real UPI ID
const PAYEE_NAME = "Bezubankizuban";       // <-- name shown in the UPI app
const INSTAGRAM_HANDLE = "bezubankizuban"; // <-- without the @
// ============================================================

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- mobile nav ---------- */
const burger = document.getElementById("navBurger");
const mobileNav = document.getElementById("navMobile");
burger.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});
mobileNav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

/* ---------- scroll reveal ---------- */
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((el) => io.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

/* ---------- animated stat counters ---------- */
const statEls = document.querySelectorAll(".stat-num");
const animateCount = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString("en-IN");
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
if ("IntersectionObserver" in window) {
  const statIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statIo.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statEls.forEach((el) => statIo.observe(el));
}

/* ---------- donation QR modal ---------- */
const modal = document.getElementById("donateModal");
const openBtn = document.getElementById("openDonateModal");
const closeBtn = document.getElementById("closeDonateModal");
const qrImage = document.getElementById("qrImage");
const upiIdText = document.getElementById("upiIdText");
const copyUpiBtn = document.getElementById("copyUpiBtn");

upiIdText.textContent = UPI_ID;

function buildUpiUri() {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: PAYEE_NAME,
    cu: "INR",
  });
  return `upi://pay?${params.toString()}`;
}

function loadQrCode() {
  const upiUri = buildUpiUri();
  const qrApiUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=" +
    encodeURIComponent(upiUri);
  qrImage.src = qrApiUrl;
}

function openModal() {
  loadQrCode();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

copyUpiBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(UPI_ID);
    copyUpiBtn.textContent = "Copied!";
    setTimeout(() => (copyUpiBtn.textContent = "Copy"), 1500);
  } catch {
    copyUpiBtn.textContent = "Press Ctrl+C";
  }
});

/* ---------- wire Instagram link to the constant above ---------- */
document
  .querySelectorAll('a[href*="instagram.com"]')
  .forEach((a) => (a.href = `https://instagram.com/${INSTAGRAM_HANDLE}`));
