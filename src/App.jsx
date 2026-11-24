import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import ProgramOverview from './components/ProgramOverview'
import Courses from './components/Courses'
import BlogCards from './components/BlogCards'
import Accreditation from './components/Accreditation'
import FutureReadyStartsNow from './components/FutureReadyStartsNow'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <ProgramOverview />
        <Courses />
        <BlogCards />
        <Accreditation />
        <FutureReadyStartsNow />
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}
