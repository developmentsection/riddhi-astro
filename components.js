const whatsappIcon = `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3A12.9 12.9 0 0 0 5.1 22.73L3 29l6.47-2.04A12.97 12.97 0 1 0 16.04 3Zm0 23.64c-2.1 0-4.15-.57-5.94-1.65l-.43-.26-3.84 1.21 1.25-3.73-.28-.45a10.62 10.62 0 1 1 9.24 4.88Zm5.82-7.95c-.32-.16-1.89-.93-2.18-1.04-.3-.11-.51-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59a9.65 9.65 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.63-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"/></svg>`;
const phoneIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg>`;
const mailIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm1.5 1.5L12 12l7.5-5.5M4.5 17.5l5-5M19.5 17.5l-5-5"/></svg>`;
const pinIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>`;
const instaIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`;
const serviceLinks = `<a href="vedic-astrology.html">Vedic Astrology</a><a href="medical-astrology.html">Medical Astrology</a><a href="numerology.html">Numerology</a><a href="vedic-vastu.html">Vedic Vastu</a><a href="astrological-counselling.html">Astrological Counselling</a><a href="birth-chart-analysis.html">Birth Chart Analysis</a><a href="kundali-matching.html">Kundali Matching</a><a href="love-astrology.html">Relationship Guidance</a><a href="financial-astrology.html">Financial Astrology</a><a href="career-astrology.html">Career Astrology</a><a href="business-astrology.html">Business Astrology</a>`;
const vadodaraMapUrl = "https://www.google.com/maps/search/?api=1&query=Riddhi%20Astrology%20404-405%20Trivia%20Mall%20Opp.%20Natubhai%20Circle%20Gotri%20Road%20Vadodara%20Gujarat%20390007";
const bharuchMapUrl = "https://www.google.com/maps/search/?api=1&query=Riddhi%20Astrology%20104-105%201st%20Floor%20Kunj%20Resi%20Plaza%20Opp.%20Inox%20Multiplex%20Zadeshwar%20Road%20Bharuch%20Gujarat%20390012";

const header = `
<div class="top-note"><span>Private consultations in Vadodara, Bharuch & worldwide</span><a class="icon-link" href="tel:+919904025820">${phoneIcon}<span>+91 99040 25820</span></a></div>
<header class="site-header"><a class="brand" href="index.html" aria-label="Riddhi Astrology home"><img src="assets/images/logo.png" alt="Riddhi Astrology"></a><nav class="desktop-nav" aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html">About</a><div class="nav-services"><a href="services.html">Services <span>+</span></a><div class="service-dropdown">${serviceLinks}</div></div><a href="journal.html">Blogs</a><a href="contact.html">Contact</a></nav><div class="header-actions"><a class="header-phone" href="tel:+919904025820" aria-label="Call Riddhi Astrology">${phoneIcon}</a><a class="header-cta" href="contact.html">Book a reading <span>&nearr;</span></a></div><button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></header>
<div class="mobile-menu"><nav><a href="index.html">Home</a><a href="about.html">About</a><a href="services.html">All services</a><a href="journal.html">Blogs</a><a href="contact.html">Contact</a></nav><a class="icon-link" href="tel:+919904025820">${phoneIcon}<span>Call +91 99040 25820</span></a></div>`;

const footer = `
<footer class="site-footer premium-footer">
  <div class="footer-glow" aria-hidden="true"></div>
  <div class="footer-cta">
    <div class="footer-cta-copy"><p class="eyebrow light"><span></span> Riddhi Astrology Community</p><h2>Ready to move with clearer rhythm?</h2><p>Begin with a private consultation shaped around your birth chart, your questions, and the season of life you are navigating.</p></div>
    <div class="footer-cta-actions"><a class="button footer-cta-primary" href="contact.html">Book a consultation <span>&nearr;</span></a><a class="footer-cta-call" href="tel:+919904025820">${phoneIcon}<span><small>Call / WhatsApp</small><strong>+91 99040 25820</strong></span></a></div>
  </div>
  <div class="footer-shell">
    <div class="footer-main footer-premium-grid">
      <section class="footer-brand footer-panel footer-brand-card"><img src="assets/images/logo.png" alt="Riddhi Astrology"><p>Personal astrology guidance to connect with your soul, find your rhythm, and live with clarity.</p><p class="footer-brand-note">Join the Riddhi Astrology community through private consultations in Vadodara, Bharuch, and online worldwide.</p><a class="icon-link social-link" href="https://www.instagram.com/riddhi_astrology?igsh=MWc0Mm01Nm9veGY5eQ==" target="_blank" rel="noopener">${instaIcon}<span>Follow on Instagram</span></a></section>
      <nav class="footer-links footer-panel"><h4>Explore</h4><a href="about.html">About Dr. Sunnita</a><a href="services.html">All consultations</a><a href="journal.html">Blogs & articles</a><a href="contact.html">Book a reading</a><a href="privacy-policy.html">Privacy policy</a><a href="terms-conditions.html">Terms & conditions</a></nav>
      <nav class="footer-service-list footer-panel"><h4>Consultations</h4>${serviceLinks}</nav>
      <section class="footer-contact footer-panel"><h4>Visit & connect</h4><div class="footer-contact-grid"><a class="icon-link footer-direct" href="tel:+919904025820">${phoneIcon}<span><small>Phone & WhatsApp</small>+91 99040 25820</span></a><a class="icon-link footer-direct" href="mailto:ridhhiastrology01@gmail.com">${mailIcon}<span><small>Email</small>ridhhiastrology01@gmail.com</span></a></div><a class="icon-link footer-address footer-location-card" href="${vadodaraMapUrl}" target="_blank" rel="noopener">${pinIcon}<span><strong>Vadodara</strong>404-405, Trivia Mall, Opp. Natubhai Circle, Gotri Road, Vadodara, Gujarat 390007<em>Open in Google Maps &nearr;</em></span></a><a class="icon-link footer-address footer-location-card" href="${bharuchMapUrl}" target="_blank" rel="noopener">${pinIcon}<span><strong>Bharuch</strong>104-105, 1st Floor, Kunj Resi Plaza, Opp. Inox Multiplex, Zadeshwar Road, Bharuch - 390012, Gujarat<em>Open in Google Maps &nearr;</em></span></a></section>
    </div>
    <div class="footer-bottom"><span>&copy; 2026 Riddhi Astrology</span><a href="https://apfpuniversal.com/" target="_blank" rel="noopener">Designed and Developed by APFP Universal</a><span><a href="privacy-policy.html">Privacy</a><a href="terms-conditions.html">Terms</a></span></div>
  </div>
</footer><a class="floating-call" href="https://wa.me/919904025820?text=Hi" aria-label="Chat with Riddhi Astrology on WhatsApp">${whatsappIcon}<span>WhatsApp</span></a>`;

document.querySelector("[data-header]").innerHTML = header;
document.querySelector("[data-footer]").innerHTML = footer;
const normalizePageKey = () => {
  const slug = location.pathname.split("/").filter(Boolean).pop() || "index";
  return slug.endsWith(".html") ? slug : `${slug}.html`;
};
const currentPage = normalizePageKey();
document.querySelectorAll(".desktop-nav>a,.nav-services>a").forEach(link => {
  if (link.getAttribute("href") === currentPage) link.classList.add("active");
});
if (currentPage.includes("astrology") || ["vedic-vastu.html", "astrological-counselling.html", "birth-chart-analysis.html", "kundali-matching.html"].includes(currentPage)) {
  document.querySelector(".nav-services>a")?.classList.add("active");
}
