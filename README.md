# JudeTheTaken Automations — immersive portfolio

Premium single-page Next.js portfolio using React Three Fiber, Three.js, Framer Motion and Tailwind CSS.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Customize
- Replace social `href="#"` links in `app/page.tsx`.
- Replace the hero copy, project data and contact form action.
- Connect the form to Resend, Formspree, a server action, or your preferred CRM.

## Performance notes
- R3F canvas uses `powerPreference: high-performance` and capped DPR.
- Three.js scene uses low-complexity geometry, a lightweight particle field, and no post-processing.
- Decorative animation is isolated to GPU-friendly transforms.
- Reduced-motion users receive a calmer experience.
