import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata={title:'JudeTheTaken Automations — Intelligent systems, beautifully built',description:'Premium automation systems, AI workflows and digital experiences by JudeTheTaken Automations.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
