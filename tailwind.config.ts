import type { Config } from 'tailwindcss'
const config: Config = { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{fontFamily:{sans:['Inter','ui-sans-serif','system-ui']},boxShadow:{glow:'0 0 60px rgba(34,211,238,.16)'}}}, plugins:[] }
export default config
