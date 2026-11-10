import { DesignStudio } from './components/DesignStudio'
import { Events } from './components/Events'
import { Experience } from './components/Experience'
import { Explore } from './components/Explore'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Visit } from './components/Visit'
import { Workshops } from './components/Workshops'
import { site } from './data/site'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>

      {/* Discreet concept disclaimer; scrolls away with the page */}
      <p className="bg-ink px-4 py-2 text-center text-[0.75rem] leading-snug text-ivory/85">
        Independent design concept by {site.concept.studio}. Not the official {site.name}{' '}
        website.
      </p>

      <Header />

      <main id="main">
        <Hero />
        <Marquee />
        <Experience />
        <Explore />
        <Workshops />
        <DesignStudio />
        <Events />
        <Visit />
      </main>

      <Footer />
    </>
  )
}
