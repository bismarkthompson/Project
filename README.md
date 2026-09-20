# Adum Barber House — Local Business Landing Page

## Project overview
- **Student name:** Bismark Thompson
- **Project title:** Adum Barber House landing page
- **Assigned industry:** Barber shop
- **Business:** Adum Barber House, a fictional five-chair barbershop near Kejetia, Kumasi
- **Target customers:** Men and boys in the Adum/Kejetia area looking for fades, beard grooming, and kids' cuts
- **Main goal of the page:** Get a visitor to book a slot (via the contact form / WhatsApp) or at least see the services and recent work before walking in

## Features
Six required sections, all built with semantic HTML (`header`, `nav`, `main`, `section`, `footer`):

1. **Hero** — business name, headline, intro, hero illustration, and two action buttons (Book a cut / View services)
2. **Our services** — Signature Fade, Beard Sculpt & Hot Towel, Kids' Cut
3. **How we work** — a genuine 3-step sequence: Enquire → Confirm your slot → Walk out sharp
4. **Recent work** — a 3-item gallery (fade, beard sculpt, kids' cut)
5. **Contact us** — labeled name/email/message form, plus location, hours, and phone/WhatsApp
6. **Footer** — business name, copyright, back-to-top, Instagram and WhatsApp links

### JavaScript interactions (in `script.js`)
- **Recent-work gallery (main required interaction):** Previous/Next buttons and clickable dots slide between the three examples using a CSS transform; arrow keys also work when the gallery is focused.
- **Mobile nav toggle (bonus):** the hamburger button shows/hides the navigation menu on small screens.
- **Contact form validation (bonus, demo only):** on submit, the script checks that name, email (valid format), and message are filled in, shows inline error messages under each invalid field, and clears them as the visitor corrects them. On success it shows a message confirming this is a demo — **no message is actually sent anywhere.**

To try it: open the page, scroll to **Recent work** and click the arrow buttons or dots; then scroll to **Contact us** and click **Send message** with a field left blank or an invalid email to see the validation, then fill it in correctly to see the success message.

## Design research
- **Design direction:** warm charcoal background, brass/gold accent, one muted leather-red reserved for the "demo form" note — meant to feel like a barbershop's own materials (leather chair, brass fittings) rather than a generic tech-startup palette.
- **Typography:** Zilla Slab (headings) paired with Work Sans (body), loaded from Google Fonts.
- **Inspiration:** _[add 2–3 screenshots or links from Refero / Mobbin / Dribbble / Landbook / Behance here, plus a one-line note on what you adapted from each — e.g. the left-aligned hero layout, the numbered process section, the split-screen gallery caption style]_
- **Images:** the `images/` folder holds real haircut/beard/kids-cut photos (hero + 5 recent-work examples). _[Add where each photo came from here — your own shop's work, or the source site/photographer if these are reference images, since the brief asks you to credit image sources.]_

## Build process
1. Chose the business (Adum Barber House) and planned sections/copy
2. Collected design inspiration (see above) and sketched the section order
3. Set up the GitHub repository and matching local folder, ran `git init`
4. Committed starter files (`index.html`, `style.css`, `script.js`, `README.md`)
5. Pushed the first version to GitHub
6. Built the HTML structure for all six sections with semantic elements and `id`s for nav anchors
7. Styled the page with CSS (tokens, layout, spacing, gallery, form)
8. Added the JavaScript interactions described above
9. Added mobile media queries (bonus) at a 768px breakpoint — see **Run and test**
10. Wrote this README
11. Tested, committed, and pushed the final version
12. _[If attempted]_ Published on Netlify (bonus)

## Run and test
**To run locally:** clone or download the repository, then open `index.html` directly in a browser (no build step or server required).

**Tested:**
- Laptop layout at ~1366px wide
- Mobile layout at ~375px wide, checking for sideways scrolling, overlapping content, and readable text/buttons
- Gallery prev/next, dots, and keyboard arrows at both sizes
- Nav hamburger menu open/close on mobile
- Form validation: empty fields, invalid email, then a correct submission
- Navigation links scroll to the correct section

**Known issues:** _[note anything outstanding, e.g. "real photography still needed" or leave as none]_

**Screenshots:** _[add a laptop screenshot and a mobile screenshot here before submitting]_

## Reflection and links
**A challenge I solved:** getting the gallery to track slide position and keep the dots in sync, or getting the two-column contact section to stack cleanly on mobile without breaking the form

**What I learned:** how the prev/next buttons and dots work by moving the whole track with transform: translateX() and keeping the dots in sync with a current index, rather than hiding/showing each slide separately

- **GitHub repository:** _https://github.com/bismarkthompson/Project


---

### Submission note
- Student name: Bismark Thompson

- Business and industry: Adum Barber House — Barber shop
- GitHub repository link: https://github.com/bismarkthompson/Project
- JavaScript interaction: Recent-work gallery (prev/next + dots), plus mobile nav toggle and contact-form validation
- Mobile responsiveness bonus: Completed
- Netlify live link: [link, or Not attempted]
