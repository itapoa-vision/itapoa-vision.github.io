import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VideoAnalytics from '@/components/VideoAnalytics'
import Dashboard from '@/components/Dashboard'
import Technology from '@/components/Technology'
import SmartCity from '@/components/SmartCity'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <VideoAnalytics />
      <Dashboard />
      <Technology />
      <SmartCity />
      <CTA />
      <Footer />
    </main>
  )
}
