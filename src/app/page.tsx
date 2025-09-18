import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ClientsCarousel from '@/components/ClientsCarousel'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientsCarousel />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}