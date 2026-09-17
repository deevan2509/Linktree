const links = [
  {
    label: "Mrs and Ms Malayalee Johor 2026 Voting Page",
    href: "https://malayalee-pageant-voting.vercel.app/",
    icon: "vote",
  },
  {
    label: "Onagosham Feedback Form",
    href: "https://forms.gle/GnNWEyjkiXPnxgak8",
    icon: "form",
  },
  {
    label: "Official JBMA website",
    href: "https://www.jbma.my/",
    icon: "globe",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/official.jbma/?hl=en",
    icon: "instagram",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/official.jbma/",
    icon: "facebook",
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@official.jbma",
    icon: "tiktok",
  },
];

const icons = {
  vote:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14h4v6H4zm6-4h4v10h-4zm6-6h4v16h-4z"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2c1.6 0 3.1.5 4.3 1.3-.7.6-1.6 1-2.6 1.2-.4-1.1-.9-2-1.7-2.5zm-2.1.4c.7.6 1.3 1.6 1.7 2.8-1.8.2-3.5.2-5.1 0C7.3 5.7 8.6 4.7 9.9 4.4zM6.1 8.4c2 .3 4.2.4 6.4.2.2 1.2.2 2.5 0 3.8-2.2-.2-4.4-.1-6.4.2A8 8 0 0 1 6.1 8.4zm.2 6.2c1.7-.3 3.5-.4 5.4-.2.3 1.3.3 2.6.1 3.8-1.4-.3-2.7-1.1-3.7-2.3-.7-1-.8-1.3-1.8-1.3zm5.8 3.6c.2-1.1.2-2.3 0-3.5 1.9.2 3.7.3 5.4.1-.5 1.7-1.7 3.1-3.3 3.8-.7.2-1.4.1-2.1-.4zm5.6-5.7c-1.8.2-3.7.1-5.6-.1.2-1.3.2-2.6 0-3.8 1.9.2 3.8.1 5.6-.2.4 1.2.5 2.6 0 4.1z"/></svg>',
  form:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h8l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 1.5V8h3.5zM8 12h8v1.5H8zm0 3.5h8V17H8z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4A3.8 3.8 0 0 0 20 16.2V7.8A3.8 3.8 0 0 0 16.2 4zm9.65 1.5a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3c.4 2.6 1.9 4.4 4.5 4.8v2.6c-1.5 0-2.9-.5-4.1-1.3v6.4c0 3.4-2.7 6.2-6.2 6.2S2.5 18.9 2.5 15.4 5.3 9.2 8.7 9.2c.4 0 .8 0 1.2.1v2.8c-.4-.2-.8-.3-1.2-.3-1.9 0-3.4 1.5-3.4 3.6s1.5 3.6 3.4 3.6 3.4-1.5 3.4-3.6V3h2.4z"/></svg>',
};

function renderLinks() {
  const nav = document.getElementById("links");
  nav.innerHTML = links
    .map(
      (link) => `
        <a class="link-btn" href="${link.href}" target="_blank" rel="noopener noreferrer">
          <span class="icon">${icons[link.icon]}</span>
          <span class="label">${link.label}</span>
        </a>
      `
    )
    .join("");
}

function pageUrl() {
  return window.location.href.split("#")[0];
}

function makeQr(element, size) {
  element.innerHTML = "";
  return new QRCode(element, {
    text: pageUrl(),
    width: size,
    height: size,
    colorDark: "#0b1f4a",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M,
  });
}

function qrPngDataUrl(size) {
  const holder = document.createElement("div");
  holder.style.position = "fixed";
  holder.style.left = "-9999px";
  document.body.appendChild(holder);
  makeQr(holder, size);
  const canvas = holder.querySelector("canvas");
  const dataUrl = canvas
    ? canvas.toDataURL("image/png")
    : holder.querySelector("img")?.src;
  holder.remove();
  return dataUrl;
}

function drawQr() {
  const mount = document.getElementById("qr");
  try {
    makeQr(mount, 164);
  } catch (error) {
    mount.textContent = "QR could not be generated.";
    console.error(error);
  }
}

function downloadQr() {
  const dataUrl = qrPngDataUrl(1024);
  if (!dataUrl) return;
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = "onaghosham-2026-qr.png";
  a.click();
}

renderLinks();
drawQr();
document.getElementById("download-qr").addEventListener("click", downloadQr);
