import ProcessInstallation from '@/components/home-4/ProcessInstallation'
import ServiceCardWithLeftText from '@/components/home-4/ServiceCardWithLeftText'
import ShareClientMarquee from '@/components/home-4/ShareClientMarquee'
import Hero from '@/components/home-4/Hero'
import CallToAction from '@/components/shared/CallToAction'
import FinancialBlog from '@/components/shared/FinancialBlog'
import MembersCounter from '@/components/shared/MembersCounter'
import TopIntegration from '@/components/home-4/TopIntegration'
import AboutCrypto from '@/components/home-7/AboutCrypto'

export const metadata = {
  title: 'Valuebound',
}

const HomePage4 = () => {
  return (
    <main>
      <Hero />
      <ShareClientMarquee />
      <ServiceCardWithLeftText />
      <ProcessInstallation />
      <TopIntegration />
      <AboutCrypto />
      <MembersCounter />
      <FinancialBlog className="pb-150 pt-150 dark:bg-dark-300" />
      <CallToAction title="Make Productivity easier with Valuebound" />
    </main>
  )
}

export default HomePage4
