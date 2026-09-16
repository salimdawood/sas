# SAS Portfolio

Open `index.html` directly, or serve the folder with any static server.

## Structure
- `index.html` — one-page structure and external library imports
- `styles.css` — complete responsive styling + light/dark themes + RTL rules
- `script.js` — site constants, EN/AR translations, rendering, interactions, GSAP/Swiper setup
- `assets/` — logo, illustrations, showcase graphics and avatar assets

## Libraries
- Lucide Icons — icons
- GSAP + ScrollTrigger — motion and reveal animations
- Swiper — testimonial carousel
- Google Fonts — Inter + Noto Sans Arabic

All key text and repeatable content live in `CONFIG` / `I18N` in `script.js`.

## EmailJS Contact Form
Create a free EmailJS account, connect an email service, then create a template
using these variables:

- `{{user_name}}`
- `{{user_email}}`
- `{{message}}`
- `{{to_email}}`

After that, replace the placeholder values in `EMAILJS_CONFIG` inside
`script.js`:

```js
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};
```
