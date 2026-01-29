document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

/*
  ✅ Call/Text setup:
  Replace PHONE_NUMBER with your real number like: "+13195551234"
  Use +1 (US) then area code then number. No spaces.
*/
const PHONE_NUMBER = "+16417509796";

// Pre-written message (you can change this anytime)
const presetMessage =
  "Hi! I’m interested in a free estimate for cleaning. " +
  "My space is ___ bed / ___ bath (or business type: ___). " +
  "I’m located in ___. Preferred day/time: ___. Thanks!";

// Make a link that opens the phone text app with the message filled in
const smsLink = `sms:${PHONE_NUMBER}?&body=${encodeURIComponent(presetMessage)}`;

// Optional: also make a call link
const telLink = `tel:${PHONE_NUMBER}`;

// Wire the buttons
const textBtn = document.getElementById("textBtn");
const textBtn2 = document.getElementById("textBtn2");
const textHint = document.getElementById("textHint");

function setupTextButtons() {
  if (PHONE_NUMBER.includes("X")) {
    // You haven't added your phone number yet
    textBtn.textContent = "Call/Text Now (add number)";
    textBtn2.textContent = "Text With Message (add number)";
    textBtn.href = "#contact";
    textBtn2.href = "#contact";
    textHint.textContent = "Add your phone number in script.js to enable the call/text buttons.";
    return;
  }

  // Option A: Make both buttons open texting with the pre-written message
  textBtn.href = smsLink;
  textBtn2.href = smsLink;

  // If you prefer the first button to CALL instead, swap this line:
  // textBtn.href = telLink;

  textHint.textContent = "Tap “Call/Text Now” to send a pre-written message instantly.";
}

setupTextButtons();

// Estimate form: creates an email draft (mailto link)
const estimateForm = document.getElementById("estimateForm");
const formNote = document.getElementById("formNote");

estimateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(estimateForm);
  const name = data.get("name") || "";
  const phone = data.get("phone") || "";
  const email = data.get("email") || "";
  const service = data.get("service") || "";
  const size = data.get("size") || "";
  const time = data.get("time") || "";

  const subject = `Free Estimate Request - ${service}`;
  const body =
`Hi Signature Shine LLC,

My name: ${name}
Phone: ${phone}
Email: ${email}

Service requested: ${service}
Size/business type: ${size}
Preferred day/time: ${time}

Thanks!`;

  const mailto = `mailto:services@signatureshine.company?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  formNote.textContent = "Opening your email app…";
});
